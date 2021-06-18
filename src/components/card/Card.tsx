export interface CardProps {
	title: string;
	status: string;
}

const Card: React.FunctionComponent<CardProps> = () => {
	return (
		<>
			<h1>This is Card</h1>
		</>
	);
};

export default Card;
