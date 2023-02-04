export const getStorageItem = (key) => localStorage.getItem(key);

export const setStorageItem = (key, value) => localStorage.setItem(key, value);

export const removeStorageItem = (key) => localStorage.removeItem(key);

export const clearStorage = () => localStorage.clear();
