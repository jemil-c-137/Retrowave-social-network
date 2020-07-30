const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
  messageData: [
    {id: 1, message: "Aw Jeez"},
    {id: 2, message: "Wubba lubba dub dub"},
    {id: 3, message: "Get schwifty"}
  ],
  dialogsData: [
    {id: 1, name: "Rick", avatar: "https://img1.looper.com/img/gallery/rick-and-morty-season-4-release-date-episodes-and-trailer/intro-1562623611.jpg"},
    {id: 2, name: "Morty", avatar: "https://i.pinimg.com/originals/02/2b/bb/022bbb45b3257c3c494a1de93179bd8a.png"},
    {id: 3, name: "Summer", avatar: "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/top-crop/width/360/height/360?cb=20160919183158"},
    {id: 4, name: "Jerry", avatar: "https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111"},
    {id: 5, name: "Beth", avatar: "https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest?cb=20191122063320"},
  ],
  newMessageText: ''
}


const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messageData: [...state.messageData, {id: 6, message: body}]
      }
    }

    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      }
    }

    default:
      return state;
  }
}

export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} )
export const updateMessageTextActionCreator = (text) => ( {type: UPDATE_MESSAGE_TEXT, newText: text} )

export default messagesReducer