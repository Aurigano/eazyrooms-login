import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginWrapper from "./components/LoginWrapper";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/signup"
					element={<LoginWrapper page="signup" />}
				/>
				<Route path="/login" element={<LoginWrapper page="login" />} />
				<Route path="/" element={<Dashboard page="home" />} />
				<Route path="/order" element={<Dashboard page="order" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
