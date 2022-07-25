function objectToArray(obj: any, arr: any = []) {
	if (typeof obj === "object") {
		for (var key in obj) {
			if (typeof obj[key] === "object") {
				objectToArray(obj[key], arr)
			}
		}
		return arr
	}
	arr.push(obj)

	return arr
}

export default objectToArray