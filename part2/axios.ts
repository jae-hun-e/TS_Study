import axios, { Axios, AxiosError, AxiosResponse, isAxiosError } from "axios";

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

(async () => {
    try {
        const response = await axios.get<Post>(
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

        const response2 = await axios.post<Post, AxiosResponse<Post>, Data>(
            `https://jsonplaceholder.typicode.com/posts`,
            data
        );
    } catch (error) {
        // 커스텀 타입가드2
        if (axios.isAxiosError(error)) {
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
