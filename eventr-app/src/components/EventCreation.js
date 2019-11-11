import React, { Component, useContext } from 'react';
import '../css/homeform.css';
import { Route, Switch, withRouter, __RouterContext } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import Step1 from '../components/eventStepsComponents/Step1';
import Step2 from '../components/eventStepsComponents/Step2';
import { useTransition, animated } from 'react-spring';

function EventCreation() {

    return (
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={3000}
                        classNames="fade"
                    >
                        <Switch location={location}>
                        <Route exact path="/eventcreate" component={Step1} />
                        <Route exact path="/step2" component={Step2} />
                        </Switch>  
                    </CSSTransition>   
                </TransitionGroup>   
            )} />       
        );
    }


export default EventCreation;