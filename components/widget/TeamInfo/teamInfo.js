import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './teamInfo.css';


const TeamInfo = (props) => {
	
	const teamName = (teams, teamId) => {
		let data = teams.find((item) => {
			return item.id === teamId
		})
		if(data) {
			return data.name
		}
	}


	return (
		<div className = {styles.TeamInfo} >

			<span className = {styles.TeamName}>
					{teamName(props.teams, props.teamId)}
			</span>
			
			<span className = {styles.date}>
				<FontAwesome name = 'clock-o' />
					
						{props.date}
				
			</span>

		</div>

	)
}


export default TeamInfo;