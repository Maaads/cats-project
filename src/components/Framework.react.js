import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
    RouteContext, History
}
from 'react-router';
import {
    ipcRenderer
}
from 'electron';
import Modal from './Modal';
import Message from './Message';
import historyActions from '../actions/historyActions';

export
default React.createClass({

    mixins: [PureRenderMixin, RouteContext, History],

    componentWillMount() {
        historyActions.history(this.history);
        this.history.listen(this.updatehistory);
    },

    componentDidMount() {
        ipcRenderer.send('app:startup', new Date().getTime());
    },
    updatehistory() {
        historyActions.history(this.history);
    },
    render() {
        return (
            <div id="main">
              {React.cloneElement(this.props.children, {query: this.props.query})}
              <Modal />
              <Message />
            </div>
        );
    }
});