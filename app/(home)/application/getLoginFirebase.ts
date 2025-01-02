import { IUser } from "@/app/shared/_arquitecture/domain/interface";
import { apiLoginFirebase } from "../infrastructure/api.firebase";
interface IProps {
  user: string;
  pass: string;
}
export const getLoginFirebase = async ({
  user,
  pass,
}: IProps): Promise<IUser> => {
  const response = await apiLoginFirebase({ user, pass });

  return response && response.length > 0 ? response[0] : null;
};
