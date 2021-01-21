import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

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
  ]
}

it('should increment postsData', function () {
  // test data
  let action = addPostActionCreator('new post')

  // action

  let newState = profileReducer(initialState, action)

  // expectation
  expect(newState.postsData.length).toBe(9)
  expect(newState.postsData[8].text).toBe('new post')
});

it('should decrement postsData after delete', function () {
  let action = deletePost(1)

  let newState = profileReducer(initialState, action)

  expect(newState.postsData.length).toBe(7)
});
