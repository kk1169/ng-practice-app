export interface ApiResponse<T> {
  data: T;
  status?: boolean;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
