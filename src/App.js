import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import auth from "./services/authService";
import TopNavigation from './component/topNavigationComponent';
import MaterailUI from './component/projectComm/materialNavBar';
import Home from './component/projectComm/home';
import MovieList from './component/projectComm/movieListComponent';
import AddMovie from './component/projectComm/addMovie';
import MovieDetails from './component/projectComm/movieDetails';
import FeedCom from './component/projectComm/feed';
import CommunitiesCom from './component/projectComm/communities';
import ChampionsCom from './component/projectComm/champions';
import ArticleCom from './component/projectComm/articles';
import EventCom from './component/projectComm/event';
import UsersRegister from './component/admin/userRegister';
import UsersLogin from './component/admin/userLogin';
import Logout from './component/admin/logout';
import NotFound from './component/common/notFound';
import './css/App.css';



class App extends Component {
  state = {};

  componentDidMount() {
    const data = auth.getCurrentUser();
    this.setState({ data });
  }

  render() { 
    const { data } = this.state;

    return (
      <React.Fragment>
          <TopNavigation data={data}/>
          <div className="content-area">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies/:id" component={MovieDetails} />
              <Route path="/movies" component={MovieList} />
              <Route path="/addMoive" component={AddMovie} />
              <Route path="/feed/" component={FeedCom} />
              <Route path="/communities/" component={CommunitiesCom} />
              <Route path="/champions/" component={ChampionsCom} />
              <Route path="/articles/" component={ArticleCom} />
              <Route path="/event/" component={EventCom} />
              <Route path="/meterailui/" component={MaterailUI} />
              <Route path="/login/" component={UsersLogin} />
              <Route path="/logout/" component={Logout} />
              <Route path="/register/" component={UsersRegister} />
              
              <Redirect from="login" to="posts"/>
              <Route path="/not-found" component={NotFound} />
              <Redirect to="not-found"/>
              
            </Switch>
          </div>
          
      </React.Fragment>
      );
  }
}
export default App;
