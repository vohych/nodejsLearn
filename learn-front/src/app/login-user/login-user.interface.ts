export interface LoginUserInterface {
  _id: string;
  status: {
    code: number
  };
  user: {
    token: string
  };
}
