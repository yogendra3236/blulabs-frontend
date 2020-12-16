import query from "../utils/query";
import { USER_INFO_API } from "../constants/api";

const getUserInfo = async () => {
  const url = USER_INFO_API;

  try {
    const userData = await query({ url });
    return userData;
  } catch (err) {
    console.log(err);
  }
};

export default getUserInfo;
