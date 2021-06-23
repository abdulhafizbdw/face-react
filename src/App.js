import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import AppMain from './components/AppMain';
import Landing from './components/Landing';
import CompleteCapture from './components/CompleteCapture';
import Result from './components/Result';

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Header/> */}
				<Switch>
					<Route path='/' exact component={Landing} />
					<Route path='/completeCapture' exact component={CompleteCapture} />
					<Route path='/result' exact component={Result} />
				</Switch>
			</Router>
			{/* <Header/>
			<Landing/>
			<CompleteCapture/>
			<Result/> */}
			{/* <AppMain /> */}
		</div>
	);
}

export default App;
