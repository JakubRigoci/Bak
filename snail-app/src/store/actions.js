import axios from "axios";

export const getSnails = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("snek").then(response =>{
      commit("GET_SNAILS", response.data.map(d => d.snek))
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const getSnailsForGroup = ({commit}, groupId) => {
  return new Promise((resolve, reject) => {
    axios.get(`snek/skupina/${groupId}`).then(response =>{
      commit("GET_SNAILS_FOR_GROUP",{ id: groupId, data: response.data.map(d => d.snek)})
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const getGroupsForBox = ({commit}, boxId) => {
  return new Promise((resolve, reject) => {
    axios.get(`box/${boxId}/skupina`).then(response =>{
      console.log(response.data)
      commit("GET_GROUPS_FOR_BOX", response.data)
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })

}

export const getBoxes = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("box").then(response =>{
      commit("GET_BOXES", response.data)
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const getGroups = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("skupina").then(response =>{
      commit("GET_GROUPS", response.data)
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const getSnuskas = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("snuska").then(response =>{
      commit("GET_SNUSKAS", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const getTaxonomies = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("taxonomy").then(response => {
      commit("GET_TAXONOMIES", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const getMeasuresForSnail = ({commit}, snailId) => {
  return new Promise((resolve, reject) => {
    axios.get(`mereni/${snailId}`).then(response => {
      commit("GET_MEASURES_FOR_SNAIL", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const getEventTypes = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("udalost-typ").then(response => {
      commit("GET_EVENT_TYPES", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const getBoxEvents = ({commit}, boxId) => {
  return new Promise((resolve, reject) => {
    axios.get(`box/${boxId}/udalost`).then(response => {
      commit("GET_BOX_EVENTS", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const getSnuskaEvents = ({commit}, snuskaId) => {
  return new Promise((resolve, reject) => {
    axios.get(`snuska/${snuskaId}/udalost`).then(response => {
      commit("GET_SNUSKA_EVENTS", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const getSnailEvents = ({commit}, snailId) => {
  return new Promise((resolve, reject) => {
    axios.get(`snek/${snailId}/udalost`).then(response => {
      commit("GET_SNAIL_EVENTS", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const getUsersAdmin = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get("users/admin").then(response => {
      console.log(response)
      commit("GET_USERS_ADMIN", response.data.content)
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const addSnail = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post(`snek/${payload.id}`, payload.snail).then(response =>{
      console.log("SNAIL")
      console.log(response.data)
      commit("ADD_SNAIL", {groupId: payload.id, snail: response.data })
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const addBox = ({commit}, box) => {
  return new Promise((resolve, reject) => {
    axios.post("box", box).then(response => {
      commit("ADD_BOX", response.data)
      console.log("ADDING BOX")
      console.log(response.data)
      const group = {
        skupinaId: 0,
        jmeno: `Zakladni skupina pro box: ${box.jmeno}`,
        komentar: "Skupina pro vsechny sneky",
      }
      addGroup({commit},{group: group, boxId: response.data.boxId})
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const addGroup = ({commit}, payload) => {
  console.log("BOXID: " + payload.boxId)
  return new Promise((resolve, reject) => {
    axios.post(`skupina/${payload.boxId}`, payload.group).then(response => {
      commit("ADD_GROUP", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const addTaxonomy = ({commit}, taxonomy) => {
  return new Promise((resolve, reject) => {
    axios.post("/taxonomy/admin", taxonomy).then(response => {
      commit("ADD_TAXONOMY", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const addSnuska = ({commit}, snuska) => {
  return new Promise((resolve, reject) => {
    axios.post(`snuska/${snuska.velikost}`, snuska).then(response => {
      commit("ADD_SNUSKA", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const addEventType = ({commit}, event) => {
  return new Promise((resolve, reject) => {
    axios.post(`udalost-typ/admin`, event).then(response => {
      commit("ADD_EVENT_TYPE", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const addEvent = ({commit}, event) => {
  return new Promise((resolve, reject) => {
    axios.post("udalost", event).then(response => {
      commit("ADD_EVENT", response.data)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const removeSnail = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.delete(`snek/${payload.snailId}`).then(response => {
      commit("REMOVE_SNAIL", payload)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const removeGroup = ({commit}, groupId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`skupina/${groupId}`).then(response =>{
      commit("REMOVE_GROUP", groupId)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const removeBox = ({commit}, boxId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`box/${boxId}`).then(response => {
      commit("REMOVE_BOX", boxId)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const removeSnuska = ({commit}, snuskaId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`snuska/${snuskaId}`).then(response => {
      commit("REMOVE_SNUSKA", snuskaId)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const removeTaxonomy = ({commit}, taxonomyId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`/taxonomy/admin/${taxonomyId}`).then(response => {
      commit("REMOVE_TAXONOMY", taxonomyId)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const removeEventType = ({commit}, eventTypeId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`udalost-typ/admin/${eventTypeId}`).then(response => {
      commit("REMOVE_EVENT_TYPE", eventTypeId)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const removeEvent = ({commit}, event) => {
  return new Promise((resolve, reject) => {
    axios.delete(`udalost/${event.id}`).then(response => {
      commit("REMOVE_EVENT", event)
      resolve(response)
    }).catch(e => {
        error({commit}, e.response.data.message)
        reject(e)
      })
  })
}

export const editBox = ({commit}, box) => {
  return new Promise((resolve, reject) => {
    axios.put(`box/${box.boxId}`, box).then(response => {
      commit("EDIT_BOX", response.data)
      resolve(response)
    }).catch(e => {
      console.log(e)
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const editGroup = ({commit}, group) => {
  return new Promise((resolve, reject) => {
    axios.put(`skupina/${group.skupinaId}`, group).then(response => {
      commit("EDIT_GROUP", response.data)
      resolve(response)
    }).catch(e => {
      console.log(e)
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const editUserRoles = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.put(`users/admin/${payload.userId}/roles`, payload.roles).then(response => {
      commit("EDIT_USER", response.data)
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const activateUser = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.patch(`users/admin/${payload.userId}/active-until/${payload.activeUntil}`).then(response => {
      commit("EDIT_USER", response.data)
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
  })
}

export const setActiveBox = ({commit}, boxId) => {
  return new Promise((resolve) => {
    commit("SET_ACTIVE_BOX", boxId)
    resolve()
  })

}

export const error = ({commit}, message) => {
  try {
    commit("ERROR", message)
    setTimeout(() => commit("REMOVE_ERROR"), 5000)
  }
  catch (e) {
    console.log(e)
  }
}

export const register = ({commit}, user) => {
  return new Promise((resolve, reject) => {
    axios.post("auth/signup", user).then(response => {
      resolve(response)
    }).catch(e => {
      error({commit}, e.response.data.message)
      reject(e)
    })
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
        error({commit}, err.response.data.message)
        localStorage.removeItem("token")
        console.error(err)
        reject(err)
      })
    })
}

export const logout = ({commit}) => {
    return new Promise((resolve) => {
      localStorage.removeItem("token")
      delete axios.defaults.headers.common["Authorization"]
      commit("LOGOUT")
      resolve()
    })
}
