import axios from 'axios';


export const serviceWithAxios= () => axios.create({
  baseURL: "https://insw-dev.ilcs.co.id/n",
});