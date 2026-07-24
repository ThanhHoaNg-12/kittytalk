// Kitty SPA Core Application Controller
// Handles SPA routing, Chat-based messenger simulation practicing, and PDF text extraction.

// --- CONSTANTS & CONFIG ---
const TOPICS = [
  { name: "Greetings", label: "Chào hỏi & Xã giao", icon: "👋" },
  { name: "Coffee Shop", label: "Quán cà phê", icon: "☕" },
  { name: "Restaurant", label: "Nhà hàng", icon: "🍔" },
  { name: "Family", label: "Gia đình", icon: "🏠" },
  { name: "Shopping", label: "Mua sắm", icon: "🛒" },
  { name: "Office", label: "Văn phòng & Công sở", icon: "💼" },
  { name: "Weather", label: "Thời tiết", icon: "🌧" }
];

// --- APP STATE ---
let currentTab = 'home';
let learnSubTab = 'situation'; // 'situation' or 'textbook'
let activeSession = {
  conversation: null,
  turnIndex: 0,
  correctCount: 0,
  xpEarned: 0,
  startTime: null,
  isWaitingForContinue: false,
  lastFeedback: null
};

// Web Audio Context for synthesizer sound effects
let audioCtx = null;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  window.db.init();
  setupAuth();
  if (checkAuth()) {
    initApp();
  }
});

function checkAuth() {
  const userJson = localStorage.getItem('talkdaily_auth_user'); // reuse the same auth key for seamless transition
  const authViewport = document.getElementById('auth-viewport');
  const appRoot = document.getElementById('app-root');

  if (userJson) {
    authViewport.classList.add('hidden');
    appRoot.classList.remove('hidden');
    
    const user = JSON.parse(userJson);
    const profileNames = document.querySelectorAll('.profile-user-name');
    profileNames.forEach(el => el.textContent = user.name || "Học viên Kitty");
    
    const homeGreetName = document.getElementById('home-greeting-username');
    if (homeGreetName) {
      homeGreetName.textContent = user.name || "Học viên";
    }
    
    return true;
  } else {
    authViewport.classList.remove('hidden');
    appRoot.classList.add('hidden');
    return false;
  }
}

function setupAuth() {
  const loginEmailBtn = document.getElementById('auth-login-email-btn');
  const loginGoogleBtn = document.getElementById('auth-login-google-btn');
  const usernameInput = document.getElementById('auth-username');
  const emailInput = document.getElementById('auth-email');

  if (loginEmailBtn) {
    loginEmailBtn.addEventListener('click', () => {
      const name = usernameInput.value.trim() || "Học viên";
      const email = emailInput.value.trim() || "hocvien@kitty.app";
      localStorage.setItem('talkdaily_auth_user', JSON.stringify({ name, email }));
      if (checkAuth()) {
        initApp();
        playSound('correct');
      }
    });
  }

  if (loginGoogleBtn) {
    loginGoogleBtn.addEventListener('click', () => {
      const name = usernameInput.value.trim() || "Google Learner";
      localStorage.setItem('talkdaily_auth_user', JSON.stringify({ 
        name, 
        email: "google.guest@kitty.app" 
      }));
      if (checkAuth()) {
        initApp();
        playSound('correct');
      }
    });
  }
}

function initApp() {
  // 1. Initial Icon Render
  lucide.createIcons();

  // 2. Setup Theme
  const settings = window.db.getSettings();
  applyTheme(settings.theme);

  // 3. Navigation Listeners
  setupNavigation();

  // 4. Voice setup
  setupSpeechVoices();

  // 5. Global Actions Event Listeners
  setupGlobalListeners();

  // 6. PDF Reader file parsing listeners
  setupPdfParserListener();

  // 7. Load Initial View
  switchTab('home');
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// --- SOUND EFFECTS SYNTHESIZER ---
function playSound(type) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'correct') {
      // Sweeter rising tone for Kitty
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(698.46, now + 0.08); // F5
      osc.frequency.setValueAtTime(880.00, now + 0.16); // A5
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'incorrect') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.25);
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.12, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'levelup') {
      osc.type = 'sine';
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      });
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.2, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.6);
      triggerConfettiParticles();
    }
  } catch (e) {
    console.warn("Audio synthesizer error", e);
  }
}

// Particle visual sparkles effect for Level up
function triggerConfettiParticles() {
  const container = document.body;
  for (let i = 0; i < 35; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle-particle';
    el.style.left = `${50 + (Math.random() * 40 - 20)}%`;
    el.style.top = `${40 + (Math.random() * 40 - 20)}%`;
    el.style.backgroundColor = ['#EC4899', '#F43F5E', '#FB7185', '#F472B6', '#FCD34D'][Math.floor(Math.random() * 5)];
    el.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
    
    // Custom movement angle
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 150 + 50;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;
    
    container.appendChild(el);
    
    el.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 800 + Math.random() * 400,
      easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
      fill: 'forwards'
    });

    setTimeout(() => el.remove(), 1200);
  }
}

// --- TEXT-TO-SPEECH (TTS) ---
function setupSpeechVoices() {
  const select = document.getElementById('settings-voice-select');
  if (!select) return;

  function populate() {
    const voices = window.speechSynthesis.getVoices();
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    
    if (enVoices.length === 0) {
      select.innerHTML = '<option value="en-US">English (Default US)</option>';
      return;
    }

    select.innerHTML = enVoices
      .map(v => `<option value="${v.name}">${v.name} (${v.lang})</option>`)
      .join('');

    const settings = window.db.getSettings();
    const activeVoice = enVoices.find(v => v.name === settings.activeVoiceName);
    if (activeVoice) {
      select.value = activeVoice.name;
    }
  }

  populate();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = populate;
  }
}

