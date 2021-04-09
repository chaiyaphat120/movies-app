import { render, screen } from "@testing-library/react"
import LoginComponent from "../LoginComponent"
import { Provider } from "react-redux"
import { store } from "../../../redux/index"
import userEvent from "@testing-library/user-event"

describe("MoviesComponent", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <LoginComponent />
            </Provider>
        )
    })

    it("Should display button and text in fist render", () => {
        screen.getByText(/Movies-App/i)
        screen.getByRole("button", { name: "Click" })
    })

    it("Should display data from api", () => {
        screen.getByText(/Movies-App/i)
        screen.getByRole("button", { name: "Click" })
        userEvent.click(screen.getByRole("button", { name: "Click" }))
        screen.getByText(/Show List/i)
    })
})
