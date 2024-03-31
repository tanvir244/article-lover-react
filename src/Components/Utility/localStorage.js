
const getDataFromStorage = items => {
    const getStorageItems = localStorage.getItem(items);
    if (getStorageItems) {
        return JSON.parse(getStorageItems);
    }
    return [];
}

const saveItemsToStorage = (items, readId) => {
    const getStorageData = getDataFromStorage(items);
    const exists = getStorageData.find(id => id === readId);
    if (!exists) {
        getStorageData.push(readId);
        localStorage.setItem(items, JSON.stringify(getStorageData));
    }
}

export { getDataFromStorage, saveItemsToStorage }