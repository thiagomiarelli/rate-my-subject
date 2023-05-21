import './LoadingPage.css'
import { CircularProgress } from "@mui/material"

export function LoadingPage() {
    return (
        <div className="LoadingPage">
            <CircularProgress/>
        </div>
    )
}