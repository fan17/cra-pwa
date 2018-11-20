import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GitHubReposComponent from './Github/GitHubReposComponent';
import './App.css';
const NavBar = () => (
  <div className="navbar">
    <Link to="/">GithubRepos</Link>
    <Link to="/profile">Profile</Link>
  </div>
);
const Template = ({ title }) => (
  <>
      This is the {title} page.
  </>
);

const Profile = (props) => (
  <Template title="Profile"/>
);

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <p className="page-info">
            <Switch>
              <Route path="/" component={GitHubReposComponent} exact={true}/>
              <Route path="/profile" component={Profile}/>
            </Switch>
          </p>
        </>
      </Router>
    );
  }
}
export default App;
