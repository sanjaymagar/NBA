import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import style from './header.css';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav'




const Header = (props) => {

	const logo = () => (		
			<BrowserRouter>
				<Link to = '/' className = {style.logo}>
					<img alt = 'logo' src = '/images/nba_logo.png' />
				</Link>
			</BrowserRouter>
	)

	const navBars = () => (
		<div>
			<FontAwesome name = 'bars'
				onClick = {props.onOpenNav} 
				style = {{
					color:'#dfdfdf',
					padding:'10px',
					cursor:'pointer'
			}}
			/>
		</div>
	)
	


	return(
		<header className = { style.header } >
			
			<SideNav {...props} />

			<div className = { style.headerOprtion }>
				{ navBars() }
				{ logo() }
				
			</div>
		</header>
	)
}
export default Header;