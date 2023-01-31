import axios from "axios";
import { AUTHORIZATION } from "@env";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${AUTHORIZATION}`,
  },
});
