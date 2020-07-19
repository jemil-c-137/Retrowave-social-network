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
      newAreaText: "text area value",

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
      newMessageText: 'Your message'
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

  addMessage() {
    debugger;
    let message = {
      id: 6,
      message: this._state.messagesPage.newMessageText
    }
    this._state.messagesPage.messageData.push(message);
    this._state.messagesPage.newMessageText = '';
    this._callSubscriber(this._state)

  },
  updateMessageArea(newSymbol) {
    this._state.messagesPage.newMessageText = newSymbol
    this._callSubscriber(this._state)
  },

  addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newAreaText,
      value: 2
    }
    this._state.profilePage.postsData.push(newPost)
    this._callSubscriber(this._state)
  },
  updateNewAreaText(newSymbol) {
    this._state.profilePage.newAreaText = newSymbol;
    this._callSubscriber(this._state)
  },

  dispatch(action) {

  }
}

export default store