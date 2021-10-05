export const GET_SNAILS = (state, snails) => {
    state.snails = snails;
}

export const GET_BOXES = (state, boxes) => {
  state.boxes = boxes;
}

export const GET_GROUPS = (state, groups) => {
  state.groups = groups;
}

export const GET_GROUPS_FOR_BOX = (state, groups) => {
  const allGroups = state.groups
  const groupIds = groups.map(g => g.skupinaId)
  state.groupsForBox = allGroups.filter(g => groupIds.includes(g.skupinaId))
}

export const GET_SNAILS_FOR_GROUP = (state, snails) => {
  state.snailsForGroup[snails.id] = snails.data;
}

export const ADD_BOX = (state, box) => {
  state.boxes.push(box);
  state.groupsForBox.push(box);
}

export const ADD_GROUP = (state, group) => {
  state.groups.push(group);
  state.groupsForBox.push(group);
}

export const REMOVE_GROUP = (state, groupId) => {
    state.groups = state.groups.filter(g => g.skupinaId !== groupId)
    state.groupsForBox = state.groupsForBox.filter(g => g.skupinaId !== groupId)
}

export const REMOVE_BOX = (state, boxId) => {
    state.boxes = state.boxes.filter(b => b.boxId !== boxId)
}

export const SET_ACTIVE_BOX = (state, boxId) => {
  state.activeBox = boxId
}

export const AUTH_REQUEST = (state) => {
  state.status = "loading"
}

export const AUTH_SUCCESS = (state, payload) => {
  state.status = "success"
  state.token = payload.token
  state.user = payload.user
}

export const AUTH_ERROR = (state) => {
  state.status = "error"
}

export const LOGOUT = (state) => {
  state.status = ""
  state.token = ""
}

