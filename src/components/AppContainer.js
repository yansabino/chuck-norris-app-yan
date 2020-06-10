import React, { Component } from "react";
import PostForm from "./PostForm/PostForm";
import PostsList from "./PostsList";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px;
  justify-content: center;
  gap: 15px;
`;

const posts = [
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

class AppContainer extends Component {
  render() {
    return (
      <Container>
        <PostForm />
        <PostsList />
      </Container>
    );
  }
}

export default AppContainer;
