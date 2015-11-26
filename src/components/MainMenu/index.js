import React from 'react';
import {
    RaisedButton, Paper
}
from 'material-ui';
import MainMenuActions from './actions';


export
default React.createClass({
    render() {
        return (
            <div className="wrapper">
               <center>
                    <div disableClick={true} className="holder" onDrop={this.onDrop}>
                        
                    </div>
               </center>
            </div>
        );
    }
});