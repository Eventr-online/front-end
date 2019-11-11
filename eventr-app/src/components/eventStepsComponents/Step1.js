import React, { Component } from 'react';
import { connect } from 'react-redux';


class Step1 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
        <div>
            HEYYYYYYYYYY
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
}

export default(
    connect(
        mapStateToProps,
        null
    )(Step1)
);