export interface UserData {
    name: string,
    email: string,
    password: string
}

export interface UserResponse {
    data: UserData[]
}