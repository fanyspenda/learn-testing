import React from "react";
import { Card as AntCard, Button } from "antd";
import { cardTestId } from "../data-testid";

const { Meta } = AntCard;

type CardProps = {
	todoId: string;
	title: string;
	status: "todo" | "doing" | "done";
};

const Card: React.FunctionComponent<CardProps> = ({
	status,
	title,
	todoId,
}) => {
	const { doingButton, doneButton, todoButton, deleteButton } = cardTestId;
	const cardButtonManager = (
		status: "todo" | "doing" | "done",
		id: string
	) => {
		if (status === "todo" || status === "done")
			return [
				<Button data-testid={doingButton}>Doing</Button>,
				<Button data-testid={deleteButton}>Delete</Button>,
			];
		else if (status === "doing")
			return [
				<Button data-testid={todoButton}>Todo</Button>,
				<Button data-testid={doneButton}>Done</Button>,
			];
	};

	return (
		<AntCard actions={cardButtonManager(status, todoId)}>
			<Meta title={title} />
		</AntCard>
	);
};

export default Card;
