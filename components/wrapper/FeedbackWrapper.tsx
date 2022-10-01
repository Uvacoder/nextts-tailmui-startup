import FeedbackAlert from '@common/feedback/FeedbackAlert'
import { FeedbackContext } from '@context/FeedbackContext'
import { ChildType } from '@tstypes/common'
import React, { ReactNode, useState } from 'react'

interface State {
    message: Array<string> | null,
    type: string
}

const FeedbackWrapper = ({ children }: ChildType) => {
    const [state, setState] = useState<State>({
        message: null,
        type: 'error'
    })

    const contextValue = {
        setFeedback: (message: Array<string>, type: string) => {
            setState({
                message,
                type
            })
        }

    }

    return (
        <>
            <FeedbackContext.Provider value={contextValue}>
                {children}
                <FeedbackAlert type={state.type} message={state.message} setFeedback={() => setState({ ...state, message: null })} />
            </FeedbackContext.Provider>
        </>
    )
}

export default FeedbackWrapper