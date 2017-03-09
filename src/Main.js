import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { createBrowserHistory } from 'history'

import Config from './Settings/Config'
import App from './Components/App'
import Home from './Components/Home'
import About from './Components/About'
import OfficerPosts from './Components/OfficerPosts'



render((
<Router history = {hashHistory}>
    <Route path="/" component={App}>
  	  <IndexRoute component={Home} />
	    <Route path={"about"} component={About}/>
	    <Route path={"officerPosts/:orgID/:badge"} component={OfficerPosts}/>
    </Route>
  </Router>
), document.getElementById('app'))
