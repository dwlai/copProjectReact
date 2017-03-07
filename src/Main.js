import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import Config from './Settings/Config'
import App from './Components/App'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

const CONFIG = new Config();

const browserHistory = useRouterHistory(createHistory)({basename:CONFIG.baseName})

render((
<Router history={browserHistory}>
    <Route path="/" component={App}>
  	  <IndexRoute component={Home} />
	    <Route path={"about"} component={About}/>
	    <Route path={"contact"} component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
