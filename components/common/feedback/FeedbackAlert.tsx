import React from 'react'
import SnakbarAlert from './SnakbarAlert'
interface Props {
    error: Array<string> | null,
    success: Array<string> | null,
    setError: () => void,
    setSuccess: () => void
}


const FeedbackAlert = ({ error, success, setError, setSuccess }: Props) => {
    return (
        <div>
            {Array.isArray(error) && <SnakbarAlert open={error.length ? true : false} handleClose={setError} message={error} type="error" />}
            {Array.isArray(success) && <SnakbarAlert open={success.length ? true : false} handleClose={setSuccess} message={success} type="success" />}
        </div>
    )
}

export default FeedbackAlert