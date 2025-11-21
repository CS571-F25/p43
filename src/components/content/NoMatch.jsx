import { Link } from "react-router";

export default function NoMatch() {
    return <>
        <h1>404 Not Found!</h1>
        <p>Uh oh, looks like you're lost!</p>
        <p>
            <Link to="/">Back to Homepage.</Link>
        </p>
    </>
};