function speakText(text) {
  const settings = window.db.getSettings();
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = settings.speechRate || 0.9;
  
  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices.find(v => v.name === settings.activeVoiceName);
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  } else {
    const fallback = voices.find(v => v.lang.startsWith('en'));
    if (fallback) utterance.voice = fallback;
  }

  window.speechSynthesis.speak(utterance);
}

// --- ROUTING & TABS ---
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
      document.getElementById('app-sidebar').classList.add('translate-x-[-100%]');
      document.getElementById('app-sidebar').classList.add('md:translate-x-0');
    });
  });

  // Mobile menu buttons
  document.getElementById('sidebar-open-btn').addEventListener('click', () => {
    const sidebar = document.getElementById('app-sidebar');
    sidebar.classList.remove('translate-x-[-100%]');
    sidebar.classList.add('translate-x-0');
  });

  document.getElementById('sidebar-close-btn').addEventListener('click', () => {
    const sidebar = document.getElementById('app-sidebar');
    sidebar.classList.add('translate-x-[-100%]');
  });

  // Learn sub-tabs
  document.getElementById('learn-tab-situation-btn').addEventListener('click', () => {
    switchLearnSubTab('situation');
  });
  document.getElementById('learn-tab-textbook-btn').addEventListener('click', () => {
    switchLearnSubTab('textbook');
  });
}

function switchLearnSubTab(subTab) {
  learnSubTab = subTab;
  const sitBtn = document.getElementById('learn-tab-situation-btn');
  const txtBtn = document.getElementById('learn-tab-textbook-btn');
  const sitPanel = document.getElementById('learn-panel-situation');
  const txtPanel = document.getElementById('learn-panel-textbook');

  if (subTab === 'situation') {
    sitBtn.classList.add('bg-white', 'dark:bg-slate-800', 'text-primary', 'dark:text-white', 'shadow-sm');
    sitBtn.classList.remove('text-slate-500');
    txtBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-primary', 'dark:text-white', 'shadow-sm');
    txtBtn.classList.add('text-slate-500');
    sitPanel.classList.remove('hidden');
    txtPanel.classList.add('hidden');
  } else {
    txtBtn.classList.add('bg-white', 'dark:bg-slate-800', 'text-primary', 'dark:text-white', 'shadow-sm');
    txtBtn.classList.remove('text-slate-500');
    sitBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-primary', 'dark:text-white', 'shadow-sm');
    sitBtn.classList.add('text-slate-500');
    txtPanel.classList.remove('hidden');
    sitPanel.classList.add('hidden');
  }
}

function switchTab(tabName) {
  currentTab = tabName;
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(btn => {
    const btnTab = btn.getAttribute('data-tab');
    if (btnTab === tabName) {
      btn.classList.add('bg-primary/10', 'text-primary', 'dark:bg-primary/20', 'dark:text-pink-300');
      btn.classList.remove('text-slate-600', 'dark:text-slate-400');
    } else {
      btn.classList.remove('bg-primary/10', 'text-primary', 'dark:bg-primary/20', 'dark:text-pink-300');
      btn.classList.add('text-slate-600', 'dark:text-slate-400');
    }
  });

  const panels = document.querySelectorAll('.view-panel');
  panels.forEach(p => p.classList.add('hidden'));

  const activePanel = document.getElementById(`view-${tabName}`);
  if (activePanel) {
    activePanel.classList.remove('hidden');
  }

  renderTabView(tabName);
  refreshSidebarStats();
}

function refreshSidebarStats() {
  const profile = window.db.getProfile();
  const settings = window.db.getSettings();
  const todayXp = window.db.getTodayXp();

  document.getElementById('sb-streak-val').textContent = `${profile.streak} ngày`;
  document.getElementById('mobile-streak-val').textContent = profile.streak;
  document.getElementById('sb-level-val').textContent = `LV ${profile.level}`;
  document.getElementById('sb-xp-val').textContent = `${todayXp} / ${settings.dailyGoalXp} XP`;

  const xpPct = Math.min(100, (todayXp / settings.dailyGoalXp) * 100);
  document.getElementById('sb-xp-progress').style.width = `${xpPct}%`;
}

