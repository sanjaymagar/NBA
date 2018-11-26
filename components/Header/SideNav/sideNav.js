import React from 'react';

import SideNav from 'react-simple-sidenav';
import sideNavItems from './sideNavItems';

const SideNavigation = (props) => {
	return (
		<div>
			<SideNav
				showNav= {props.showNav}
				onHideNav= {props.onHideNav}
				navStyle = {{
					background:'#242424',
					maxWidth:'220px'
				}
				}
			
			> 
			{ sideNavItems() }


			</SideNav>
		</div>
	)
}


export default SideNavigation;