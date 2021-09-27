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
  state.groupsForBox = groups.data.filter(g => {
    return g.datumDo === null;
  });
}

export const GET_SNAILS_FOR_GROUP = (state, snails) => {
  state.snailsForGroup = snails;
}

export const ADD_BOX = (state, box) => {
  state.boxes.push(box);
  state.groupsForBox.push(box);
}

export const auth_request = (state) => {
  state.status = 'loading'
}

export const auth_success = (state, payload) => {
  state.status = 'success'
  state.token = payload.token
  state.user = payload.user
}

export const auth_error = (state) => {
  state.status = 'error'
}

export const logout = (state) => {
  state.status = ''
  state.token = ''
}

