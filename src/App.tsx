import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import store from './redux/index';
import Error404 from './container/Error404';
import './assets/css/styles.css';
import './assets/css/featured.css';
import { Provider as StoreProvider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import Signup from './pages/user/Signup';
import Homepage from './pages/Home';
import VerifyEmail from './container/VerifyEmail';
import Login from './pages/user/Login';

const App = () => {
	return (
		<StoreProvider store={store}>
			<Router>
				<GlobalStyle />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/success" component={VerifyEmail} />
					<Route path="*" component={Error404} />
				</Switch>
			</Router>
		</StoreProvider>
	);
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
	font-family: 'Sofia Pro';
  }
  body {
    font-family: 'Sofia Pro';
  }
`;
export default App;
