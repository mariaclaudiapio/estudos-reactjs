import { useState, useEffect } from "react";

// 4 - hooks customizados
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando o POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // 6 - fazendo o carregamento
    const [loading, setLoading] = useState(false);

    // 7 - tratamento de erros
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            })
            setMethod(method);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            // 7 - tratamento de erros
            try {
                // 6 - fazendo o carregamento
                setLoading(true);

                const res = await fetch(url);
                const json = await res.json();

                // 6 - fazendo o carregamento

                setData(json);

            } catch (error) {
                console.log(error.message);

                setError("Houve algum erro ao carregar os dados. Por favor, tente mais tarde!");
            };
            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    // 5 - refatorando o POST
    useEffect(() => {
        const httpRequest = async () => {
            let json
            if (method === "POST") {
                // 6 - fazendo o carregamento
                setLoading(true);

                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);

                json = await res.json();

                setLoading(false);
            }
            setCallFetch(json);
        }
        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error };
};