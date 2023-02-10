import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";
import Back from "../assets/Patterns303.webp";

const LoginWrapperComp = styled.div`
	background-color: #fff;
	height: 100vh;
	width: 100vw;
	padding: 50px;
	span {
		color: #000;
	}
	.container {
		height: 100%;
		// border: 1px black solid;
		border-radius: 2rem;
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		overflow: hidden;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	.image {
		background-color: #000;
		background-image: linear-gradient(
				90deg,
				rgba(0, 0, 0, 0.8),
				rgba(0, 0, 0, 0)
			),
			url("/src/assets/Patterns303.webp");
		flex: 3;
		display: flex;
		align-items: center;
	}
	.hero-text {
		font-family: "Prompt";
		font-size: 32px;
		color: #fff;
		padding-left: 50px;
		font-weight: 400;
	}
	.bigFont {
		font-size: 54px;
		font-weight: 600;
		top: 50%;
		position: absolute;
	}
	.login-comp {
		background-color: blue;
		flex: 2;
	}
	@media only screen and (max-width: 1280px) {
		.image {
			flex: 1;
		}
		.login-comp {
			flex: 1;
		}
	}
	@media only screen and (max-width: 1000px) {
		.image {
			flex: 1;
		}
		.login-comp {
			flex: 2;
		}
	}
	@media only screen and (max-width: 756px) {
		.image {
			display: none;
		}
		.login-comp {
			flex: 1;
		}
	}
`;

function LoginWrapper({ page }) {
	return (
		<LoginWrapperComp>
			<div className="container">
				<div className="image">
					{/* <img src={Back} alt="back" className="bgimage"/> */}
					<div>
						<h3 className="hero-text">Welcome to</h3>
						<h3 className="hero-text bigFont"> Eazyrooms</h3>
					</div>
				</div>
				<div className="login-comp">
					{page === "signup" ? <Signup /> : <Login />}
				</div>
			</div>
		</LoginWrapperComp>
	);
}

export default LoginWrapper;
