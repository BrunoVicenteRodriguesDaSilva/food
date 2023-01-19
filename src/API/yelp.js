import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wREFf92OiQRRKUDUZlK2qZJZuFtmLWGXaYjkentJMjS3r9Dws8q_Ye9y0b0D3-dsBapafX13c6SZTsnwjuUYw9NyHFYFnJxTU-bh31WbrhocUgtcnI2_Zts4ufTHY3Yx",
  },
});
