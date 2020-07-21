const ADD_POST = 'ADD-POST';
const UPDATE_NEW_AREA_TEXT = "UPDATE-NEW-AREA-TEXT";

let initialState = {
  postsData: [
    {id:1, text: "Hello", value: 23},
    {id:2, text: "Ooweee", value: 43},
    {id:3, text: "Pickle rick", value: 13},
    {id:4, text: "Peace among the worlds", value: 42},
    {id:5, text: "Show me what you got", value: 666},
    {id:6, text: "Bye", value: 1984},
    {id:6, text: "Bye", value: 1984},
    {id:6, text: "Bye", value: 1984}
  ],
  newAreaText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newAreaText,
        value: 2
      }
      state.postsData.push(newPost)
      state.newAreaText = '';
      return state
    case UPDATE_NEW_AREA_TEXT:
      state.newAreaText = action.newSymbol;
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewAreaTextActionCreator = (text) => ( {type: UPDATE_NEW_AREA_TEXT, newSymbol: text} )

export default profileReducer