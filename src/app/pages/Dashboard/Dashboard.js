import React from "react";
import Title from "../../components/Title/Title";


class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      posts: [],
      users: [],
      comments: []
    };
  }

  getDashboardData() {
    //
  }

  componentDidMount() {
    this.getDashboardData();
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <Title text={"Dashboard"} />
        </div>

        <div className="row">
          <p className="left">Total posts: <b>{this.state.posts.length}</b></p>
        </div>
        <div className="row">
          <p className="left">Total comments: <b>{this.state.comments.length}</b></p>
        </div>
        <div className="row">
          <p className="left">Users: <b>{this.state.users.length}</b></p>
        </div>

      </div>
    );
  }
}

export default Dashboard;
