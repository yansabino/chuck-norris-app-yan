import axios from "axios";

export const addPost = (text, id, likedByMe) => ({
  type: "ADD_POST",
  payload: {
    text: text,
    id: id,
    likedByMe: likedByMe
  }
});

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

export const fetchPosts = () => async (dispatch, getState) => {
  const result = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts"
  );

  dispatch(setPosts(result.data.posts));
};

export const createPost = text => async (dispatch, getState) => {
  const response = await axios.post(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts",
    {
      text
    }
  );

  dispatch(
    addPost(
      response.data.post.text,
      response.data.post.id,
      response.data.post.likedByMe
    )
  );
};

export const toggleLikePost = id => async (dispatch, getState) => {
  const response = await axios.put(
    `https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts/${id}/like`
  );

  dispatch(likePost(id));
};
