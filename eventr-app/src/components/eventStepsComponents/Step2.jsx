import React, { Component } from 'react';
import '../../css/steps.css';
import { connect } from 'react-redux';
import AbsoluteWrapper from '../AbsoluteWrapper';


class Step2 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <AbsoluteWrapper>
                <div className="stepsBlock">
                    HEYY STEP 2
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
}

export default(
    connect(
        mapStateToProps,
        null
    )(Step2)
);