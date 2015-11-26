import React from 'react';
import {
    RaisedButton
}
from 'material-ui';
import {
    clipboard
}
from 'electron';
import ModalActions from '../actions';
import MessageActions from '../../Message/actions';


export
default React.createClass({

    componentDidMount() {

    },


    render() {
        return (
            <div>
                <p> LALALALALALALALALA </p>
                <RaisedButton onClick={ModalActions.close} style={{float: 'right', 'marginRight': '10px' }} label="Cancel" />
            </div>
        );
    }
});