// --- RENDER VIEWS ---
function renderTabView(tabName) {
  const conversations = window.db.getConversations();
  const profile = window.db.getProfile();

  if (tabName === 'home') {
    const todayXp = window.db.getTodayXp();
    const settings = window.db.getSettings();
    const goalPct = Math.round(Math.min(100, (todayXp / settings.dailyGoalXp) * 100));
    
    document.getElementById('goal-pct-text').textContent = `${goalPct}%`;
    document.getElementById('goal-xp-text').textContent = `${todayXp}/${settings.dailyGoalXp} XP`;
    
    const strokeOffset = 301.6 - (301.6 * goalPct) / 100;
    document.getElementById('goal-circle-bar').style.strokeDashoffset = strokeOffset;
    
    document.getElementById('home-streak-banner').textContent = `${profile.streak} ngày liên tiếp`;
    
    const dueCount = window.db.getDueReviewCount();
    document.getElementById('home-due-review-badge').textContent = `${dueCount} bài`;

    updateReviewBadges();
  }

  else if (tabName === 'learn') {
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = TOPICS.map(topic => {
      const topicConvs = conversations.filter(c => c.topic === topic.name);
      const total = topicConvs.length;
      
      const queue = window.db.getReviewQueue();
      const completed = topicConvs.filter(c => {
        const qi = queue.find(q => q.conversationId === c.id);
        return qi && qi.repetitions > 0;
      }).length;
      
      const progressPct = total === 0 ? 0 : Math.round((completed / total) * 100);

      return `
        <div class="bg-white dark:bg-slate-900 border-thin p-6 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md hover:border-pink-300/60 dark:hover:border-rose-900/60 transition-all group duration-200">
          <div class="space-y-3">
            <div class="flex justify-between items-start">
              <span class="text-3xl">${topic.icon}</span>
              <span class="text-[10px] px-2 py-0.5 bg-rose-50 dark:bg-rose-950/40 text-primary font-bold rounded-lg">${total} bài thoại</span>
            </div>
            <div>
              <h4 class="font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-all text-sm sm:text-base">${topic.label}</h4>
              <p class="text-[9px] text-slate-400 uppercase font-bold mt-0.5">${topic.name}</p>
            </div>
          </div>

          <div class="mt-6 space-y-4">
            <div class="space-y-1">
              <div class="flex justify-between text-[10px] font-bold text-slate-400">
                <span>Đã thành thạo</span>
                <span>${progressPct}%</span>
              </div>
              <div class="w-full h-1.5 bg-rose-50 dark:bg-rose-950/20 rounded-full overflow-hidden">
                <div class="h-full bg-primary" style="width: ${progressPct}%"></div>
              </div>
            </div>
            
            <button data-topic="${topic.name}" class="topic-start-btn w-full py-2.5 bg-rose-50 hover:bg-primary hover:text-white dark:bg-rose-950/30 dark:hover:bg-primary dark:text-pink-100 text-primary text-xs font-bold rounded-xl transition-all border border-rose-100/50 dark:border-rose-950/30">
              Luyện hội thoại
            </button>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.topic-start-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const topic = btn.getAttribute('data-topic');
        startPracticeSession('topic', topic);
      });
    });

    // Render Textbook view generated items
    renderTextbookIngestedList();
  }

  else if (tabName === 'review') {
    const dueCount = window.db.getDueReviewCount();
    const mistakes = window.db.getMistakes();
    const favorites = window.db.getFavorites();

    document.getElementById('srs-total-val').textContent = window.db.getReviewQueue().length;
    document.getElementById('srs-due-val').textContent = dueCount;
    document.getElementById('srs-wrong-val').textContent = mistakes.length;

    document.getElementById('review-wrong-count-badge').textContent = `${mistakes.length} bài`;
    document.getElementById('review-fav-count-badge').textContent = `${favorites.length} bài`;

    const tableBody = document.getElementById('mistakes-table-body');
    const emptyState = document.getElementById('mistakes-empty-state');
    
    if (mistakes.length === 0) {
      tableBody.innerHTML = '';
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
      const weakConvs = window.db.getWeakConversations();
      
      tableBody.innerHTML = weakConvs.map(c => {
        const diffColor = c.difficulty === 'easy' ? 'bg-emerald-100 text-emerald-800' :
                          c.difficulty === 'medium' ? 'bg-amber-100 text-amber-800' :
                          'bg-rose-100 text-rose-800';
        return `
          <tr class="border-b border-rose-50 dark:border-rose-950/30 text-xs hover:bg-rose-50/20">
            <td class="py-4 pr-4 font-bold text-slate-800 dark:text-slate-200" title="${c.title}">${c.title}</td>
            <td class="py-4 px-4 text-slate-500 font-semibold">${c.topic}</td>
            <td class="py-4 px-4 text-center">
              <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase ${diffColor}">${c.difficulty}</span>
            </td>
            <td class="py-4 pl-4 text-right">
              <button data-practice-id="${c.id}" class="single-practice-btn py-1.5 px-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover text-[10px] transition-all shadow-sm">
                Luyện bài này
              </button>
            </td>
          </tr>
        `;
      }).join('');

      document.querySelectorAll('.single-practice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-practice-id');
          startPracticeSession('single', id);
        });
      });
    }

    updateReviewBadges();
  }

  else if (tabName === 'progress') {
    const totalPracticed = profile.totalPracticed || 0;
    const accuracy = totalPracticed === 0 ? 0 : Math.round((profile.totalCorrect / totalPracticed) * 100);
    const avgSpeed = totalPracticed === 0 ? 0 : ((profile.totalResponseTime / totalPracticed) / 1000).toFixed(1);

    document.getElementById('stat-total-practiced').textContent = totalPracticed;
    document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
    document.getElementById('stat-speed').textContent = `${avgSpeed}s`;
    document.getElementById('stat-max-streak').textContent = `${profile.longestStreak || 0} ngày`;

    renderXpChart();

    document.getElementById('progress-level-badge').textContent = profile.level;
    document.getElementById('progress-xp-val').textContent = `${profile.xp} XP`;

    let title = "Học viên Kitty";
    if (profile.level >= 2 && profile.level < 4) title = "Mèo Phản xạ";
    else if (profile.level >= 4 && profile.level < 7) title = "Bản xứ Kitty";
    else if (profile.level >= 7) title = "Fluent Kitty Master 👑";
    document.getElementById('progress-level-title').textContent = title;

    updateAchievementsList(profile);
  }

  else if (tabName === 'profile') {
    document.getElementById('prof-xp').textContent = `${profile.xp} XP`;
    document.getElementById('prof-level').textContent = `Cấp độ ${profile.level}`;
  }

  else if (tabName === 'settings') {
    const settings = window.db.getSettings();
    document.getElementById('settings-api-key').value = settings.geminiApiKey || '';
    document.getElementById('settings-auto-pronounce').checked = settings.autoPronounce;
    document.getElementById('settings-speech-rate').value = settings.speechRate;
    document.getElementById('settings-rate-val').textContent = `${settings.speechRate}x`;
    document.getElementById('settings-daily-goal').value = settings.dailyGoalXp;

    const statusMsg = document.getElementById('api-status-msg');
    if (settings.geminiApiKey) {
      statusMsg.innerHTML = '<span class="text-success font-semibold flex items-center gap-1"><i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Gemini AI đang kết nối (Online Mode)</span>';
      lucide.createIcons();
    } else {
      statusMsg.innerHTML = '<span class="text-slate-400 italic">Hiện tại hệ thống đang sử dụng kiểm tra offline tích hợp sẵn.</span>';
    }
  }
}

// Render generated PDF textbooks dialogues in Learn textbook view
function renderTextbookIngestedList() {
  const conversations = window.db.getConversations();
  const textbookConvs = conversations.filter(c => c.tags.includes("PDF Ingest") || c.tags.some(tag => tag.includes("Vocabulary in Use") || tag.includes("Grammar in Use")));
  
  const ingestBox = document.getElementById('kitty-pdf-ingester');
  if (!ingestBox) return;

  // Let's see if we have a section to render these generated books in learn textbook panel
  let listContainer = document.getElementById('kitty-ingested-dialogs-list');
  
  if (!listContainer) {
    // Create it
    const outer = document.createElement('div');
    outer.className = "space-y-3 pt-6 border-t border-rose-100/50 dark:border-rose-950/50";
    outer.innerHTML = `
      <h4 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Hội thoại trích xuất từ tài liệu của bạn</h4>
      <div id="kitty-ingested-dialogs-list" class="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
    `;
    ingestBox.parentNode.appendChild(outer);
    listContainer = document.getElementById('kitty-ingested-dialogs-list');
  }

  if (textbookConvs.length === 0) {
    listContainer.innerHTML = `
      <div class="col-span-full p-6 text-center text-xs text-slate-400 bg-rose-50/10 rounded-2xl border-thin">
        Chưa có hội thoại trích xuất. Vui lòng tải tài liệu PDF của bạn ở trên để biên dịch bài tập hội thoại mới!
      </div>
    `;
  } else {
    listContainer.innerHTML = textbookConvs.map(c => `
      <div class="p-4 bg-white dark:bg-slate-900 border-thin rounded-2xl flex flex-col justify-between gap-3 shadow-sm hover:border-pink-300">
        <div>
          <h5 class="font-extrabold text-xs text-slate-900 dark:text-white truncate" title="${c.title}">${c.title}</h5>
          <span class="text-[9px] px-2 py-0.5 bg-primary/10 text-primary font-bold rounded mt-1 inline-block">${c.tags[0] || 'Tài liệu'}</span>
        </div>
        <div class="flex justify-between items-center text-[10px] text-slate-400 border-t border-rose-50 pt-2">
          <span>${c.turns.filter(t => t.speaker === 'user').length} lượt đối thoại</span>
          <button data-practice-id="${c.id}" class="pdf-practice-start-btn py-1 px-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all">
            Luyện tập ngay
          </button>
        </div>
      </div>
    `).join('');

    listContainer.querySelectorAll('.pdf-practice-start-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-practice-id');
        startPracticeSession('single', id);
      });
    });
  }
}

function updateReviewBadges() {
  const count = window.db.getDueReviewCount();
  const badge = document.getElementById('badge-review-count');
  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function renderXpChart() {
  const stats = window.db.getDailyStats();
  const maxBarHeight = 100;
  const days = [];
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    days.push({ label: labels[d.getDay()], xp: stats[dateStr] || 0 });
  }

  const maxXp = Math.max(...days.map(d => d.xp), 30);

  days.forEach((day, index) => {
    const barEl = document.getElementById(`chart-bar-${index}`);
    const labelEl = document.getElementById(`chart-day-${index}`);
    if (barEl && labelEl) {
      const heightPct = Math.round((day.xp / maxXp) * maxBarHeight);
      barEl.style.height = `${heightPct}%`;
      barEl.setAttribute('title', `${day.xp} XP`);
      if (day.xp > 0) {
        barEl.classList.remove('bg-rose-50', 'dark:bg-rose-950/20');
        barEl.classList.add('bg-primary');
      } else {
        barEl.classList.remove('bg-primary');
        barEl.classList.add('bg-rose-50', 'dark:bg-rose-950/20');
      }
      labelEl.textContent = day.label;
    }
  });
}

function updateAchievementsList(profile) {
  const conversations = window.db.getConversations();
  const queue = window.db.getReviewQueue();
  
  const welcome = document.getElementById('badge-welcome');
  if (profile.totalPracticed > 0) welcome.classList.remove('opacity-55');
  
  const streak3 = document.getElementById('badge-streak3');
  if (profile.longestStreak >= 3) streak3.classList.remove('opacity-55');

  const perfect10 = document.getElementById('badge-perfect10');
  if (profile.totalCorrect >= 10) perfect10.classList.remove('opacity-55');

  const polyglot = document.getElementById('badge-polyglot');
  const distinctTopics = new Set();
  queue.forEach(item => {
    const c = conversations.find(x => x.id === item.conversationId);
    if (c && c.topic) {
      distinctTopics.add(c.topic);
    }
  });
  if (distinctTopics.size >= 3) polyglot.classList.remove('opacity-55');
}

// --- GLOBAL ACTIONS ---
function setupGlobalListeners() {
  document.getElementById('cta-quick-learn').addEventListener('click', () => {
    switchTab('learn');
  });

  document.getElementById('home-start-review-btn').addEventListener('click', () => {
    startPracticeSession('review');
  });

  document.getElementById('btn-goto-recently-wrong').addEventListener('click', () => {
    switchTab('review');
  });

  document.getElementById('btn-goto-favs').addEventListener('click', () => {
    switchTab('review');
  });

  // Settings Save Key
  document.getElementById('settings-save-key-btn').addEventListener('click', () => {
    const key = document.getElementById('settings-api-key').value.trim();
    window.db.saveSettings({ geminiApiKey: key });
    const statusMsg = document.getElementById('api-status-msg');
    statusMsg.innerHTML = '<span class="text-success font-semibold flex items-center gap-1"><i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Đã lưu Gemini Key thành công!</span>';
    lucide.createIcons();
    setTimeout(() => {
      renderTabView('settings');
    }, 2000);
  });

  document.getElementById('settings-auto-pronounce').addEventListener('change', (e) => {
    window.db.saveSettings({ autoPronounce: e.target.checked });
  });

  document.getElementById('settings-speech-rate').addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    document.getElementById('settings-rate-val').textContent = `${val}x`;
    window.db.saveSettings({ speechRate: val });
  });

  document.getElementById('settings-voice-select').addEventListener('change', (e) => {
    window.db.saveSettings({ activeVoiceName: e.target.value });
  });

  document.getElementById('settings-daily-goal').addEventListener('change', (e) => {
    window.db.saveSettings({ dailyGoalXp: parseInt(e.target.value) });
  });

  // Reset database button
  const resetBtn = document.getElementById('reset-db-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử học tập, XP và cài đặt? Ứng dụng Kitty sẽ reset lại từ đầu.")) {
        window.db.resetProgress();
        switchTab('home');
        alert("Đã reset dữ liệu Kitty thành công!");
      }
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('auth-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm("Bạn có chắc chắn muốn đăng xuất tài khoản?")) {
        localStorage.removeItem('talkdaily_auth_user');
        checkAuth();
      }
    });
  }

  // Dark/Light theme toggler
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    const current = window.db.getSettings();
    const newTheme = current.theme === 'dark' ? 'light' : 'dark';
    window.db.saveSettings({ theme: newTheme });
    applyTheme(newTheme);
  });

  document.getElementById('modal-levelup-close').addEventListener('click', () => {
    document.getElementById('modal-levelup').classList.add('hidden');
  });

  // Review Sub-practice triggers
  document.getElementById('srs-start-practice-btn').addEventListener('click', () => {
    startPracticeSession('review');
  });
  document.getElementById('review-wrong-practice-btn').addEventListener('click', () => {
    startPracticeSession('wrong');
  });
  document.getElementById('review-fav-practice-btn').addEventListener('click', () => {
    startPracticeSession('favorites');
  });

  // Preset books prompt mapping
  document.querySelectorAll('.preset-book-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bookName = btn.getAttribute('data-pdf-book');
      alert(`Kitty Book Reader: Bạn hãy chọn tải tệp "${bookName}" từ máy của bạn trong hộp thoại chọn file tiếp theo.`);
      document.getElementById('pdf-file-input').click();
    });
  });
}

// --- CLIENT-SIDE PDF PARSER SERVICE (pdf.js) ---
function setupPdfParserListener() {
  const fileInput = document.getElementById('pdf-file-input');
  const statusBox = document.getElementById('pdf-loading-status');
  const statusText = document.getElementById('pdf-loading-text');

  if (!fileInput) return;

  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const startPage = parseInt(document.getElementById('pdf-start-page').value) || 1;
    const endPage = parseInt(document.getElementById('pdf-end-page').value) || 2;

    // Check Gemini key
    const settings = window.db.getSettings();
    if (!settings.geminiApiKey) {
      alert("Vui lòng cấu hình Gemini API Key trong phần Cài đặt trước khi trích xuất tài liệu PDF.");
      switchTab('settings');
      fileInput.value = '';
      return;
    }

    // Show loading UI
    statusBox.classList.remove('hidden');
    statusText.textContent = "Đang đọc văn bản từ file PDF...";

    try {
      const text = await extractTextFromPdf(file, startPage, endPage);
      
      statusText.textContent = "Gemini đang dịch tài liệu & tạo bài đối thoại...";
      
      const result = await window.aiService.generateConversationFromPdf(text, file.name);
      
      playSound('correct');
      alert(`Trích xuất thành công! Đã thêm cuộc hội thoại phản xạ mới: "${result.conversation.title}"`);
      
      // Reset uploader
      fileInput.value = '';
      statusBox.classList.add('hidden');
      
      // Update UI textbooks list
      renderTextbookIngestedList();
      
      // Directly start this newly generated conversation!
      startPracticeSession('single', result.conversation.id);

    } catch (err) {
      console.error(err);
      alert(`Có lỗi xảy ra khi xử lý tài liệu: ${err.message}`);
      statusBox.classList.add('hidden');
      fileInput.value = '';
    }
  });
}

async function extractTextFromPdf(file, startPage, endPage) {
  const arrayBuffer = await file.arrayBuffer();
  
  // Initialize pdf.js worker URL correctly
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
  
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  
  let text = "";
  const actualEndPage = Math.min(endPage, pdf.numPages);
  const actualStartPage = Math.max(1, Math.min(startPage, actualEndPage));

  for (let pageNum = actualStartPage; pageNum <= actualEndPage; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(" ");
    text += `[Trang ${pageNum}]\n${pageText}\n\n`;
  }
  
  if (!text.trim()) {
    throw new Error("Không thể trích xuất văn bản từ tài liệu PDF này (tài liệu có thể là dạng ảnh quét scan).");
  }
  return text;
}

// --- INTERACTIVE MESSENGER CHAT WORKSPACE ---
function startPracticeSession(mode, filterVal = null) {
  const allConversations = window.db.getConversations();
  let selected = [];

  if (mode === 'topic') {
    selected = allConversations.filter(c => c.topic === filterVal);
  } 
  else if (mode === 'single') {
    selected = allConversations.filter(c => c.id === filterVal);
  }
  else if (mode === 'review') {
    selected = window.db.getDueReviewConversations();
    if (selected.length === 0) {
      selected = window.db.getWeakConversations();
    }
    if (selected.length === 0) {
      selected = allConversations.slice(0, 1);
    }
  }
  else if (mode === 'wrong') {
    const wrongIds = window.db.getMistakes();
    selected = allConversations.filter(c => wrongIds.includes(c.id));
    if (selected.length === 0) {
      alert("Bạn chưa có cuộc hội thoại sai nào trong danh sách!");
      return;
    }
  }
  else if (mode === 'favorites') {
    const favIds = window.db.getFavorites();
    selected = allConversations.filter(c => favIds.includes(c.id));
    if (selected.length === 0) {
      alert("Danh sách hội thoại yêu thích trống!");
      return;
    }
  }

  if (selected.length === 0) {
    alert("Không tìm thấy hội thoại nào phù hợp.");
    return;
  }

  // Shuffle selected and pick one conversation for practice
  const targetConversation = selected[Math.floor(Math.random() * selected.length)];

  // Initialize practice session state
  activeSession = {
    conversation: targetConversation,
    turnIndex: 0,
    correctCount: 0,
    xpEarned: 0,
    startTime: Date.now(),
    isWaitingForContinue: false,
    lastFeedback: null
  };

  // Open overlay
  document.getElementById('practice-viewport').classList.remove('hidden');
  document.getElementById('chat-messages-area').innerHTML = ''; // clear chat area
  
  // Setup practice header details
  document.getElementById('practice-title').textContent = targetConversation.title;
  
  const diffEl = document.getElementById('practice-difficulty');
  diffEl.textContent = targetConversation.difficulty;
  
  updateFavoriteStarIcon(targetConversation.id);

  // Load first turn of dialog
  loadNextChatTurn();
}

function loadNextChatTurn() {
  const session = activeSession;
  const turns = session.conversation.turns;
  
  if (session.turnIndex >= turns.length) {
    // Dialogue completed!
    endChatPracticeSession();
    return;
  }

  const turn = turns[session.turnIndex];
  
  // Enable input & set actions
  const textInput = document.getElementById('practice-user-input');
  textInput.value = '';
  textInput.disabled = false;
  textInput.placeholder = "Gõ câu dịch tiếng Anh của bạn tại đây... (Nhấn Enter)";
  
  // Toggle buttons
  document.getElementById('practice-check-btn').classList.remove('hidden');
  document.getElementById('chat-continue-btn').classList.add('hidden');

  // Update header progress numbers
  const userTurnsCount = turns.filter(t => t.speaker === 'user').length;
  const currUserIndex = turns.slice(0, session.turnIndex + 1).filter(t => t.speaker === 'user').length;
  
  document.getElementById('practice-progress-text').textContent = `${currUserIndex} / ${userTurnsCount}`;
  const progressPct = ((currUserIndex - 1) / userTurnsCount) * 100;
  document.getElementById('practice-progress-bar').style.width = `${progressPct}%`;

  if (turn.speaker === 'ai') {
    // Append AI bubble to messages area
    appendAiChatBubble(turn.text);
    
    // Auto speak
    const settings = window.db.getSettings();
    if (settings.autoPronounce) {
      speakText(turn.text);
    }
    
    // Move turn forward immediately since AI speaks without waiting for input
    session.turnIndex += 1;
    setTimeout(() => {
      loadNextChatTurn();
    }, 1200);

  } else {
    // It's User turn: append user prompt bubble
    appendUserPromptBubble(turn.promptVietnamese);
    session.startTime = Date.now();
    session.isWaitingForContinue = false;
    textInput.focus();
  }
}

function appendAiChatBubble(text) {
  const area = document.getElementById('chat-messages-area');
  const bubble = document.createElement('div');
  bubble.className = "flex gap-3 max-w-[85%] animate-bubble-left";
  bubble.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 text-white flex items-center justify-center shadow-sm"><i data-lucide="cat" class="w-4.5 h-4.5"></i></div>
    <div class="p-4 bg-rose-50/40 dark:bg-rose-950/20 rounded-3xl rounded-tl-none border border-rose-100/50 dark:border-rose-950/50 text-sm font-semibold text-slate-800 dark:text-slate-200">
      ${text}
    </div>
  `;
  area.appendChild(bubble);
  lucide.createIcons();
  scrollToBottomChat();
}

function appendUserPromptBubble(promptText) {
  const area = document.getElementById('chat-messages-area');
  const bubble = document.createElement('div');
  bubble.className = "flex gap-3 max-w-[85%] ml-auto justify-end animate-bubble-right";
  bubble.innerHTML = `
    <div class="p-4 bg-pink-100/20 dark:bg-rose-950/10 rounded-3xl rounded-tr-none border border-pink-200/50 dark:border-rose-950/40 text-sm text-right">
      <span class="text-[9px] font-bold text-primary block uppercase tracking-wide mb-1">Dịch câu này:</span>
      <span class="font-medium text-slate-700 dark:text-slate-350">${promptText}</span>
    </div>
  `;
  area.appendChild(bubble);
  scrollToBottomChat();
}

function appendUserAnswerBubble(text, isCorrect, suggestion = "") {
  const area = document.getElementById('chat-messages-area');
  const bubble = document.createElement('div');
  bubble.className = "flex gap-3 max-w-[85%] ml-auto justify-end animate-bubble-right";
  
  if (isCorrect) {
    bubble.innerHTML = `
      <div class="p-4 bg-primary text-white rounded-3xl rounded-tr-none text-sm text-right font-medium">
        ${text}
      </div>
    `;
  } else {
    bubble.innerHTML = `
      <div class="p-4 bg-rose-500/10 dark:bg-rose-950/30 border border-danger/35 text-danger rounded-3xl rounded-tr-none text-sm text-right">
        <span class="line-through block text-slate-400 dark:text-slate-500 text-xs">${text}</span>
        <span class="block font-bold text-xs mt-1">Gợi ý: ${suggestion}</span>
      </div>
    `;
  }
  
  area.appendChild(bubble);
  scrollToBottomChat();
}

function scrollToBottomChat() {
  const area = document.getElementById('chat-messages-area');
  area.scrollTop = area.scrollHeight;
}

async function checkTurnAnswer() {
  const session = activeSession;
  if (session.isWaitingForContinue) return;

  const textInput = document.getElementById('practice-user-input');
  const userAnswer = textInput.value.trim();
  
  if (!userAnswer) {
    textInput.focus();
    return;
  }

  // Show loading
  const checkBtn = document.getElementById('practice-check-btn');
  checkBtn.disabled = true;
  checkBtn.innerHTML = '<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>';

  const turn = session.conversation.turns[session.turnIndex];
  const responseTime = Date.now() - session.startTime;

  // Grade
  const result = await window.aiService.evaluateTranslation(userAnswer, turn);
  session.lastFeedback = result;
  session.isWaitingForContinue = true;

  // Save result to db
  window.db.logPracticeResult(session.conversation.id, turn.id, result.isCorrect, responseTime);

  // Append user typed bubble (show correct/incorrect state)
  appendUserAnswerBubble(userAnswer, result.isCorrect, result.suggestedTranslation);

  // Load Feedback drawer content
  const drawer = document.getElementById('practice-feedback-drawer');
  const drawerContent = document.getElementById('drawer-feedback-content');
  drawer.classList.remove('hidden');

  if (result.isCorrect) {
    playSound('correct');
    
    // Add XP
    const xpReward = 10;
    session.xpEarned += xpReward;
    session.correctCount += 1;
    const xpDetails = window.db.addXp(xpReward);

    drawerContent.innerHTML = `
      <div class="space-y-4">
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 rounded-xl">
          <h4 class="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-1.5">
            <i data-lucide="check-circle" class="w-4.5 h-4.5"></i>
            Chính xác! (+${xpReward} XP)
          </h4>
          <p class="text-[11px] text-slate-500 mt-1">${result.explanation}</p>
        </div>

        <div class="space-y-1">
          <h5 class="font-bold text-slate-400 uppercase text-[9px] tracking-wide">Ý nghĩa câu nói</h5>
          <p class="text-xs text-slate-700 dark:text-slate-350 font-medium">${result.analysis.meaning || turn.meaning}</p>
        </div>

        <div class="space-y-1">
          <h5 class="font-bold text-slate-400 uppercase text-[9px] tracking-wide">Ngữ pháp</h5>
          <p class="text-xs text-slate-700 dark:text-slate-350 font-medium">${result.analysis.grammar || turn.grammarNotes}</p>
        </div>

        <div class="space-y-1">
          <h5 class="font-bold text-primary uppercase text-[9px] tracking-wide">Mẹo nói bản ngữ</h5>
          <p class="text-xs text-slate-700 dark:text-slate-350 font-medium italic">${result.analysis.nativeTip || turn.nativeTip}</p>
        </div>

        <div class="space-y-2 border-t border-rose-100 dark:border-rose-950/30 pt-3">
          <h5 class="font-bold text-slate-400 uppercase text-[9px] tracking-wide">Từ vựng quan trọng</h5>
          <div class="space-y-1">
            ${(result.analysis.vocabulary || turn.vocabulary || []).map(v => `
              <div class="p-2 bg-white dark:bg-slate-800 rounded-xl border border-rose-50 dark:border-rose-950/30">
                <div class="flex justify-between">
                  <span class="font-bold text-primary font-mono text-[11px]">${v.term}</span>
                  <span class="text-[9px] bg-rose-50 px-1 py-0.5 rounded text-slate-400 font-semibold">${v.type}</span>
                </div>
                <p class="text-[10px] text-slate-500 mt-0.5">${v.explanation}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // TTS autoplay correct suggestion
    const settings = window.db.getSettings();
    if (settings.autoPronounce) {
      speakText(result.suggestedTranslation || turn.english);
    }

    if (xpDetails.leveledUp) {
      setTimeout(() => {
        playSound('levelup');
        document.getElementById('modal-level-num-text').textContent = `CẤP ĐỘ ${xpDetails.profile.level}!`;
        document.getElementById('modal-levelup').classList.remove('hidden');
      }, 400);
    }

  } else {
    playSound('incorrect');

    drawerContent.innerHTML = `
      <div class="space-y-4">
        <div class="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 rounded-xl">
          <h4 class="font-extrabold text-danger text-sm flex items-center gap-1.5">
            <i data-lucide="x-circle" class="w-4.5 h-4.5"></i>
            Chưa chính xác
          </h4>
          <p class="text-[11px] text-slate-550 mt-1">${result.explanation}</p>
        </div>

        <div class="space-y-1 bg-rose-50/20 p-2.5 rounded-xl border border-rose-100/50">
          <h5 class="font-bold text-danger uppercase text-[9px] tracking-wide">Đáp án gợi ý tốt nhất</h5>
          <p class="text-xs text-slate-900 dark:text-white font-bold font-mono pt-0.5">${result.suggestedTranslation || turn.english}</p>
        </div>

        <div class="space-y-1">
          <h5 class="font-bold text-slate-400 uppercase text-[9px] tracking-wide">Ngữ pháp cần nhớ</h5>
          <p class="text-xs text-slate-700 dark:text-slate-350 font-medium">${result.analysis.grammar || turn.grammarNotes}</p>
        </div>

        <div class="space-y-1">
          <h5 class="font-bold text-primary uppercase text-[9px] tracking-wide">Mẹo nói bản ngữ</h5>
          <p class="text-xs text-slate-700 dark:text-slate-350 font-medium italic">${result.analysis.nativeTip || turn.nativeTip}</p>
        </div>

        <div class="space-y-2 border-t border-rose-100 dark:border-rose-950/30 pt-3">
          <h5 class="font-bold text-slate-400 uppercase text-[9px] tracking-wide">Từ vựng</h5>
          <div class="space-y-1">
            ${(result.analysis.vocabulary || turn.vocabulary || []).map(v => `
              <div class="p-2 bg-white dark:bg-slate-800 rounded-xl border border-rose-50 dark:border-rose-950/30">
                <div class="flex justify-between">
                  <span class="font-bold text-primary font-mono text-[11px]">${v.term}</span>
                  <span class="text-[9px] bg-rose-50 px-1.5 py-0.5 rounded text-slate-400 font-semibold">${v.type}</span>
                </div>
                <p class="text-[10px] text-slate-500 mt-0.5">${v.explanation}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Update star star ratings
  updateFavoriteStarIcon(session.conversation.id);
  lucide.createIcons();

  // Show continue button, hide check button
  checkBtn.disabled = false;
  checkBtn.innerHTML = 'Gửi <i data-lucide="send" class="w-4 h-4"></i>';
  checkBtn.classList.add('hidden');
  document.getElementById('chat-continue-btn').classList.remove('hidden');
}

function handleContinueChat() {
  const session = activeSession;
  
  // Hide feedback drawer panel (optional, we keep it but it will overwrite)
  document.getElementById('practice-feedback-drawer').classList.add('hidden');

  session.turnIndex += 1;
  loadNextChatTurn();
}

function endChatPracticeSession() {
  const session = activeSession;
  
  // Check if they got 100% correct to clear the conversation from mistakes list
  const userTurnsCount = session.conversation.turns.filter(t => t.speaker === 'user').length;
  if (session.correctCount === userTurnsCount) {
    window.db.clearMistake(session.conversation.id);
  }

  document.getElementById('practice-viewport').classList.add('hidden');
  document.getElementById('practice-feedback-drawer').classList.add('hidden');

  alert(`Hội thoại kết thúc!\nBạn đã đối thoại thành công: ${session.correctCount} / ${userTurnsCount} lượt.\nTích luỹ: +${session.xpEarned} XP.`);
  
  switchTab(currentTab);
}

// Button click binds
document.getElementById('practice-check-btn').addEventListener('click', checkTurnAnswer);
document.getElementById('chat-continue-btn').addEventListener('click', handleContinueChat);

// Star favorite button toggler
document.getElementById('practice-favorite-btn').addEventListener('click', () => {
  const session = activeSession;
  if (!session.conversation) return;
  window.db.toggleFavorite(session.conversation.id);
  updateFavoriteStarIcon(session.conversation.id);
});

function updateFavoriteStarIcon(conversationId) {
  const isFav = window.db.isFavorite(conversationId);
  const btn = document.getElementById('practice-favorite-btn');
  if (isFav) {
    btn.innerHTML = '<i data-lucide="star" class="w-4.5 h-4.5 fill-amber-400 text-amber-400"></i>';
  } else {
    btn.innerHTML = '<i data-lucide="star" class="w-4.5 h-4.5 text-slate-400"></i>';
  }
  lucide.createIcons();
}

// Exit button
document.getElementById('practice-exit-btn').addEventListener('click', () => {
  if (confirm("Bạn có chắc chắn muốn thoát cuộc đối thoại này? Tiến trình XP của các câu đúng vẫn sẽ được tích luỹ.")) {
    document.getElementById('practice-viewport').classList.add('hidden');
    document.getElementById('practice-feedback-drawer').classList.add('hidden');
    switchTab(currentTab);
  }
});

// Shortcuts listeners (Enter for grading & next turn)
window.addEventListener('keydown', (e) => {
  const practiceViewport = document.getElementById('practice-viewport');
  if (practiceViewport.classList.contains('hidden')) return;

  const isCheckVisible = !document.getElementById('practice-check-btn').classList.contains('hidden');
  const isContinueVisible = !document.getElementById('chat-continue-btn').classList.contains('hidden');

  if (e.key === 'Enter' && !e.shiftKey) {
    if (isCheckVisible) {
      if (document.activeElement && document.activeElement.id === 'practice-user-input') {
        e.preventDefault();
      }
      checkTurnAnswer();
    } else if (isContinueVisible) {
      e.preventDefault();
      handleContinueChat();
    }
  }
});
