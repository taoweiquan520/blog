import React from 'react';
import ReactDOM from 'react-dom';
import route from './route/router';
import './static/css/reset.css';
import './static/css/common.css';
import './static/css/main.css';

const root = document.getElementById('root');

ReactDOM.render(
    route,
    root
);