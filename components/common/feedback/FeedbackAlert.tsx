import React from 'react'
import SnakbarAlert from './SnakbarAlert'
interface Props {
    type: any,
    message: Array<string> | null,
    setFeedback: () => void
}


const FeedbackAlert = ({ type, message, setFeedback }: Props) => {
    return (
        <div>
            {Array.isArray(message) && <SnakbarAlert open={message.length ? true : false} handleClose={setFeedback} message={message} type={type} />}
        </div>
    )
}

export default FeedbackAlert