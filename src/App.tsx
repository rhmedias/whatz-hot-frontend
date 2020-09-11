import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import header from './container/Header';
import './App.css';
import Error404 from './container/Error404';
import Home from './pages/Home';
import MainLayout from './components/layouts/MainLayout';
import './assets/css/styles.css'
import './assets/css/featured.css'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
							<MainLayout>
								<Home/>
							</MainLayout>
						</Route>
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
