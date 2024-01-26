import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import './TweetBox.css';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from '../../firebase';
import { auth } from '../../firebase.js';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweetAvatar, setTweetAvatar] = useState("");
  const [tweetDisplayName, setTweetDisplayName] = useState("");

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: tweetDisplayName,
      username: tweetDisplayName,
      verified: true,
      text: tweetMessage,
      avatar: tweetAvatar,
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
    setTweetAvatar("");
    setTweetDisplayName("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div value={tweetAvatar} className='tweetBox--input'>
        <Avatar src={auth.currentUser.photoURL} alt="" className='userInfoImage' />

				<div>
          <textarea 
          value={tweetMessage} 
          placeholder='今どうしてる？' type='text' 
          onChange={(e) => setTweetMessage(e.target.value)} 
					className='tweetBox--inputText'/> 
					</div>

        </div>
{/* 
        <input
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)} /> */}


        <Button className='tweetBox--tweetButton' type='submit' 
        onClick={sendTweet}>投稿する
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
