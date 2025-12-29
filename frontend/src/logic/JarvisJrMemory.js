const saveChatToLS = (chatName, chatArray) => {
    if (!chatArray || chatArray.length === 0) return false;
    localStorage.setItem(chatName, JSON.stringify(chatArray));
    return localStorage.getItem(chatName) != null;
}

const loadChatFromLS = (chatName) => {
    const allChats = localStorage.getItem("JarvisJrChats");
    const chatData = allChats ? JSON.parse(allChats)[chatName] : null;
    if (chatData && chatData.length > 0) {
        memory.lobotomy();
        memory.push(...JSON.parse(chatData));
        return memory.recall();
    }
    return [];
}

const getAllChatsFromLS = () => {
    const allChats = localStorage.getItem("JarvisJrChats");
    return allChats ? Object.keys(JSON.parse(allChats)) : [];
}

class Memory {
    #memory = [];
    push = (...events) => this.#memory.push(...events);
    pop = () => this.isEmpty() ? null : this.#memory.pop();
    peek = () => this.#memory[this.#memory.length - 1];
    isEmpty = () => this.#memory.length === 0;
    recall = () => [...this.#memory];
    lobotomy = () => this.#memory = [];
}

const memory = new Memory();
export { memory, saveChatToLS, loadChatFromLS, getAllChatsFromLS };