import { createContext } from "react";
interface FeedbackContextProps {
    setFeedback: (val: Array<string>, type: string) => void

}
export const FeedbackContext = createContext<FeedbackContextProps>({
    setFeedback: (val: Array<string>, type: string) => { },
})