import { useState, useCallback } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {       // тут указываем аргументы, и у них по дефолту указаны значения 

        setProcess('loading');

        try {
            const response = await fetch(url, {method, body, headers});     // ждём ответ от сервера

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();           // сюда запишется ответ от сервера

            return data;
        } catch (e) {
            setProcess('error');
            throw e;
        }

    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return {request, clearError, process, setProcess};
}