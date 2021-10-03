import axios from "axios";

const instance = axios.create({
  baseURL: "https://b32c7b00-2af0-45fe-a4e6-7c35ac0f5ed8.mock.pstmn.io",
});

export { instance };
