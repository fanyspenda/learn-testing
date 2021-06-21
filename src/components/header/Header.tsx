import React from "react";
import { Form, Input, Button } from "antd";
import "./header.css";
import { headerTestId } from "../data-testid";

export interface HeaderProps {}

interface formValuesType {
	todo: string;
}

const Header: React.FunctionComponent<HeaderProps> = () => {
	const { title, todoInput, todoSubmit } = headerTestId;
	const [form] = Form.useForm();

	const handleSubmit = (values: formValuesType) => {
		form.resetFields();
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h1 data-testid={title}>Simple Todo List</h1>

			<Form layout="inline" form={form} onFinish={handleSubmit}>
				<Form.Item name="todo">
					<Input data-testid={todoInput} />
				</Form.Item>
				<Form.Item style={{ marginRight: 0 }}>
					<Button
						data-testid={todoSubmit}
						className="submit-button"
						htmlType="submit"
					>
						Tambah
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Header;
