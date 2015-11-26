import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
    RouteContext
}
from 'react-router';
import {
    ipcRenderer
}
from 'electron';
import Modal from './Modal';
import Message from './Message';

export
default React.createClass({

    mixins: [PureRenderMixin, RouteContext],

    componentDidMount() {
        ipcRenderer.send('app:startup', new Date().getTime());
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