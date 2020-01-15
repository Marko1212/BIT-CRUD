import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./app/components/Header/Header";
import Footer from "./app/components/Footer/Footer";
import Register from "./app/pages/Register/Register";
import Login from "./app/pages/Login/Login";
import AboutPage from "./app/pages/About/AboutPage";
import "./App.css";
import PostsList from './app/pages/PostList/PostsList';
import MyPosts from './app/pages/MyPosts/MyPosts';
import CreatePost from './app/pages/CreatePost/CreatePost';
import Dashboard from './app/pages/Dashboard/Dashboard';

import { isLoggedIn } from './services/storageService';


class App extends React.Component {

  render() {
    /*
    App komponenta je na vrhu nase aplikacije.
    Prva se mountuje i nikada se ne dismountuje,
    prva se pokrene pre svih ostalih
    */
    // prva stvar koju App komponenta uradi je da proveri da li smo ulogovani
    const loggedIn = isLoggedIn();
    console.log('CHECK', loggedIn);

    return (
      <div className="App">
        <Header loggedIn={loggedIn} />
        <div className="page-body">
          <Switch>
            <Route exact path='/signup' component={Register} />
            <Route path='/login' component={Login} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/posts' component={PostsList} />
            <Route path="/dashboard" component={() => <Dashboard to="/dashboard" loggedIn={loggedIn} />} />
            <Route path="/myposts" component={MyPosts} />
            <Route path="/createpost" component={CreatePost} />
            {loggedIn ? <Redirect to="/dashboard" loggedIn={loggedIn} /> : <Redirect to="/login" />}
          </Switch>
        </div>
        <Footer loggedIn={loggedIn} />
      </div>
    );
  }
}

export default App;
