import { ActionType } from '../types/types'
import { Action } from '../types/moviesType'
interface RepositoriesState {
    moviesList: Array<{
        picture: string,
        rate: string,
        title: string,
        years: string,
        _id: string
    }>
}

const initialState = {
    moviesList: [
        // {
        //     picture: "noPic.png",
        //     rate: "G",
        //     title: "kongVSGodzila",
        //     years: "2020",
        //     _id: "606f3659590d36180c136176"
        // }
    ]
}


const moviesReducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {
    switch (action.type) {
        case ActionType.FETCH_DATA:
            const { picture,
                rate,
                title,
                years,
                _id } = action.payload
            return {
                moviesList: [...state.moviesList, {
                    picture,
                    rate,
                    title,
                    years,
                    _id
                }]
            }

        default:
            return state
    }
}

export { moviesReducer }
