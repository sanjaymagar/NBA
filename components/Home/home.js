import React from 'react';
import NewsSlider from '../widget/newsSlider/slider';
import NewsList from '../widget/NewsList/newsList';
import VideosList from '../widget/VideosList/videosList';
const Home = () => {
	return(
		<div>
			<NewsSlider 
				type= 'featured'
				start = {0}
				amount = {3}
				settings ={{
					dots:false
				}}

			/>

			<NewsList 
				type='card'
				loadMore={true}
				start={3}
				amount={3}
			/>



			<VideosList 
				type ='card'
				title = {true}
				loadMore = {true}
				start = {0}
				amount = {3}

			/>
		</div>
	)
}
export default Home;