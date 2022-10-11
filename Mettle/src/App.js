import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase/config";
import { AddNewUser } from "./actions/userActions";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const readData = async () => {
			const q = query(collection(db, "users"), orderBy("timestamp", "asc"));
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				const usersArr = [];
				querySnapshot.forEach((doc) => {
					usersArr.push(doc.data());
				});
				dispatch(AddNewUser(usersArr));
				console.log(usersArr);
			});
		};
		readData();
	}, []);

	
	return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col>
					<AddUserForm
					// newUser={addNewUser}
					/>
				</Col>
				<Col>
					<AllUsers
					// userData={users} editUser={EditUser} delete={deleteUser}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;