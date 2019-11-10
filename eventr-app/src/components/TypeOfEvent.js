import React, { Component } from 'react';
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

        this.props.addEventType('private');

        this.props.history.push('/eventcreate')
    }

    makePublicEvent = event => {
        event.preventDefault();

        this.props.addEventType('public');

        this.props.history.push('/eventcreate')
    }


    render() {
        return (
        <div className="eventStarter">
            <div className="textwrapper">
                <h2>Let's plan your event, {this.props.firstname}!</h2>
            </div>
            <div className="selectEvent">
                <button onClick={this.makePrivateEvent} className="eventType">
                    Private
                </button>
                <button onClick={this.makePublicEvent} className="eventType">
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