import React from "react";
import MyPostCard from "./MyPostCard";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "./MyPosts.css";

import { myPostsGet } from "../../../services/postsService";

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }

    this.refreshMyPosts = this.refreshMyPosts.bind(this);
  }

  refreshMyPosts() {
    console.log('refreshing...');
    myPostsGet(response => {
      console.log(response);
      this.setState({ posts: response.data })
    });
  }

  componentDidMount() {
    this.refreshMyPosts();
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">

        <div className="row">
          <Link to="/createpost">
            <Button text="Create Post" color="green" />
          </Link>
        </div>

        <div className="row">
          <h1 className="title">My posts</h1>
        </div>
        <div className="row">

          <div className="postList">
            {this.state.posts.map(post => (
              <MyPostCard key={post.id} reload={() => this.refreshMyPosts()} post={post} />
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default MyPosts;
