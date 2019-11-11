import React, { Component, useState } from 'react';
import '../../css/steps.css';
import { connect } from 'react-redux';
import { addEventType } from '../../actions/index';
import AbsoluteWrapper from '../AbsoluteWrapper';
import { useSpring, useTransition, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops'


function Step0(props) {

    const makePrivateEvent = event => {
        event.preventDefault();

        props.addEventType('private');

        props.history.push('/step1')
    }

    const makePublicEvent = event => {
        event.preventDefault();

        props.addEventType('public');

        props.history.push('/step1')
    }

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

        return (
            <AbsoluteWrapper>
                <div className="stepsBlock">
                    <div className="eventStarter">
                        <div className="textwrapper">
                            <h2>What type of event is this, {props.firstname}?</h2>
                        </div>
                        <div className="selectEvent">
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                delay='1000'>
                                {props => <div style={props}><button onClick={makePrivateEvent} className="eventType">
                                    Private
                                </button></div>}
                            </Spring>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                delay='1000'>
                                {props => <div style={props}><button onClick={makePublicEvent} className="eventType">
                                    Public
                                </button></div>}
                            </Spring>
                        </div>
                    </div>
                </div>
            </AbsoluteWrapper>
        );
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