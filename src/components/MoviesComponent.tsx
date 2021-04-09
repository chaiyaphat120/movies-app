import { useTypedSelector } from "../redux"
import { useDispatch } from "react-redux"
import { ActionType } from "../redux/types/types"
import { getMoviesList } from "../helper/Api"
import { useCallback, useEffect } from "react"

const MoviesComponent: React.FC = () => {
    const dispatch = useDispatch()
    const { moviesList } = useTypedSelector((state) => state.moviesState)

    const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch({
            type: ActionType.FETCH_DATA,
            payload: {
                picture: "555.png",
                rate: "AM22",
                title: "Lufee22",
                years: "101010",
            },
        })
    }
    let todoComponent: React.ReactNode = <div></div>
    if (moviesList.length) {
        todoComponent = moviesList.map((movie) => {
            return (
                <div key={movie.rate}>
                    {movie.title} : {movie.picture} {movie.rate} {movie.years}{" "}
                </div>
            )
        })
    }
    const getMoviesFormList = useCallback(async () => {
        const dataFormApi = await getMoviesList()
        console.log(dataFormApi)
        dispatch({
            type: ActionType.FETCH_DATA,
            payload: {
                picture: "555.png",
                rate: "AM",
                title: "Lufee",
                years: "2020",
            },
        })
    }, [dispatch])

    useEffect(() => {
        let loading = false
        if (!loading) {
            getMoviesFormList()
        }
        return () => {
            loading = false
        }
    }, [getMoviesFormList])

    return (
        <div>
            <button onClick={onSubmit}>Click</button>
            {todoComponent}
        </div>
    )
}
export default MoviesComponent
