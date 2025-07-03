export interface IProfile {
    fullname: string
    email: string
    is_dealer: boolean
    avatar: string | null
    address: string | null
    contacts?: IContact[]
}

export interface IContact {
    id: number
    type: string
    value: string
}