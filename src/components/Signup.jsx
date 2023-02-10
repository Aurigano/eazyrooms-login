import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const FormContainer = styled.div`
	background-color: #fff;
	height: 100%;
	padding: 50px;
	.form-wrapper {
		display: flex;
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
	@media only screen and (max-height: 700px) {
		.form {
			max-height: 275px;
			overflow-y: scroll;
			margin: 15px 0;
		}
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
		margin-bottom: 20px;
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
`;

export default function Signup() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		firstname: "",
		lastname: "Singhania",
		city: "Hyderabad",
		zip: "123456",
		email: "",
		password: "",
		confirmPassword: "",
		phone: "",
		consent: false,
	});
	// setValues((prev) => {
	// 	return {
	// 		...prev,
	// 		lastname: "Singhania",
	// 		city: "Hyderabad",
	// 		zip: "123456",
	// 	};
	// });
	const [error, setError] = useState(true);

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	// if user already logged in
	useEffect(() => {
		if (localStorage.getItem("eazy-room-user")) {
			navigate("/");
		}
	}, []);

	const handleValidation = () => {
		const {
			firstname,
			lastname,
			city,
			zip,
			phone,
			email,
			password,
			confirmPassword,
			consent,
		} = values;

		const validPhoneRegex =
			/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

		const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		const validZipCodeRegex = /^\d{6}(?:[-\s]\d{4})?$/;

		if (password !== confirmPassword) {
			setError("Password and Confirm Password should be same");
			return false;
		} else if (
			firstname.length < 3 ||
			lastname.length < 3 ||
			city.length < 2
		) {
			setError(
				"First name, Last name and City should be greater than 3 character"
			);
			return false;
		} else if (password.length < 2) {
			setError("Password should be equal or greater than 8 characters.");
			return false;
		} else if (!validZipCodeRegex.test(zip)) {
			setError("Enter correct Zip code");
			return false;
		} else if (!validEmailRegex.test(email)) {
			setError("Email is required.");
			return false;
		} else if (!validPhoneRegex.test(phone)) {
			setError("Please enter valid phone");
			return false;
		} else if (!consent) {
			setError("Please agree to terms");
			return false;
		}
		setError(false);
		return true;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		handleValidation();
		if (handleValidation()) {
			console.log(values);
			const { firstname, lastname, city, phone, email, password, zip } =
				values;
			const payloadBody = {
				user_firstname: firstname,
				user_email: email,
				user_phone: phone,
				user_password: password,
				user_lastname: lastname,
				user_city: city,
				user_zipcode: zip,
			};
			console.log(payloadBody);
			const userRegistrationEndPoint =
				"https://snapkaro.com/eazyrooms_staging/api/user_registeration";

			try {
				// const { data } = await axios.post(
				// 	userRegistrationEndPoint,
				// 	payloadBody
				// );

				if (data.status) {
					// if success, redirect to dashboard
					navigate("/login");
				} else {
					setError(data.msg);
				}
			} catch (err) {
				console.log(err);
				setError(err.msg);
			}
		}
	};

	return (
		<FormContainer>
			<div className="form-wrapper" onSubmit={(e) => handleSubmit(e)}>
				<form className="header">
					<img src={Logo} alt="logo" />
					<h3 className="heading">Sign Up</h3>
					<div className="subtext-class">
						<p className="body-text">Already have an account ?</p>
						<Link to={"/login"} className="hyperlink-text">
							{" "}
							Log In
						</Link>
					</div>
					<div className="form">
						<div className="input-set">
							<p className="label-text">First name *</p>
							<input
								type="text"
								name="firstname"
								onChange={(e) => handleChange(e)}
							/>
						</div>
						{/* <div className="input-set">
							<p className="label-text">Last name *</p>
							<input
								type="text"
								name="lastname"
								onChange={(e) => handleChange(e)}
							/>
						</div> */}
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
						<div className="input-set">
							<p className="label-text">Confirm password *</p>
							<input
								type="password"
								name="confirmPassword"
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div className="input-set">
							<p className="label-text">Phone number *</p>
							<input
								type="text"
								name="phone"
								onChange={(e) => handleChange(e)}
							/>
						</div>
						{/* <div className="input-set">
							<p className="label-text">City *</p>
							<input
								type="text"
								name="city"
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div className="input-set">
							<p className="label-text">Zip Code *</p>
							<input
								type="text"
								name="zip"
								onChange={(e) => handleChange(e)}
							/>
						</div> */}
					</div>
					<div className="consent">
						<input
							type="checkbox"
							className="checkbox"
							checked={values.consent}
							onClick={() => {
								setValues((prev) => {
									return { ...prev, consent: !prev.consent };
								});
							}}
						/>
						<div className="checkmark">
							<span>I agree to the</span>&nbsp;
							<a className="hyperlink-text-v2">
								{" "}
								Terms of Service
							</a>
							&nbsp;
							<span> and </span>&nbsp;
							<a className="hyperlink-text-v2">
								{" "}
								Privacy Policy{" "}
							</a>
						</div>
					</div>
					<button type="submit">Create Account</button>
					{error && <span className="error-message">{error}</span>}
				</form>
			</div>
		</FormContainer>
	);
}
