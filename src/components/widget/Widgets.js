import React from 'react';
import './Widgets.css';
import { Search } from '@mui/icons-material';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
	return (
		<div className='widgets'>
			<div className='widgets--input'>
				<Search className='widgets--searchIcon'/>
					<input placeholder='キーワード検索' type='text' />
			</div>
				
			<div className='widgets--widgetContainer'>
				<h2>今どうしてる？</h2>
					{/* ライブラリを追加・追記 */}
					<TwitterTweetEmbed tweetId={'1228567689850867712'}/>

					<TwitterTimelineEmbed 
					sourceType='profile' 
					screenName='sae_coach' 
					options={{ height: 400 }} />

					<TwitterShareButton 
					url='https://twitter.com/sae_coach' 
					options={{ text: "#新サービス_ススミダスSNS_から投稿中🎶", via: "sae_coach" }} />
			</div>
		</div>
	)
}

export default Widgets;