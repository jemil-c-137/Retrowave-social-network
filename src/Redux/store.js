import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {
  _state: {
    profilePage: {
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

    },
    messagesPage: {
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
    },

  },
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
  debugger;
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

    this._callSubscriber(this._state)
  }
}




export default store