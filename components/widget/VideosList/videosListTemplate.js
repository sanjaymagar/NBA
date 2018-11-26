// import React from 'react'; 
// import styles from './videosList.css';
// import {Link} from 'react-router-dom'; 
// // import TeamInfo from '../TeamInfo/teamInfo';

// const VideosListTemplate = (props) => {
	
// 	return props.data.map((item, i) => (
// 		<Link to = {`/videos/${item.id}`} key = {i} >
// 			<div className = {styles.videosList_wrapper} >
// 				<div className = {styles.left} 
// 					style =  {{
// 						background:`url(/images/videos/${item.images})`

// 					}}
// 				>

// 				</div>
// 				<div className = {styles.right} >
// 					<h2>{item.title}</h2>
// 				</div>
// 			</div> 

// 		</Link>
// 	))

// }

// export default VideosListTemplate;



import React from 'react';
import styles from './videosList.css';

import { Link } from 'react-router-dom';
import TeamInfo from '../TeamInfo/teamInfo';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                    style={{
                        background:`url(/images/videos/${item.image})`
                    }}
                >

                </div>
                <div className={styles.right} >
                    <TeamInfo teams={props.teams} team={item.teamId} date={item.date}/>
                    <h2>{ item.title }</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosListTemplate;