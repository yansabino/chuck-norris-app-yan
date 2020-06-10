import axios from "axios";


export const setPosts = postsList => {
  return {
    type: "SET_POSTS",
    payload: {
      postsList: postsList
    }
  };
};

export const likePost = id => {
  return {
    type: "LIKE_POST",
    payload: {
      id: id
    }
  };
};


