import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Home from './components/Home/home';

// HOC(High order components)
import Layout from './HOC/Layouts/layouts'


class Routes extends Component {
	render(){
		return(
			<Layout>
				<BrowserRouter>
					<Route path = '/' exact component = { Home } ></Route>
				</BrowserRouter>
			</Layout>

		)
	}
}


export default Routes;


