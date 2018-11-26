import React from 'react';
import style from './footer.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';


const Footer = () => {
	return (
		<div className = { style.footer } >
			<BrowserRouter>
				<Link to = '/' className = { style.logo } >
					<img alt = 'logo' src = '/images/nba_logo.png' />
				</Link>
			</BrowserRouter>
			
			<div>
				@NBA {CURRENT_YEAR} All rights reserved.
			</div>
		</div>
	)
}
export default Footer;