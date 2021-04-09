import { render, screen } from "@testing-library/react"
import MoviesComponent from "../MoviesComponent"
import { Provider } from "react-redux"
import { store } from "../../redux/index"
test("renders learn react link", () => {
    render(
        <Provider store={store}>
            <MoviesComponent />
        </Provider>
    )
    const linkElement = screen.getByText(/Movies List/i)
    expect(linkElement).toBeInTheDocument()
})
