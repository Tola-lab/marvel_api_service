import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {       // тут указываем аргументы, и у них по дефолту указаны значения 

        setLoading(true);

        try {
            const response = await fetch(url, {method, body, headers});     // ждём ответ от сервера

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();           // сюда запишется ответ от сервера

            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }

    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, error, request, clearError};
}