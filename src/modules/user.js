const initialState = {
  user: {
    name: '',
  },
}

const LOGIN = 'name/LOGIN'

export function saveName(name) {
  console.log('Action Creators:', name)
  return { type: LOGIN, name: name }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'name/LOGIN': {
      console.log('Reducer:', action.name)
      return { name: action.name }
    }
    default:
      return state
  }
}
