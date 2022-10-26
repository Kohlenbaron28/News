import {render} from 'react-dom';
import {App} from './App';
import {BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import * as serviceWorker from './serviceWorkerRegistration';
import './index.scss';

render(
<Router>
<App/>
</Router>,
document.getElementById('root')
);

serviceWorker.register();
