import React, { Component } from 'react';
import '../../css/steps.css';
import { connect } from 'react-redux';
import { addEventType } from '../../actions/index';
import AbsoluteWrapper from '../AbsoluteWrapper';
import { useSpring, useTransition, animated } from 'react-spring';


class Step0 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    makePrivateEvent = event => {
        event.preventDefault();

        this.props.addEventType('private');

        this.props.history.push('/step1')
    }

    makePublicEvent = event => {
        event.preventDefault();

        this.props.addEventType('public');

        this.props.history.push('/step1')
    }


    render() {
        
        return (
            <AbsoluteWrapper>
                <div className="stepsBlock">
                    <div className="eventStarter">
                        <div className="textwrapper">
                            <h2>What type of event is this, {this.props.firstname}?</h2>
                        </div>
                        <div className="selectEvent">
                            <button onClick={this.makePrivateEvent} className="eventType">
                                Private
                            </button>
                            <button onClick={this.makePublicEvent} className="eventType">
                                Public
                            </button>
                        </div>
                    </div>
                </div>
            </AbsoluteWrapper>
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
    )(Step0)
);