import axios from "axios";

const instance = axios.create({
  baseURL: "https://cedae9f5-4c43-4c14-b228-da5f76758943.mock.pstmn.io",
});

export { instance };
