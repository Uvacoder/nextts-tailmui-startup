/* eslint-disable react-hooks/exhaustive-deps */
import { FeedbackContext } from "@context/FeedbackContext"
import { useContext, useEffect, useState } from "react"

type State = { data: [] | null | [any], loading: boolean, error: boolean | null, message: string | null, fullRes: any }

const useApi = ({ errMsg, successMsg, resErrMsg, resSuccessMsg } = { errMsg: true, successMsg: false, resErrMsg: "", resSuccessMsg: "" }, apiFun?: Function, successCallback?: Function, errCallback?: Function): [Function, State] => {
	const context = useContext(FeedbackContext)
	const [state, setState] = useState({
		loading: false,
		error: null,
		data: null,
		message: null,
		fullRes: null
	})

	useEffect(() => {
		if (apiFun) {
			processing(apiFun, successCallback, errCallback)
		}
	}, [])

	const executeApi = async (apiFun: Function, successCallback?: Function, errCallback?: Function, config?: any) => {
		if (apiFun) {
			processing(apiFun, successCallback, errCallback, config)
		}
	}

	const processing = async (apiFun: Function, successCallback?: Function, errCallback?: Function, config?: any) => {
		setState({ ...state, loading: config?.loading ?? true })
		let res = null
		if (apiFun instanceof Function) res = await apiFun()
		else res = await apiFun
		if (res) {
			if (!res.error) {
				setState({
					loading: false,
					error: res.error,
					message: resSuccessMsg || res.message,
					data: !res.error ? res.data : null,
					fullRes: res.fullRes
				});
				(successMsg && config?.successMsg !== false) && context.setFeedback(resSuccessMsg || res.message, res.error)
			} else if (res.error) {
				setState({
					loading: false,
					error: res.error,
					message: resErrMsg || res.message,
					data: !res.error ? res.data : null,
					fullRes: res.fullRes
				});

				(errMsg && config?.errMsg !== false) && context.setFeedback(resErrMsg || res.message, res.error)
			}
			if (!res.error) {
				if (successCallback) successCallback(res)
			}
			if (res.error) {
				if (errCallback) errCallback(res)
			}
		}
	}
	return [executeApi, { ...state }]
}

export default useApi
