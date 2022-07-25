import { createContext } from "react";
interface FeedbackContextProps {
    error: Array<string> | null,
    success: Array<string> | null,
    setFeedback: (val: Array<string>, error: boolean) => void

}
export const FeedbackContext = createContext<FeedbackContextProps>({
    error: null,
    success: null,
    setFeedback: (val: Array<string>, error: boolean) => { },
})