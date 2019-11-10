import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../css/typeofevent.css';
import { connect } from 'react-redux';
import { addEventType } from '../actions/index';


class TypeOfEvent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    makePrivateEvent = event => {
        event.preventDefault();

        addEventType('private')
            .then(() => {
                this.props.history.push("/eventbuilder")
                
            })
            .catch((err) => {
                console.log(err);
            })
    }

    makePublicEvent = event => {
        event.preventDefault();
    }


    render() {
        return (
        <div className="eventStarter">
            <div className="textwrapper">
                <h2>Let's plan your event, {this.props.firstname}!</h2>
            </div>
            <div className="selectEvent">
                <button onSubmit={this.makePrivateEvent} className="eventType">
                    Private
                </button>
                <button className="eventType">
                    Public
                </button>
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

const mapDispatchToProps = {
    addEventType: addEventType
}

export default(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TypeOfEvent)
);