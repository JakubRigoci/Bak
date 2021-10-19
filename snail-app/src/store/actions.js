import axios from "axios";

export const getSnails = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("snek").then(response =>{
      commit("GET_SNAILS", response.data.map(d => d.snek))
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getSnailsForGroup = ({commit}, groupId) => {
  return new Promise((resolve, reject) => {
    axios.get(`snek/skupina/${groupId}`).then(response =>{
      commit("GET_SNAILS_FOR_GROUP",{ id: groupId, data: response.data.map(d => d.snek)})
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getGroupsForBox = ({commit}, boxId) => {
  return new Promise((resolve, reject) => {
    axios.get(`box/${boxId}/skupina`).then(response =>{
      console.log(response.data)
      commit("GET_GROUPS_FOR_BOX", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })

}

export const getBoxes = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("box").then(response =>{
      commit("GET_BOXES", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getGroups = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("skupina").then(response =>{
      commit("GET_GROUPS", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getSnuskas = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("snuska").then(response =>{
      commit("GET_SNUSKAS", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getTaxonomies = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("taxonomy").then(response => {
      commit("GET_TAXONOMIES", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getMeasuresForSnail = ({commit}, snailId) => {
  return new Promise((resolve, reject) => {
    axios.get(`mereni/${snailId}`).then(response => {
      commit("GET_MEASURES_FOR_SNAIL", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const addSnail = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post(`snek/${payload.id}`, payload.snail).then(response =>{
      console.log("SNAIL")
      console.log(response.data)
      commit("ADD_SNAIL", {groupId: payload.id, snail: response.data })
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const addBox = ({commit}, box) => {
  return new Promise((resolve, reject) => {
    axios.post("box", box).then(response => {
      commit("ADD_BOX", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const addGroup = ({commit}, payload) => {
  console.log("BOXID: " + payload.boxId)
  return new Promise((resolve, reject) => {
    axios.post(`skupina/${payload.boxId}`, payload.group).then(response => {
      commit("ADD_GROUP", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const addSnuska = ({commit}, snuska) => {
  return new Promise((resolve, reject) => {
    axios.post(`snuska/${snuska.velikost}`, snuska).then(response => {
      commit("ADD_SNUSKA", response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const removeSnail = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.delete(`snek/${payload.snailId}`).then(response => {
      commit("REMOVE_SNAIL", payload)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const removeGroup = ({commit}, groupId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`skupina/${groupId}`).then(response =>{
      commit("REMOVE_GROUP", groupId)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const removeBox = ({commit}, boxId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`box/${boxId}`).then(response => {
      commit("REMOVE_BOX", boxId)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const removeSnuska = ({commit}, snuskaId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`snuska/${snuskaId}`).then(response => {
      commit("REMOVE_SNUSKA", snuskaId)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const setActiveBox = ({commit}, boxId) => {
  return new Promise((resolve) => {
    commit("SET_ACTIVE_BOX", boxId)
    resolve()
  })

}

export const login = ({commit}, user) => {
    return new Promise((resolve, reject) => {
      commit("AUTH_REQUEST")
      console.log(user)
      axios.post("auth/signin", { "username" : user.name, "password" : user.password})
      .then(resp => {
        console.log(resp.data)
        const token = resp.data.accessToken
        const user = {
          userId : resp.data.id, 
          userName : resp.data.name, 
          userEmail : resp.data.email, 
          userRoles : resp.data.roles
        }

        localStorage.setItem("token", token)
        axios.defaults.headers.common = {"Authorization" : `Bearer ${token}`}
        commit("AUTH_SUCCESS", {token: token, user: user} )
        console.log(user)
        resolve(resp)
      })
      .catch(err => {
        commit("AUTH_ERROR")
        localStorage.removeItem("token")
        console.error(err)
        reject(err)
      })
    })
}

export const logout = ({commit}) => {
    return new Promise((resolve) => {
      commit("LOGOUT")
      localStorage.removeItem("token")
      delete axios.defaults.headers.common["Authorization"]
      resolve()
    })
}
