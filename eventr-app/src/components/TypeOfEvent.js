import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../css/typeofevent.css';
import { connect } from 'react-redux';


class TypeOfEvent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
        <div className="eventStarter">
            <h2>Welcome {this.props.firstname}</h2>
            <div className="selectEvent">
                <div className="eventType">
                    Private
                </div>
                <div className="eventType">
                    Public
                </div>
            {/* <Route render={({location}) => (
                <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={3000}
                    classNames="fade"
                >
                    <Switch location={location}>
                        <Route exact path="/public" component={PublicEvent} />
                        <Route exact path="/private" component={PrivateEvent} />
                    </Switch>  
                </CSSTransition>   
                </TransitionGroup>   
            )} /> */}
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstname: state.user.firstname
    }
}

export default(
    connect(
        mapStateToProps,
        null
    )(TypeOfEvent)
);