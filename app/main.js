import React from 'react';
import ReactDOM from 'react-dom';
import route from './route/router';

import './static/css/reset.less';
import './static/css/common.less';
import './static/css/main.less';

const root = document.getElementById('root');

ReactDOM.render(
    route,
    root
);