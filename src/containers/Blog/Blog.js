import React from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

import "./Blog.css";

class Blog extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ posts: response.data });
    });
  }
  render() {
    const posts = this.state.posts.map((item) => {
      return <Post key={item.id} title={item.title} />;
    });
    return (
      <div>
        <section className="posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
