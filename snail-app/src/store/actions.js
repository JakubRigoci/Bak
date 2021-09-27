import axios from 'axios';

export const getSnails = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get('snek').then(response =>{
      commit('GET_SNAILS', response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getSnailsForGroup = ({commit}, groupId) => {
  return new Promise((resolve, reject) => {
    axios.get(`snek/skupina/${groupId}`).then(response =>{
      commit('GET_SNAILS_FOR_GROUP',{ id: groupId, data: response.data.snek})
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getGroupsForBox = ({commit}, boxId) => {
  return new Promise((resolve, reject) => {
    axios.get(`box/${boxId}/skupina`).then(response =>{
      commit('GET_GROUPS_FOR_BOX', { id: boxId, data: response.data})
      resolve(response)
    }).catch(error => reject(error))
  })

}

export const getBoxes = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get('box').then(response =>{
      commit('GET_BOXES', response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const getGroups = ({commit}) => {
  return new Promise((resolve, reject) => {
    axios.get('skupina').then(response =>{
      commit('GET_GROUPS', response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const addBox = ({commit}, box) => {
  return new Promise((resolve, reject) => {
    axios.post("box", box).then(response => {
      commit('ADD_BOX', response.data)
      resolve(response)
    }).catch(error => reject(error))
  })
}

export const login = ({commit}, user) => {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      console.log(user)
      axios.post('auth/signin', { 'username' : user.name, 'password' : user.password})
      .then(resp => {
        console.log(resp.data)
        const token = resp.data.accessToken
        const user = {
          userId : resp.data.id, 
          userName : resp.data.name, 
          userEmail : resp.data.email, 
          userRoles : resp.data.roles
        }

        localStorage.setItem('token', token)
        axios.defaults.headers.common = {'Authorization' : `Bearer ${token}`}
        commit('auth_success', {token: token, user: user} )
        console.log(user)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        console.error(err)
        reject(err)
      })
    })
}

export const logout = ({commit}) => {
    return new Promise((resolve) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
}
