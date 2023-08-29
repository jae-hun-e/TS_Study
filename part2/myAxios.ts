import axios, { AxiosError, AxiosResponse } from "axios";

interface A {
    get<T, R = AxiosResponse<T>>(url: string): Promise<R>;

    post<T, R = AxiosResponse<T>, D = any>(url: string, data: D): Promise<R>;

    <T, D, R = AxiosResponse<T>>(config: {
        method: "post" | "get" | "delete" | "put";
        url: string;
        data: D;
    }): Promise<R>;

    <T, D, R = AxiosResponse<T>>(
        url: string,
        config: {
            method: "post" | "get" | "delete" | "put";
            data: D;
        }
    ): Promise<R>;

    isAxiosError(payload: unknown): payload is AxiosError;
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Data {
    title: string;
    body: string;
    userId: number;
}
const myAxios: A = axios;
(async () => {
    try {
        const response = await myAxios.get<Post>(
            `https://jsonplaceholder.typicode.com/posts/1`
        );
        console.log(response.data);
        console.log(response.data.userId);
        response.data;

        const data = {
            title: "foo",
            body: "bar",
            userId: 1,
        };

        const response2 = await myAxios.post<Post, AxiosResponse<Post>, Data>(
            `https://jsonplaceholder.typicode.com/posts`,
            data
        );
        const response3 = await myAxios({
            method: "post",
            url: `https://jsonplaceholder.typicode.com/posts`,
            data,
        });
        const response4 = await myAxios(`https://jsonplaceholder.typicode.com/posts`, {
            method: "post",
            data,
        });
    } catch (error) {
        // 커스텀 타입가드2
        if (myAxios.isAxiosError(error)) {
            console.error(error.response?.data);
        }
        // 커스텀 타입가드1
        if (error instanceof AxiosError) {
            console.error(error.response?.data);
        }

        const errorResponse = (error as AxiosError).response;
        console.error(errorResponse?.data);
    }
})();
