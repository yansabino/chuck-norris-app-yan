import React from "react";
import PostCard from "./PostCard/PostCard";
import { connect } from "react-redux";
import { fetchPosts, likePost, toggleLikePost } from "../actions/posts";

class PostsList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return this.props.postsList.map(post => (
      <PostCard post={post} likePost={this.props.onLikePost} />
    ));
  }
}

const mapStateToProps = state => ({
  postsList: state.posts
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    onLikePost: id => dispatch(toggleLikePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
