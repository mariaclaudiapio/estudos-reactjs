import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <div>
            <h1>Ops!</h1>
            <p>Temos um problema!</p>
            <p>Verifique o endereço digitado.</p>
            <p>{error.statusText}</p>
            <p>{error.error.message}</p>
        </div>
    );
};

export default ErrorPage;