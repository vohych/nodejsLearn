export interface LoginUserInterface {
  _id: string;
  status: {
    code: number
  };
  user: {
    access_token: string
    refresh_token: string
  };
}
