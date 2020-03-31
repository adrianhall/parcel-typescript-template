import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { MainApplication } from './ui/apps';
import './assets/index.scss';

const Application: React.SFC<{}> = () => (
  <Router>
    <MainApplication />
  </Router>
);

render(<Application />, document.getElementById('root'));
