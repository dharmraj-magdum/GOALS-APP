import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify.css";
// import "../../frontend/node_modulesnode_modules/toastify/toastifydist/toastify.css";
//
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Routes>
					<ToastContainer />
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
