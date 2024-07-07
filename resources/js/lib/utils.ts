import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import useSwr from "swr";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const useMutation = (
    key: string,
    { onSuccess, onFailed, onFinished }: any = {}
) => {
    const [isLoading, setIsLoading] = useState(false);

    function mutate(data: any) {
        setIsLoading(true);
        return axios
            .post(route(key), data)
            .then(onSuccess)
            .catch(onFailed)
            .finally(() => {
                onFinished && onFinished();
                setIsLoading(false);
            });
    }

    return { isLoading, mutate };
};

const getData = (key: string) =>
    axios.get(route(key)).then((response) => {
        return response.data;
    });

export const useQuery = (url: string, page: number = 1) => useSwr(url, getData);
