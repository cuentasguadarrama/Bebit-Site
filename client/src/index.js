import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Productos from './views/productos'
import Store from './views/store'
import Inicio from './views/inicio'
import Hidroactive from './views/hidroactive'
import Contacto from './views/contacto'
import Wion from './views/wion'
import WhiteLabel from './views/white-label'
import Nosotros from './views/nosotros'
import FAQ from './views/faq'
import Blog from './views/blog'
import Elite from './views/elite'
import Onix from './views/onix'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Productos} exact path="/productos" />
        <Route component={Store} exact path="/store" />
        <Route component={Inicio} exact path="/" />
        <Route component={Hidroactive} exact path="/hidroactive" />
        <Route component={Contacto} exact path="/contacto" />
        <Route component={Wion} exact path="/wion" />
        <Route component={WhiteLabel} exact path="/white-label" />
        <Route component={Nosotros} exact path="/nosotros" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={Blog} exact path="/blog" />
        <Route component={Elite} exact path="/elite" />
        <Route component={Onix} exact path="/onix" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
