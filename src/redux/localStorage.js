
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('initState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('initState', serializedState);
    } catch (err) {
        throw new Error(err)
    }
};