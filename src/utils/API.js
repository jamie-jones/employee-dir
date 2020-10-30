import axios from "axios";

const URL = "https://randomuser.me/api/?results=7";

export default {
  getEmployees: function () {
    return axios.get(URL);
  },
};
