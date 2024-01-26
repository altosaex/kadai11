import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Home.css';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import Widgets from './components/widget/Widgets';

function Home() {
	const [user] = useAuthState(auth);

	return (
		<div>
			{user ? (
    <div className="app">
			<Sidebar className="sidebar"/>
			<Timeline className="timeline"/>
			<Widgets className="widgets"/>
			</div>
			) : (
		<div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ススミダスSNS</h3>
          <span className="loginDesc">クローズドな空間で自己内省を。</span>
      </div>
				<div className="loginRight">
				<SignInButton />
				</div>
			</div>
		</div>
			)}
		</div>
	);
}

export default Home;


// Googleボタンでサインイン
function SignInButton() {
	const signInWithGoogle = () => {
			//firebaseを使ってGoogleでサインイン
			signInWithPopup(auth, provider);
	};

	return (
		<button onClick={signInWithGoogle} className='loginRegisterButton'>
			<p>googleでサインイン</p>
		</button>
	);
}

