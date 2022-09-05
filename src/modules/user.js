const initialState = {
  user: {
    name: '',
  },
}

const LOGIN = 'name/LOGIN'

export function saveName(name) {
  return { type: LOGIN, name: name }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'name/LOGIN': {
      return { name: action.name }
    }
    default:
      return state
  }
}
