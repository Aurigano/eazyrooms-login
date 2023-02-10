import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Zip from "../assets/zip-code.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import Room from "../assets/room.png";
import User from "../assets/user.png";
import Dish from "../assets/dish.png";
import Laundry from "../assets/laundry.png";
import CustomerSupport from "../assets/customer-support.png";

const CardHolderComponent = styled.div`
	max-width: 1280px;
	margin: 50px auto;
	.container {
		height: 100%;
		// border: 1px black solid;
		border-radius: 1rem;
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		padding: 20px;
		overflow: hidden;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		background: white;
	}
	.grid-wrapper {
		display: grid;
		width: 100%;
		height: 600px;
		grid-template-columns: 1fr 1fr 1fr;
		// grid-template-rows: 80px 1fr 1fr 100px;
		grid-gap: 20px;
		grid-template-areas:
			"order history info-card"
			"services billing info-card";
	}
	@media only screen and (max-width: 1280px) {
		.grid-wrapper {
			display: grid;
			width: 100%;
			height: 600px;
			grid-template-columns: 1fr 1fr;
			grid-gap: 20px;
			grid-template-areas:
				"order history"
				"info-card billing"
				"info-card abc"
				"info-card abc";
		}
	}
	@media only screen and (max-width: 756px) {
		.grid-wrapper {
			display: grid;
			width: 100%;
			height: 100%;
			grid-template-columns: 1fr;
			grid-gap: 20px;
			grid-template-areas:
				"order"
				"billing"
				"history"
				"history"
				"info-card"
				"info-card";
		}
	}

	// info card styles
	.info-card {
		border: 2px solid #69696924;
		border-radius: 10px;
		grid-area: info-card;
		padding: 20px;
		&:hover {
			border: 2px solid #f15757;
		}
	}
	.icon {
		height: 24px;
		padding-right: 10px;
	}
	.info-heading {
		font-family: "Prompt";
		font-size: 24px;
		margin-bottom: 10px;
		color: #505050db;
	}
	.info-card:hover .info-heading {
		color: #f15757;
	}
	.info-items {
		display: flex;
		align-items: center;
		opacity: 0.6;
		margin-bottom: 5px;
	}
	.info-label {
		font-size: 15px;

		font-weight: 500;
	}

	// order card styles
	.order {
		border-radius: 10px;
		border: 2px solid #f15757;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		max-height: 200px;
		&:hover {
			background-color: #f15757;
			color: #fff;
		}
	}
	.order:hover .no-padding {
		color: #fff;
	}
	.no-padding {
		padding: 0;
	}

	// history card styles
	.history {
		grid-area: history;
		padding: 22px;
	}
	.darkerFont {
		color: #505050;
	}
	.again-btn {
		font-weight: 400;
		background-color: transparent;
		color: #f15757;
		border: 2px solid #f15757;
		padding: 0.4rem;
		border-radius: 25px;
		&:hover {
			background-color: #f15757;
			color: #fff;
		}
	}
	.recent-history-essentials {
		opacity: 0.8;
		display: flex;
		justify-content: space-between;
	}

	// billing card styles
	.billing {
		grid-area: billing;
		padding: 22px;
	}

	// services styles
	.services {
		grid-area: services;
		padding: 22px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.order-btn {
		display: flex;
		align-items: center;
		border-radius: 15px;
	}
	.dish-image {
		max-width: 50px;
	}
`;

function CardHolder({ props }) {
	const navigate = useNavigate();
	const { firstname, lastname, phone, email, zipcode, id } = props;

	return (
		<CardHolderComponent>
			<div className="container">
				<div className="grid-wrapper">
					<div className="info-card">
						<h3 className="info-heading">Personal Details</h3>
						<div className="info-items">
							<img src={User} alt="user" className="icon" />{" "}
							<p className="info-label">
								{firstname}&nbsp;
								{lastname}
							</p>
						</div>
						<div className="info-items">
							<img src={Phone} alt="phone" className="icon" />{" "}
							<p className="info-label">{phone}</p>
						</div>
						<div className="info-items">
							<img src={Mail} alt="mail" className="icon" />{" "}
							<p className="info-label">{email}</p>
						</div>
						<div className="info-items">
							<img src={Zip} alt="zip" className="icon" />{" "}
							<p className="info-label">{zipcode}</p>
						</div>
						<div className="info-items">
							<img src={Room} alt="room-no" className="icon" />{" "}
							<p className="info-label">{id}</p>
						</div>
					</div>
					<div
						className="order"
						onClick={() => {
							navigate("/order");
						}}
					>
						<h3 className="userinfo no-padding" onClick>
							Welcome to Hotel 891
						</h3>
						<p className="userinfo no-padding">
							Visit nearby places
						</p>
					</div>
					<div className="services">
						<button
							className="btn order-btn"
							onClick={() => {
								navigate("/order");
							}}
						>
							{" "}
							<img
								src={Dish}
								alt="dish"
								className="dish-image"
							/>{" "}
							Order Food
						</button>
						<button
							className="btn order-btn"
							onClick={() => {
								navigate("/order");
							}}
						>
							{" "}
							<img
								src={Laundry}
								alt="laundry"
								className="dish-image"
							/>{" "}
							Order Laundry
						</button>
						<button
							className="btn order-btn"
							onClick={() => {
								navigate("/order");
							}}
						>
							{" "}
							<img
								src={CustomerSupport}
								alt="cust-support"
								className="dish-image"
							/>{" "}
							Call Support
						</button>
					</div>
					<div className="history">
						<h3 className="info-heading darkerFont">
							Recently Ordered
						</h3>
						<div className="info-items recent-history-essentials">
							<p className="info-label">Sandwich</p>
							<button className="again-btn">Order again</button>
						</div>
						<div className="info-items recent-history-essentials">
							<p className="info-label">Laundry</p>
							<button className="again-btn">Order again</button>
						</div>
						<div className="info-items recent-history-essentials">
							<p className="info-label">Some service</p>
							<button className="again-btn">Order again</button>
						</div>
					</div>
					<div className="billing">
						<h3 className="info-heading darkerFont">
							Your Bill History
						</h3>
						<div className="info-items recent-history-essentials">
							<p className="info-label">Hotel XYZ</p>
							<button className="again-btn">View Invoice</button>
						</div>
						<div className="info-items recent-history-essentials">
							<p className="info-label">ABC Stays</p>
							<button className="again-btn">View Invoice</button>
						</div>
						<div className="info-items recent-history-essentials">
							<p className="info-label">GHI Inn</p>
							<button className="again-btn">View Invoice</button>
						</div>
					</div>
				</div>
			</div>
		</CardHolderComponent>
	);
}

export default CardHolder;
