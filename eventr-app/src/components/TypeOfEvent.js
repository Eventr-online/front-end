import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';

class TypeOfEvent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
        <div className="selectEvent">
            <h1>HEY PLEASE WORK</h1>
            <Route render={({location}) => (
                <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={3000}
                    classNames="fade"
                >
                    <Switch location={location}>
                    </Switch>  
                </CSSTransition>   
                </TransitionGroup>   
            )} />
        </div>
        );
    }
}

export default TypeOfEvent;