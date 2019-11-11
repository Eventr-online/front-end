import React, { Component } from 'react';
import { connect } from 'react-redux';
import AbsoluteWrapper from '../AbsoluteWrapper';


class Step1 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <AbsoluteWrapper>
                <div>
                    where is everyone
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
    )(Step1)
);