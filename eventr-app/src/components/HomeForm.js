import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../css/homeform.css';

function HomeForm() {

        return (
        <div className="formBackground">
            <div className="switchLinks">
                <NavLink activeClassName="activeLink" exact to="/">Register</NavLink>
                <NavLink activeClassName="activeLink" exact to="/login">Login</NavLink>
            </div>
            <Route render={({location}) => (
                <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={3000}
                    classNames="fade"
                >
                    <Switch location={location}>
                    <Route exact path="/" component={Register} />
                    <Route exact path="/login" component={Login} />
                    </Switch>  
                </CSSTransition>   
                </TransitionGroup>   
            )} />
        </div>
        );
  }

export default HomeForm;