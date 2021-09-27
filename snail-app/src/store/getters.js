export const isLoggedIn =  (state) => !!state.token
    
export const authStatus = (state) => state.status

export const snailById = (state, id) => state.snails.filter(s => s.snekId === id)

export const groupById = (state, id) => state.groups.filter(g => g.skupinaId === id)

export const activeGroups = function(state) {
    if (state.groups)
        return state.groups.filter(g => g.aktivni === true);
    return {
        jmeno: "",
        komentar: "",
        velikost: "",   
    };
}