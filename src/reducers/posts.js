const initialState = [
  {
    id: 1,
    text: "Post legal",
    likedByMe: false
  },
  {
    id: 2,
    text: "Outro post, esse com like!",
    likedByMe: true
  }
];

export const postsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_POST":
      const newPost = {
        text: action.payload.text,
        id: action.payload.id,
        likedByMe: action.payload.likedByMe
      };
      return [newPost, ...state];
    case "SET_POSTS":
      return action.payload.postsList;
    case "LIKE_POST":
      const newState = state.map(post => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            likedByMe: !post.likedByMe
          };
        } else {
          return post;
        }
      });
      return newState;
    default:
      return state;
  }
};
