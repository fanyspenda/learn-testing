import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { cardTestId } from "../data-testid";

import Card from "../card/Card";

const { doingButton, doneButton, todoButton, deleteButton } = cardTestId;

test("Card receives correct title", async () => {
	render(<Card todoId="1" title="Simple Todo List" status="doing" />);
	expect(screen.getByText(/^Simple Todo List$/)).toBeTruthy();
});

test("Card show Todo button group", async () => {
	render(<Card todoId="1" status="todo" title="Learn" />);
	expect(screen.getByTestId(doingButton)).toBeTruthy();
	expect(screen.getByTestId(deleteButton)).toBeTruthy();
});

test("Card show Doing button Group", async () => {
	render(<Card todoId="1" status="doing" title="Learn" />);
	expect(screen.getByTestId(todoButton)).toBeTruthy();
	expect(screen.getByTestId(doneButton)).toBeTruthy();
});

test("Card show Done button Group", async () => {
	render(<Card todoId="1" status="done" title="Learn" />);
	expect(screen.getByTestId(doingButton)).toBeTruthy();
	expect(screen.getByTestId(deleteButton)).toBeTruthy();
});

test("Card button show correct text", async () => {
	render(<Card todoId="1" status="todo" title="Learn" />);
	expect(screen.getByTestId(doingButton)).toHaveTextContent(/^Doing$/);
	expect(screen.getByTestId(deleteButton)).toHaveTextContent(/^Delete$/);
	render(<Card todoId="1" status="doing" title="Learn" />);
	expect(screen.getByTestId(todoButton)).toHaveTextContent(/^Todo$/);
	expect(screen.getByTestId(doneButton)).toHaveTextContent(/^Done$/);
});
