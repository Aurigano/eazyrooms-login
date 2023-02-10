import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Zip from "../assets/zip-code.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import Room from "../assets/room.png";

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
		justify-content: space-between;
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
			"billing history info-card";
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
		align-items: center;
		justify-content: center;
		cursor: pointer;
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
		color: #505050 !important;
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
`;

function Order() {
	const navigate = useNavigate();

	return (
		<CardHolderComponent>
			<div className="container">
				<h3 className="userinfo darkerFont">
					Order under construction
				</h3>
				<button
					className="again-btn"
					onClick={() => {
						navigate("/");
					}}
				>
					Go Home
				</button>
			</div>
		</CardHolderComponent>
	);
}

export default Order;
