import { AxiosError, AxiosRequestConfig, default as Axios } from 'axios';
import { ERROR_MESSAGES } from '../library/utils/constants';

const authInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json', // Set the default content type
    },
    withCredentials: true, // Required to send cookies
});

const handleResponseErrors = (err: any) => {
    if (Axios.isCancel(err)) return Promise.reject(ERROR_MESSAGES.KC600);
    else if (err.response && err.response.status === 404) {
        return Promise.reject(ERROR_MESSAGES.KC404);
    } else if (err.response && err.response.status === 403) {
        return Promise.reject(ERROR_MESSAGES.KC403);
    } else if (err.response && err.response.status === 401) {
        return Promise.reject(ERROR_MESSAGES.KC401);
    } else if (err.response && err.response.status === 500) {
        return Promise.reject(ERROR_MESSAGES.KC500);
    }

    return Promise.reject(ERROR_MESSAGES.KC2000);
};

export interface KnightsCommerceResponse<T> {
    status: boolean;
    data: T;
    errors: Array<{
        errorCode: string;
        domain: string;
        errorMessage: string;
        type: string;
        block: string;
    }>;
}


const axios = {
    get: <T, V = KnightsCommerceResponse<T>>(uri: string): Promise<V> =>
        authInstance
            .get<V>(uri)
            .then((result) => result.data)
            .catch((err) => handleResponseErrors(err)),

    post: <T, U = unknown, V = KnightsCommerceResponse<T>>(
        uri: string,
        data: U,
        config?: AxiosRequestConfig
    ): Promise<V> =>
        authInstance
            .post<V>(uri, data, config)
            .then((result) => result.data)
            .catch((err) => handleResponseErrors(err)),

    put: authInstance.put,

    delete: authInstance.delete,
};

export default axios;
