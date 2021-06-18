import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "../card/Card";

test("Card has correct todo name", async () => {
	render(<Card title="Simple Todo List" status="doing" />);
	expect(screen.getByTestId("title")).toHaveTextContent(/^Simple Todo List$/);
});

test("Card has correct status", async () => {
	render(<Card status="doing" title="Simple Todo List" />);
	expect(screen.getByTestId("status")).toHaveTextContent(/^doing$/);
});
