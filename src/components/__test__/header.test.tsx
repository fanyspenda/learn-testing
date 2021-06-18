import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../header/Header";

beforeEach(() => {
	render(<Header />);
});

test("Show header with correct text", async () => {
	expect(screen.getByTestId("title")).toHaveTextContent(/^Simple Todo List$/);
});

test("input is empty at beginning", async () => {
	expect(screen.getByTestId("todo-input")).toHaveValue("");
});

test("Button submit has correct text", async () => {
	expect(screen.getByTestId("todo-submit")).toHaveTextContent(/^Tambah$/);
});

test("Button submit has correct style", async () => {
	expect(screen.getByTestId("todo-submit")).toHaveClass("submit-button");
});

test("Clear input after submit", async () => {
	fireEvent.change(screen.getByTestId("todo-input"), {
		target: {
			value: "Todo 1",
		},
	});
	fireEvent.click(screen.getByTestId("todo-submit"));
	expect(screen.getByTestId("todo-input")).toHaveValue("");
});
