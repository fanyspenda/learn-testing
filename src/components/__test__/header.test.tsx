import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { headerTestId } from "../data-testid";

import Header from "../header/Header";

const { title, todoInput, todoSubmit } = headerTestId;

beforeEach(() => {
	render(<Header />);
});

test("Header show correct text", async () => {
	expect(screen.getByTestId(title)).toHaveTextContent(/^Simple Todo List$/);
});

test("Header input is empty at beginning", async () => {
	expect(screen.getByTestId(todoInput)).toHaveValue("");
});

test("Header button submit has correct text", async () => {
	expect(screen.getByTestId(todoSubmit)).toHaveTextContent(/^Tambah$/);
});

test("Header button submit has correct classname", async () => {
	expect(screen.getByTestId(todoSubmit)).toHaveClass("submit-button");
});

test("Header clear input after submit", async () => {
	userEvent.type(screen.getByTestId(todoInput), "Todo 1");
	await waitFor(() => userEvent.click(screen.getByTestId(todoSubmit)));
	expect(screen.getByTestId(todoInput)).toHaveValue("");
});
