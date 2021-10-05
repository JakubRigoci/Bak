export const isLoggedIn =  (state) => !!state.token
    
export const authStatus = (state) => state.status

export const snailById = (state) => (id) => {
    return state.snails.find(s => s.snekId === id)
}

export const snailsByGroup = (state) => (id) => {
    return state.snailsForGroup[id]
}
export const groupById = (state, id) => state.groups.filter(g => g.skupinaId === id)

export const activeBox = (state) => state.activeBox

export const activeGroupsForBox = (state) => () => {
    return state.groups.filter(g => g.aktivni === true);
}