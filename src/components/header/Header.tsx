import React from "react";
import { Form, Input, Button } from "antd";
import "./header.css";

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
	return (
		<div>
			<h1 data-testid="title">Simple Todo List</h1>
			<Form layout="horizontal">
				<Form.Item name="todo">
					<Input data-testid="todo-input" />
				</Form.Item>
				<Button data-testid="todo-submit" className="submit-button">
					Tambah
				</Button>
			</Form>
		</div>
	);
};

export default Header;
