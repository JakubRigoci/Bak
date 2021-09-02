import axios from 'axios';

export const getSnails = ({commit}) => {
    axios.get('/snek', {
        headers: {

        }
    }).then(response =>{
        commit('SNAILS', response.data)
    })
}

export const login = ({commit}, user) => {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      console.log(user)
      axios({url: 'http://192.168.109:8081/api/v1/auth/signin', headers: {'Access-Control-Allow-Origin' : '*'} 
            , data:{ 'username' : user.name, 'password' : user.password}, method: 'POST' })
      .then(resp => {
        console.log(resp.data)
        const token = resp.data.accessToken
        console.log(token)
        const user = resp.data
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
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