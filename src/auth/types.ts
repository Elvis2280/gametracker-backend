export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserToken = {
  access_token: string;
};
