import axios from "axios";

export const getStarWars = async (people: string = "1"): Promise<any> => {
  return axios.get(`https://swapi.dev/api/people/${people}`);
};
