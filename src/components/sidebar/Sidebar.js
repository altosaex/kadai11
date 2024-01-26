import React from 'react';
import logo from './logo.png';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';
import { auth } from '../../firebase.js';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='logo'>
				<img src={logo} className='logoSize' alt='logo' />
			</div>

			{/*sidebarOption*/}
			{/* <UserInfo /> */}
      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />

			<Button variant="outlined" className='sidebar__tweet' >投稿する</Button>
			<SignOutButton />
		</div>
	);
}

// サインアウト
function SignOutButton() {
	return (
		<button onClick={() => auth.signOut()} className='signOut'>
			<p className='signOutP'>サインアウト</p>
		</button>
	);
}

// function UserInfo() {
// 	return (
// 		<div className='userInfo'>
// 			<img src={auth.currentUser.photoURL} alt="" className='userInfoImge'/>
// 			<p className='userInfoP'>{auth.currentUser.displayName}</p>
// 		</div>
// 	);
// }

export default Sidebar;