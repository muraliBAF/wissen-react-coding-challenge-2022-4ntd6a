export type Token = String | null;

export interface UsersList {
  name: string;
  id: number;
  year: string;
  pantone_value: string;
  color: string;
}

export interface User {
  token: Token;
  usersList: UsersList[];
}

export interface LoginData {
  email: string;
  password: string;
}
