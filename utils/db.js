// Kitty Database & State Manager (using LocalStorage)
// Manages profiles, streaks, Spaced Repetition (SRS) for Conversations, and favorites.

const STORAGE_KEYS = {
  CONVERSATIONS: 'kitty_conversations',
  USER_PROFILE: 'kitty_user_profile',
  MISTAKES: 'kitty_mistakes', // stores conversation IDs
  REVIEW_QUEUE: 'kitty_review_queue', // SM-2 schedule for conversations
  FAVORITES: 'kitty_favorites', // stores conversation IDs
  SETTINGS: 'kitty_settings',
  DAILY_STATS: 'kitty_daily_stats'
};

const DEFAULT_PROFILE = {
  xp: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  lastActiveDate: null, // YYYY-MM-DD
  totalPracticed: 0, // total turns practiced
  totalCorrect: 0, // total turns correct
  totalResponseTime: 0, // total response time in ms
  badges: []
};

const DEFAULT_SETTINGS = {
  geminiApiKey: '',
  theme: 'pink', // default pink theme
  autoPronounce: true,
  speechRate: 0.9,
  dailyGoalXp: 30, // 3 correct turns = 30 XP
  voiceGender: 'female'
};

window.db = {
  // Initialize Database
  init() {
    if (!localStorage.getItem(STORAGE_KEYS.CONVERSATIONS)) {
      localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(window.defaultConversations));
    }
    if (!localStorage.getItem(STORAGE_KEYS.USER_PROFILE)) {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(DEFAULT_PROFILE));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.MISTAKES)) {
      localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.REVIEW_QUEUE)) {
      localStorage.setItem(STORAGE_KEYS.REVIEW_QUEUE, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.FAVORITES)) {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.DAILY_STATS)) {
      localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify({}));
    }

    this.refreshStreak();
  },

  // --- CONVERSATIONS ---
  getConversations() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CONVERSATIONS)) || [];
  },

  getConversationById(id) {
    const list = this.getConversations();
    return list.find(c => c.id === id);
  },

  addConversations(newConvs) {
    const list = this.getConversations();
    // Avoid duplicate conversations by comparing title
    const filtered = newConvs.filter(nc => !list.some(c => c.title.toLowerCase() === nc.title.toLowerCase()));
    const updated = [...list, ...filtered];
    localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(updated));
    return filtered.length; // Return how many were actually added
  },

  // --- PROFILE, LEVEL & XP ---
  getProfile() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE)) || DEFAULT_PROFILE;
  },

  saveProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  },

  addXp(amount) {
    const profile = this.getProfile();
    profile.xp += amount;
    
    // Level calculation
    const oldLevel = profile.level;
    const newLevel = Math.floor(Math.sqrt(profile.xp / 100)) + 1;
    
    let leveledUp = false;
    if (newLevel > oldLevel) {
      profile.level = newLevel;
      leveledUp = true;
    }

    this.logDailyXp(amount);
    this.saveProfile(profile);
    return { profile, leveledUp };
  },

  // --- STREAK MANAGEMENT ---
  refreshStreak() {
    const profile = this.getProfile();
    const today = new Date().toISOString().split('T')[0];
    
    if (!profile.lastActiveDate) {
      this.saveProfile(profile);
      return;
    }

    const lastDate = new Date(profile.lastActiveDate);
    const currDate = new Date(today);
    const diffTime = Math.abs(currDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      profile.streak = 0;
      this.saveProfile(profile);
    }
  },

  recordActivity() {
    const profile = this.getProfile();
    const today = new Date().toISOString().split('T')[0];
    
    if (profile.lastActiveDate !== today) {
      if (profile.lastActiveDate) {
        const lastDate = new Date(profile.lastActiveDate);
        const currDate = new Date(today);
        const diffTime = Math.abs(currDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          profile.streak += 1;
        } else if (diffDays > 1) {
          profile.streak = 1;
        }
      } else {
        profile.streak = 1;
      }
      
      profile.lastActiveDate = today;
      if (profile.streak > profile.longestStreak) {
        profile.longestStreak = profile.streak;
      }
      
      this.saveProfile(profile);
    }
  },

  // --- DAILY STATS ---
  getDailyStats() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS)) || {};
  },

  logDailyXp(amount) {
    const stats = this.getDailyStats();
    const today = new Date().toISOString().split('T')[0];
    if (!stats[today]) {
      stats[today] = 0;
    }
    stats[today] += amount;
    localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify(stats));
  },

  getTodayXp() {
    const stats = this.getDailyStats();
    const today = new Date().toISOString().split('T')[0];
    return stats[today] || 0;
  },

  // --- SETTINGS ---
  getSettings() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS)) || DEFAULT_SETTINGS;
  },

  saveSettings(settings) {
    const current = this.getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
  },

  // --- FAVORITES ---
  getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES)) || [];
  },

  toggleFavorite(conversationId) {
    let favorites = this.getFavorites();
    let isAdded = false;
    if (favorites.includes(conversationId)) {
      favorites = favorites.filter(id => id !== conversationId);
    } else {
      favorites.push(conversationId);
      isAdded = true;
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    return isAdded;
  },

  isFavorite(conversationId) {
    return this.getFavorites().includes(conversationId);
  },

  // --- PRACTICE & SRS LOGS FOR CONVERSATIONS ---
  logPracticeResult(conversationId, turnId, isCorrect, responseTimeMs) {
    // 1. Update Profile Stats
    const profile = this.getProfile();
    profile.totalPracticed += 1;
    if (isCorrect) profile.totalCorrect += 1;
    profile.totalResponseTime += responseTimeMs;
    this.saveProfile(profile);
    
    this.recordActivity();

    // 2. Manage Mistakes
    let mistakes = JSON.parse(localStorage.getItem(STORAGE_KEYS.MISTAKES)) || [];
    if (!isCorrect) {
      if (!mistakes.includes(conversationId)) {
        mistakes.push(conversationId);
      }
    } else {
      // If correct, we don't automatically remove from mistakes unless the whole conversation is finished and correct.
      // We will handle conversation-level removal elsewhere, or just let them practice it.
    }
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));

    // 3. Update Spaced Repetition Queue (SM-2 Algorithm)
    let reviewQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEW_QUEUE)) || [];
    let item = reviewQueue.find(qi => qi.conversationId === conversationId);
    
    const now = new Date();
    
    if (!item) {
      item = {
        conversationId,
        interval: 1, // in days
        repetitions: 0,
        easeFactor: 2.5,
        nextReviewDate: now.toISOString(),
        history: []
      };
      reviewQueue.push(item);
    }

    item.history.push({
      date: now.toISOString(),
      turnId,
      wasCorrect: isCorrect,
      responseTime: responseTimeMs
    });

    if (isCorrect) {
      item.repetitions += 1;
      if (item.repetitions === 1) {
        item.interval = 1;
      } else if (item.repetitions === 2) {
        item.interval = 3;
      } else {
        item.interval = Math.round(item.interval * item.easeFactor);
      }
      item.easeFactor = Math.min(3.0, item.easeFactor + 0.1);
    } else {
      item.repetitions = 0;
      item.interval = 1; // back to tomorrow
      item.easeFactor = Math.max(1.3, item.easeFactor - 0.2);
    }

    const reviewDate = new Date();
    reviewDate.setDate(now.getDate() + item.interval);
    reviewDate.setHours(0, 0, 0, 0);
    item.nextReviewDate = reviewDate.toISOString();

    localStorage.setItem(STORAGE_KEYS.REVIEW_QUEUE, JSON.stringify(reviewQueue));
  },

  // Remove conversation from mistakes queue entirely
  clearMistake(conversationId) {
    let mistakes = JSON.parse(localStorage.getItem(STORAGE_KEYS.MISTAKES)) || [];
    mistakes = mistakes.filter(id => id !== conversationId);
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
  },

  getReviewQueue() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEW_QUEUE)) || [];
  },

  getMistakes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.MISTAKES)) || [];
  },

  getDueReviewCount() {
    const queue = this.getReviewQueue();
    const now = new Date().getTime();
    return queue.filter(item => new Date(item.nextReviewDate).getTime() <= now).length;
  },

  getDueReviewConversations() {
    const queue = this.getReviewQueue();
    const now = new Date().getTime();
    const dueIds = queue
      .filter(item => new Date(item.nextReviewDate).getTime() <= now)
      .map(item => item.conversationId);
    
    const conversations = this.getConversations();
    return conversations.filter(c => dueIds.includes(c.id));
  },

  getWeakConversations() {
    const queue = this.getReviewQueue();
    const mistakesIds = this.getMistakes();
    const conversations = this.getConversations();
    
    const weakIds = queue
      .filter(item => {
        if (mistakesIds.includes(item.conversationId)) return true;
        const recentHistory = item.history.slice(-5);
        const failCount = recentHistory.filter(h => !h.wasCorrect).length;
        return failCount >= 1;
      })
      .map(item => item.conversationId);

    const combinedIds = Array.from(new Set([...mistakesIds, ...weakIds]));
    return conversations.filter(c => combinedIds.includes(c.id));
  },

  resetProgress() {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(DEFAULT_PROFILE));
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.REVIEW_QUEUE, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify({}));
    this.init();
  }
};
