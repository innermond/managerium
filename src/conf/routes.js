import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Work, {Task} from '../components/Work'

const routes = (
<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <Route path="/home" component={Home} />
    <Route path="/work" component={Work}>
      <Route path="task" component={Task} />
    </Route>
  </Route>
</Router> )

export default routes
