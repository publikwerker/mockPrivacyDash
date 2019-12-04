import React, { Component } from 'react';

export default class ErrorModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            errorMessage: {}
        };
    }

    render() {
        let code = this.state.errorMessage.code;
        let text = this.state.message;
        return (
            <div className="error-message">
                <h2 className="error-code">Error Code: {code}</h2>
                <p className="error-text">Error Message: {text}</p>
            </div>
        )
    }
};