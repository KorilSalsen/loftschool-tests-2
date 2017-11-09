import React, { Component } from "react";

import "./NewsPost.css";
import Comment from "./Comment";

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  handleChange = e => {
    this.setState({
      commentInput: e.target.value
    });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13 && this.state.commentInput) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            id: this.state.comments.length + 1,
            text: this.state.commentInput
          }
        ],
        commentInput: ""
      });
    }
  };

  handleDelete = id => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    });
  };

  render() {
    const { text } = this.props;
    const comments = this.state.comments.map(comment => {
      return (
        <Comment
          text={comment.text}
          key={comment.id}
          onDelete={this.handleDelete}
          id={comment.id}
        />
      );
    });

    return (
      <div className="news-post">
        <h3>Новость</h3>
        <p>{text}</p>
        <input
          className="comment-input"
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.commentInput}
          placeholder="Комментарий (Enter)"
        />
        {comments.length ? <h4>Комментарии:</h4> : null}
        {comments}
      </div>
    );
  }
}

export default NewsPost;
