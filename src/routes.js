import React from 'react';
import {
    Router, Route, IndexRoute
}
from 'react-router';
import Framework from './components/Framework.react';

import MainMenu from './components/MainMenu';

export
default (
    <Route path="/" component={Framework}>
      <IndexRoute component={MainMenu}/>

    </Route>
);