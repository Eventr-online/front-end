import React, { Component, useContext } from 'react';
import '../css/homeform.css';
import { Route, Switch, withRouter, __RouterContext } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import Step1 from '../components/eventStepsComponents/Step1';
import Step2 from '../components/eventStepsComponents/Step2';
import { useTransition, animated } from 'react-spring';

function EventCreation() {

    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translate(100%, 0)" },
        enter: { opacity: 1, transform: "translate(0, 100%)" },
        leave: { opacity: 0, transform: "translate(-50%, 0)" },
    })

    return (
        <div className="eventcreatebox">
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path="/eventcreate" component={Step1} />
                        <Route exact path="/step2" component={Step2} />
                    </Switch>
                </animated.div>         
            ))}                    
        </div>
    );
}

export default EventCreation;