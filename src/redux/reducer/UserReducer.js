export default function users(state = { data: [] }, action) {
  switch (action.type) {
    case "users":
      return {
        type: action.type,
        data: action.payload,
      };
  }
  return state;
}
