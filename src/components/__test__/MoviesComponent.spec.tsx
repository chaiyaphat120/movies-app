import { render, screen } from "@testing-library/react"
import MoviesComponent from "../MoviesComponent"
import { Provider } from "react-redux"
import { store } from "../../redux/index"
import userEvent from "@testing-library/user-event"

describe("MoviesComponent", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <MoviesComponent />
            </Provider>
        )
    })

    it("Should display button and text in fist render", () => {
        screen.getByText(/Movies List/i)
        screen.getByRole("button", { name: "Click" })
    })

    it("Should display data from api", () => {
        screen.getByText(/Movies List/i)
        screen.getByRole("button", { name: "Click" })
        userEvent.click(screen.getByRole("button", { name: "Click" }))
        screen.getByText(/Lufee22 : 555.png AM22 101010/i)
    })
})
