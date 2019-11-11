import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import '../css/homeform.css';
import { Route, Switch, withRouter, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';


function HomeForm() {

    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate3d(10%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)'},
        leave: { opacity: 0, transform: 'translate3d(-10%,0,0)' }
        });

        return (
        <div className="formBackground">
            <div className="switchLinks">
                <NavLink activeClassName="activeLink" exact to="/">Register</NavLink>
                <NavLink activeClassName="activeLink" exact to="/login">Login</NavLink>
            </div>
            {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
                <Switch location={item}>
                    <Route exact path="/" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Switch>  
            </animated.div>
        ))}
        </div>
        );
  }

export default HomeForm;