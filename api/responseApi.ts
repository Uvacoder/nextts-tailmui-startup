/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import objectToArray from "@utils/objectToArray"
import axios from "axios"
const CancelToken = axios.CancelToken
export let cancelRequest: any

export const apiUrl = process.env.REACT_APP_API_URL
// Axios
axios.defaults.baseURL = apiUrl

const responseApi = async (url: string, method: string, data?: any, headerData = {}): Promise<{ data: string | [any] | [] | null, error: boolean, status: string | number, message: string | [any] | [] | null, fullRes: any }> => {
    if (!navigator.onLine)
        return {
            error: true,
            status: 'offline',
            message: "Oops! You're offline. Please check your network connection...",
            data: null,
            fullRes: null
        }

    try {
        const res = await axios({
            method,
            url,
            data,
            headers: { ...headerData },
            cancelToken: new CancelToken(function executor(c: any) {
                cancelRequest = c;
            })
        })

        if (!res.data.hasOwnProperty('data'))
            return { error: false, status: res.status, data: res.data, message: [], fullRes: res.data }
        else if (res.data.hasOwnProperty('message'))
            return { error: false, status: res.status, data: res.data.data, message: objectToArray(res.data.message), fullRes: res.data }
        else
            return { error: false, status: res.status, data: res.data.data, message: objectToArray(res.data.data), fullRes: res.data }
    } catch (err: any) {
        let data
        if (err.response?.status === 500) {
            data = { status: err.response?.status, message: ['Something went wrong.'] }
        }
        else if (err.message === "Network Error") {
            data = { status: 408, message: ['Server is not responding.'] }
        } else if (err.response?.data.hasOwnProperty('message'))
            data = { status: err.response?.status, message: objectToArray(err.response?.data?.message) }
        else
            data = { status: err.response?.status, message: objectToArray(err.response?.data) }

        return { error: true, ...data, data: null, fullRes: err.response?.data }
    }

}

export default responseApi