import React, { Component } from 'react';
import '../css/homeform.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import Step1 from '../components/eventStepsComponents/Step1';
import Step2 from '../components/eventStepsComponents/Step2';

class EventCreation extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1> HEY </h1>
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
            </div>
        );
    }
}

export default EventCreation;