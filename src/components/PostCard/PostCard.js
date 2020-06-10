import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardActions,
  CardHeader,
  IconButton
} from "@material-ui/core";
import styled from "styled-components";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Share from "@material-ui/icons/Share";
import Comment from "@material-ui/icons/Comment";

const ActionsWrapper = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

class PostCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickLikeButton = () => {
    this.props.likePost(this.props.post.id);
  };

  render() {
    return (
      <Card>
        <CardHeader avatar={<Avatar />} title="Usuário" subheader="Há 15 min" />
        <CardContent>
          <Typography component="p">{this.props.post.text}</Typography>
        </CardContent>
        <ActionsWrapper>
          <IconButton variant={"contained"} onClick={this.onClickLikeButton}>
            <ThumbUp
              color={this.props.post.likedByMe ? "secondary" : "inherit"}
            />
          </IconButton>
          <IconButton variant={"contained"}>
            <Share />
          </IconButton>
          <IconButton variant={"contained"}>
            <Comment />
          </IconButton>
        </ActionsWrapper>
      </Card>
    );
  }
}

export default PostCard;
