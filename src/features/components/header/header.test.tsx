import "@testing-library/jest-dom";

import Header from "./header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { appStore } from "../../../services/store/store";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <Header />
                    </Router>
                </Provider>
            );

            const element = screen.getByText(/library/i);
            expect(element).toBeInTheDocument();
        });
    });
});
