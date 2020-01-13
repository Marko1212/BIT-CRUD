import React, { Component } from 'react';
import CardPost from '../../components/CardPost/CardPost';
import './postsList.css';
import { postsGet } from "../../../services/postsService";


class PostsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let onFetchSuccess = (posts) => {
      // call me when data are fetched successfully
      console.log('data fetching success ');
      console.log(posts);
      this.setState({ posts: posts });
    }
    postsGet(onFetchSuccess);
  }

  render() {
    console.log(this.state.posts)
    return (
      <div className="container">
        <div className="row">
          <h1 className="title">All posts</h1>
        </div>
        <div className="row">

          <div className="postList">
            {this.state.posts.map((post, i) =>
              <CardPost key={i} {...post} />
            )}
          </div>

        </div>
      </div>
    );
  }
}

export default PostsList;
