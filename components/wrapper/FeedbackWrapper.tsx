import FeedbackAlert from '@common/feedback/FeedbackAlert'
import { FeedbackContext } from '@context/FeedbackContext'
import { ChildType } from '@tstypes/common'
import React, { ReactNode, useState } from 'react'

interface State {
    error: Array<string> | null
    success: Array<string> | null
}

const FeedbackWrapper = ({ children }: ChildType) => {
    const [state, setState] = useState<State>({
        error: null,
        success: null
    })

    const contextValue = {
        error: state.error,
        success: state.success,
        setFeedback: (message: Array<string>, error: boolean) => {
            error ?
                setState({ success: null, error: message }) : setState({ error: null, success: message })

        }
    }

    return (
        <>
            <FeedbackContext.Provider value={contextValue}>
                {children}
                <FeedbackAlert error={state.error} success={state.success} setError={() => setState({ ...state, error: null })} setSuccess={() => setState({ ...state, success: null })} />
            </FeedbackContext.Provider>
        </>
    )
}

export default FeedbackWrapper