import axios from "axios";

export type User = {
  id: number;
  name: string;
  password: string;
  createTime: Date;
  updateTime: Date;
}
export const getUserInfo = async (): Promise<User> => {
  const response = await axios.get<User>("/assets/mockAPI/user.json");
  return response.data;
}