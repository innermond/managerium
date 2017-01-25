import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Work from '../components/Work/Index'
import AddWork from '../components/Work/Add'

const routes = (
<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <Route path="/home" component={Home} />
    <Route path="/work" component={Work}>
      <Route path="add" component={AddWork} />
    </Route>
  </Route>
</Router> )

export default routes
