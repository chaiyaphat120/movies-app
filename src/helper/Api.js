import axios from "axios"
const API_URL = process.env.REACT_APP_API_URL
export const getMoviesList = async () => {
    const response = await axios.get(`${API_URL}/movies`)
    const extractedDataFromApi = response.data.data
    return extractedDataFromApi
}
