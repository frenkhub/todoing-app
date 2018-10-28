import React from 'react'
import NavigationBar from './components/NavigationBar.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import SessionIndex from './components/SessionIndex'
import TaskIndex from './components/TaskIndex'
import SessionPage from './components/SessionPage'
import { Grid } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavigationBar></NavigationBar>
          <Grid>
            <Route exact path="/" component={Home} />
            <Route exact path="/sessions" component={SessionIndex} />
            <Route path="/sessions/:id" component={SessionPage} />
            <Route path="/tasks" component={TaskIndex} />
          </Grid>
        </div>
      </Router>
    </Provider>
  )
}

export default App
