import axios, { AxiosResponse } from "axios";

const clothesApi = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getAllClothes = async (): Promise<AxiosResponse> => {
  return await clothesApi.get("api/clothes/");
};
