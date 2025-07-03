export interface ILoginForm {
  email: string;
  password: string
}


export interface IAuthResponse {
    access: string
    refresh: string
}

export interface ISliceState {
  isAuth: boolean
  auth: IToken | null
}

export interface IToken {
  access: string
  refresh: string
}