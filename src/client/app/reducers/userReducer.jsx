export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_USER": {
        return {user : action.payload}
      }
      case "FETCH_USER_REJECTED": {        
        return {user : action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {user : action.payload}
      }
      case "SET_USER_NAME": {
        return {user : action.payload}
      }
      case "SET_USER_AGE": {
        return {user : action.payload}
      }
    }
    return state;
}