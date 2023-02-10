import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook-black.png";
import FacebookFilled from "../assets/facebook-filled-white.png";
import Twitter from "../assets/twitter-black.png";
import TwitterFilled from "../assets/twitter-filled-white.png";
import Github from "../assets/github-black.png";
import GithubFilled from "../assets/github-filled-white.png";

const FormContainer = styled.div`
	background-color: #fff;
	height: 100%;
	padding: 50px;
	.form-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.header {
		width: 100%;
	}
	.form {
		padding: 10px 0;
	}
	h3 {
		font-family: "Prompt";
		font-size: 32px;
	}
	.body-text {
		font-size: 15px;
		font-weight: 500;
	}
	.hyperlink-text {
		font-size: 15px;
		color: #0077b6;
		font-weight: 500;
		padding-left: 10px;
		text-decoration: none;
	}
	.hyperlink-text-v2 {
		color: #0077b6;
		text-decoration: none;
	}
	.subtext-class {
		display: flex;
	}

	.label-text {
		margin-bottom: 5px;
		font-size: 12px;
		font-weight: 600;
		color: #696969bf;
	}
	input {
		background-color: transparent;
		padding: 0.7rem;
		border: 0.1rem solid #696969;
		border-radius: 0.4rem;
		width: 100%;
		font-size: 12px;
		margin-bottom: 10px;
		&:focus {
			border: 0.1rem solid #0077b6;
			outline: none;
		}
	}
	.consent {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}
	.remember-block {
		display: flex;
		align-items: center;
	}
	.checkbox {
		width: 18px;
		height: 18px;
		margin-bottom: 0;
		margin-right: 10px;
		accent-color: #f15757;
	}
	button[type="submit"] {
		padding: 0.6rem;
		font-size: 15px;
		font-weight: 600;
		color: #fff;
		background-color: #f15757;
		border: 0;
		box-shadow: none;
		border-radius: 25px;
		width: 100%;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.error-message {
		text-align: center;
		color: #e04a3a;
		font-weight: 500;
		max-width: 500px;
		display: flex;
		justify-content: center;
	}
	.continue-block {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 30px 0;
	}
	.continue-label {
		width: 100%;
		text-align: center;
		white-space: nowrap;
		font-size: 15px;
		font-weight: 500;
		color: #50505080;
		margin: 0 20px;
	}
	.line {
		height: 2px;
		width: 100%;
		background: #50505030;
	}
	.sso-block {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	.sso-btn {
		border: 2px solid #505050;
		padding: 7px 45px;
		border-radius: 25px;
		opacity: 0.8;
	}
	.fb-icon {
		margin-left: 5px;
	}
	.icons {
		max-width: 24px;
	}

	// facebook hover styles

	.fb-hov {
		display: none;
		margin-right: 5px;
		position: absolute;
	}
	.fb-btn {
		&:hover {
			background-color: #4267b2;
			border: 2px solid #4267b2;
		}
	}
	.fb-btn:hover .fb-icon {
		display: none;
	}
	.fb-btn:hover .fb-hov {
		display: inline;
		position: relative;
	}

	// twitter hover styles

	.tw-hov {
		display: none;
		position: absolute;
	}
	.tw-btn {
		&:hover {
			background-color: #1da1f2;
			border: 2px solid #1da1f2;
		}
	}
	.tw-btn:hover .tw-icon {
		display: none;
	}
	.tw-btn:hover .tw-hov {
		display: inline;
		position: relative;
	}

	//github hover styles

	.gh-hov {
		display: none;
		position: absolute;
	}
	.gh-btn {
		&:hover {
			background-color: #4078c0;
			border: 2px solid #4078c0;
		}
	}
	.gh-btn:hover .gh-icon {
		display: none;
	}
	.gh-btn:hover .gh-hov {
		display: inline;
		position: relative;
	}
`;

export default function Login() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		email: "",
		password: "",
		consent: false,
	});
	const [error, setError] = useState(true);

	// if user already logged in
	useEffect(() => {
		if (localStorage.getItem("eazy-room-user")) {
			navigate("/");
		}
	}, []);

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleValidation = () => {
		const { email, password } = values;

		const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (!validEmailRegex.test(email)) {
			setError("Email is required.");
			return false;
		} else if (password.length < 2) {
			setError("Password should be equal or greater than 8 characters.");
			return false;
		}
		setError(false);
		return true;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		handleValidation();
		if (handleValidation()) {
			const { email, password } = values;
			const payloadBody = {
				user_email: email,
				user_password: password,
			};
			const userLoginEndPoint =
				"https://snapkaro.com/eazyrooms_staging/api/userlogin";

			try {
				const { data } = await axios.post(
					userLoginEndPoint,
					payloadBody
				);

				if (data.status) {
					localStorage.setItem(
						"eazy-room-user",
						JSON.stringify(data.user_data)
					);
					// if success, redirect to dashboard
					navigate("/");
				}
			} catch (err) {
				console.log(err);
				setError(err.message);
			}
		}
	};

	return (
		<FormContainer>
			<div className="form-wrapper" onSubmit={(e) => handleSubmit(e)}>
				<form className="header">
					<img src={Logo} alt="logo" />
					<h3 className="heading">Log In</h3>
					<div className="subtext-class">
						<p className="body-text">Don't have an account ?</p>
						<Link to={"/signup"} className="hyperlink-text">
							{" "}
							Sign Up
						</Link>
					</div>
					<div className="form">
						<div className="input-set">
							<p className="label-text">Email address *</p>
							<input
								type="email"
								name="email"
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div className="input-set">
							<p className="label-text">Password *</p>
							<input
								type="password"
								name="password"
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className="consent">
						<div className="remember-block">
							<input
								type="checkbox"
								className="checkbox"
								checked={values.consent}
								onClick={() => {
									setValues((prev) => {
										return {
											...prev,
											consent: !prev.consent,
										};
									});
									set;
								}}
							/>
							<div className="checkmark">
								<span>Remember me</span>
							</div>
						</div>
						<Link
							to={"/forgot-password"}
							className="hyperlink-text-v2"
						>
							Forgot Password
						</Link>
					</div>
					<button type="submit">Login</button>
					{error && <span className="error-message">{error}</span>}
				</form>
				<div className="continue-block">
					<div className="line" />
					<p className="continue-label">Or continue with</p>
					<div className="line" />
				</div>
				<div className="sso-block">
					<a href="https://www.facebook.com">
						<div className="sso-btn fb-btn">
							<img
								src={FacebookFilled}
								alt="facebook"
								className="icons fb-hov"
							/>
							<img
								src={Facebook}
								alt="facebook"
								className="icons fb-icon"
							/>
						</div>
					</a>
					<a href="https://www.twitter.com">
						<div className="sso-btn tw-btn">
							<img
								src={TwitterFilled}
								alt="twitter"
								className="icons tw-hov"
							/>
							<img
								src={Twitter}
								alt="twitter"
								className="icons tw-icon"
							/>
						</div>
					</a>
					<a href="https://www.github.com">
						<div className="sso-btn gh-btn">
							<img
								src={GithubFilled}
								alt="github"
								className="icons gh-hov"
							/>
							<img
								src={Github}
								alt="github"
								className="icons gh-icon"
							/>
						</div>
					</a>
				</div>
			</div>
		</FormContainer>
	);
}
