import React from "react";
import User from "./User";
import { connect, useSelector } from "react-redux";
import { Row, Container } from "react-bootstrap";

function AllUsers(props) {

	const { users } = useSelector((state) => {
		return state;
	});
	return (
		<Container>
			<Row>
				{users.map((item) => {
					return (
						<User
							key={item.id}
							userBio={item}
							delete={props.delete}
							editUser={props.editUser}
						/>
					);
				})}
			</Row>
		</Container>
	);
}


export default AllUsers;