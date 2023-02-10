import React, { useEffect } from "react";
import User from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardHolder from "./CardHolder";
import Order from "./Order";
import Error from "./Error";
import Logo from "../assets/logo.svg";
import Search from "../assets/search.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Github from "../assets/github.png";
import Web from "../assets/web.png";
import Support from "../assets/support.png";

const DashboardContainer = styled.div`
	// background: black;
	// background-image: url("/src/assets/Patterns303.webp");
	background-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0)
		),
		url("/src/assets/Patterns303.webp");
	height: 100vh;

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 2;
		position: relative;
		background: white;
		box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
		padding: 15px 20px;
	}
	.profile {
		height: 40px;
	}
	button {
		padding: 0.6rem;
		font-size: 12px;
		font-weight: 600;
		color: #fff;
		background-color: #f15757;
		border: 0;
		box-shadow: none;
		border-radius: 5px;
		width: 100%;
		margin-bottom: 4px;
		max-width: 125px;
		cursor: pointer;
	}
	.userbox {
		display: flex;
		align-items: center;
	}
	.userinfo {
		font-family: "Prompt";
		font-size: 24px;
		padding-left: 15px;
		color: #f15757;
	}
	.input-icons i {
		position: absolute;
	}

	.input-icons {
		width: 100%;
		// margin-bottom: 10px;
		position: relative;
		margin-left: 40px;
	}

	.icon-search {
		max-width: 20px;
		position: absolute;
		top: 9px;
		right: 15px;
		z-index: 2;
		opacity: 0.5;
	}

	.input-field {
		width: 250px;
		padding: 10px;
		padding-left: 15px;
		text-align: left;
		position: relative;
		border-radius: 20px;
		border: 2px solid #69696950;
		font-size: 15px;
		font-weight: 500;
		&:focus-visible {
			border: 2px solid #69696950;
			outline: none !important;
		}
	}
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #696969;
		color: white;
		text-align: center;
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
	}
	.socials {
		display: flex;
		align-items: center;
	}
	.social-icons {
		max-width: 24px;
		margin-left: 10px;
	}
	.fb-icon {
		margin-right: -8px;
	}
	.website-info {
		display: flex;
		align-items: center;
		text-decoration: none;
	}
	.footer-label {
		margin-bottom: 3px;
		margin-left: 10px;
		color: white;
	}
	.content {
		padding: 20px;
	}
`;

function Dashboard({ page }) {
	const navigate = useNavigate();
	const userDataRecieved = localStorage.getItem("eazy-room-user");
	const userData = JSON.parse(userDataRecieved);
	const {
		user_firstname,
		user_lastname,
		user_zipcode,
		user_phone,
		user_email,
		user_id,
	} = userData[0];

	const propData = {
		firstname: user_firstname,
		lastname: user_lastname,
		zipcode: user_zipcode,
		phone: user_phone,
		email: user_email,
		id: user_id,
	};

	// if no user logged in
	useEffect(() => {
		if (!localStorage.getItem("eazy-room-user")) {
			navigate("/login");
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("eazy-room-user");
		navigate("/login");
	};

	const componentSwitcher = (page) => {
		switch (page) {
			case "home":
				return <CardHolder props={propData} />;
			case "order":
				return <Order />;
			default:
				return <Error />;
		}
	};

	return (
		<DashboardContainer>
			<div className="nav">
				<div className="userbox">
					<img className="profile" src={Logo} alt="logo" />
					<div class="input-icons">
						<img
							src={Search}
							alt="search"
							class="fa fa-user icon-search"
						></img>
						<input
							class="input-field"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				<button className="logout" onClick={() => handleLogout()}>
					Log Out
				</button>
			</div>
			<div className="content">{componentSwitcher(page)}</div>

			<div className="footer">
				<div className="website-info">
					<a
						className="website-info"
						href="https://www.easyrooms.com"
					>
						<img src={Web} alt="web" className="social-icons" />
						<p className="footer-label">easyrooms.com</p>
					</a>
					<a
						className="website-info"
						href="https://www.easyrooms.com"
					>
						<img
							src={Support}
							alt="support"
							className="social-icons"
						/>
						<p className="footer-label">Contact 1800-476-678</p>
					</a>
				</div>
				<div className="socials">
					<a href="https://www.facebook.com">
						<img
							src={Facebook}
							alt="facebook"
							className="social-icons fb-icon"
						/>
					</a>
					<a href="https://www.twitter.com">
						<img
							src={Twitter}
							alt="twitter"
							className="social-icons"
						/>
					</a>
					<a href="https://www.github.com">
						<img
							src={Github}
							alt="github"
							className="social-icons"
						/>
					</a>
				</div>
			</div>
		</DashboardContainer>
	);
}

export default Dashboard;
