import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { AxiosPromise } from "axios";
import { UserResponse } from "../interfaces/user_data";

const fetchData = async (): AxiosPromise<UserResponse> => {
    const response = await api.get<UserResponse>('/user');
    return response;
}

export function userData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['user-data']
    })

    return {
        ...query,
        data: query.data?.data
    }
}