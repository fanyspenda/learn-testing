import Header from "components/header/Header";
import TodoCard from "components/card/Card";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
	return (
		<div>
			<Header />
		</div>
	);
};

export default Home;
