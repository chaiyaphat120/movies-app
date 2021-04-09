
import { ActionType } from './types'

//2.2  defined payload type
interface FetchData {
    type: ActionType.FETCH_DATA
    payload: {
        picture: string,
        rate: string,
        title: string,
        years: string,
        _id: string
    }
}

export type Action =

    | FetchData
