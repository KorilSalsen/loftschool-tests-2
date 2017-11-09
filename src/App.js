import React, { Component } from "react";

import "./App.css";
import NewsPost from "./NewsPost";

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = e => {
    this.setState({
      newsInput: e.target.value
    });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13 && this.state.newsInput) {
      this.setState({
        news: [
          ...this.state.news,
          {
            text: this.state.newsInput
          }
        ],
        newsInput: ""
      });
    }
  };

  render() {
    const posts = this.state.news.map(post => {
      return <NewsPost text={post.text} key={post.text} />;
    });

    return (
      <div className="App todo-container">
        <input
          className="todo-input"
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.newsInput}
          placeholder="Добавить новость (Enter)"
        />
        {posts.length ? <hr /> : null}
        {posts}
      </div>
    );
  }
}

export default App;
