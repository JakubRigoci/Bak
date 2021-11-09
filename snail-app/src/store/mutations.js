import Vue from "vue";

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
  Vue.set(state.snailsForGroup, snails.id, snails.data)
}

export const GET_SNUSKAS = (state, snuskas) => {
  state.snuskas = snuskas;
}

export const GET_TAXONOMIES = (state, taxonomies) => {
  state.taxonomies = taxonomies;
}

export const GET_MEASURES_FOR_SNAIL = (state, measures) => {
  state.measuresForSnail = measures
}

export const GET_EVENT_TYPES = (state, eventTypes) => {
  state.eventTypes = eventTypes
}

export const GET_BOX_EVENTS = (state, eventsForBox) => {
  state.eventsForBox = eventsForBox.sort((a, b) => {
    const left = new Date(a.datum)
    const right = new Date(b.datum)
    return right - left
})
}

export const GET_SNUSKA_EVENTS = (state, eventsForSnuska) => {
  state.eventsForSnuska = eventsForSnuska.sort((a, b) => {
    const left = new Date(a.datum)
    const right = new Date(b.datum)
    return right - left
})
}

export const GET_SNAIL_EVENTS = (state, eventsForSnail) => {
  state.eventsForSnail = eventsForSnail.sort((a, b) => {
    const left = new Date(a.datum)
    const right = new Date(b.datum)
    return right - left
})
}

export const ADD_SNAIL = (state, payload) => {
  state.snails.push(payload.snail)
  state.snailsForGroup[payload.groupId].push(payload.snail)
}

export const ADD_BOX = (state, box) => {
  state.boxes.push(box);
  state.groupsForBox.push(box);
}

export const ADD_GROUP = (state, group) => {
  state.groups.push(group);
  state.groupsForBox.push(group);
}

export const ADD_SNUSKA = (state, snuska) => {
  state.snuskas.push(snuska)
}

export const ADD_TAXONOMY = (state, taxonomy) => {
  state.taxonomies.push(taxonomy)
}

export const ADD_EVENT_TYPE = (state, event) => {
  state.eventTypes.push(event)
}

export const ADD_EVENT = (state, event) => {
  if (event.boxId) {
    state.eventsForBox.unshift(event)
    return
  }
  if (event.skupinaId) {
    state.eventsForGroup.unshift(event)
    return
  }
  if (event.snuskaId) {
    state.eventsForSnuska.unshift(event)
    return
  }
  if (event.snekId) {
    state.eventsForSnail.unshift(event)
    return
  }
}

export const REMOVE_SNAIL = (state, payload) => {
  state.snails = state.snails.filter(s => s.snekId !== payload.snailId)
  Vue.set(state.snailsForGroup, payload.groupId, state.snailsForGroup[payload.groupId].filter(s => s.snekId !== payload.snailId))
}

export const REMOVE_GROUP = (state, groupId) => {
    state.groups = state.groups.filter(g => g.skupinaId !== groupId)
    state.groupsForBox = state.groupsForBox.filter(g => g.skupinaId !== groupId)
}

export const REMOVE_BOX = (state, boxId) => {
  state.boxes = state.boxes.filter(b => b.boxId !== boxId)
}

export const REMOVE_SNUSKA = (state, snuskaId) => {
  state.snuskas = state.snuskas.filter(s => s.snuskaId !== snuskaId)
}

export const REMOVE_TAXONOMY = (state, taxonomyId) => {
  state.taxonomies = state.taxonomies.filter(t => t.taxonomyId !== taxonomyId)
}

export const REMOVE_EVENT_TYPE = (state, eventTypeId) => {
  state.eventTypes = state.eventTypes.filter(e => e.udalostTypId !== eventTypeId)
}

export const REMOVE_EVENT = (state, event) => {
  console.log("BEFORE SWITCH")
  switch(event.type){
    case "box":
      console.log("REMOVE BOX EVENT")
      console.log(event)
      state.eventsForBox = state.eventsForBox.filter(e => event.id !== e.udalostId)
      return
    case "group":
      state.eventsForGroup = state.eventsForGroup.filter(e => event.id !== e.udalostId)
      return
    case "snuska":
      state.eventsForSnuska = state.eventsForSnuska.filter(e => event.id !== e.udalostId)
      return
    case "snail":
      state.eventsForSnail = state.eventsForSnail.filter(e => event.id !== e.udalostId)
      return
  }
}
export const SET_ACTIVE_BOX = (state, boxId) => {
  state.activeBox = boxId
}

export const ERROR = (state, message) => {
  state.errorMessage = message
}

export const REMOVE_ERROR = (state) => {
  state.errorMessage = ''
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
  state.user = {}
  state.token = ""
}

