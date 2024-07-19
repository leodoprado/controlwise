import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { UserData } from "../interfaces/user_data";
import { queryClient } from "../lib/react-query";

const postData = async (data: UserData) => {
    return await api.post('/user', data)
}

export function userMutation(){
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user-data']
            })
        }
    })

    return mutate
}