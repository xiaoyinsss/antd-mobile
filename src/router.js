import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users';
import Main from './components/layout/main.jsx';
import Index from './routes/index.jsx';
import Page01 from './routes/page01.jsx';
import Page02 from './routes/page02.jsx';
import Page03 from './routes/page03.jsx';

export default function({ history }) {
  return (
    <Router history={history}>
        <Route component={Main}>
            <Route path="/" component={Index} />
            <Route path="/page01" component={Page01} />
            <Route path="/page02" component={Page02} />
            <Route path="/page03" component={Page03} />
        </Route>
    </Router>
  );
};
