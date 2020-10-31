import axios from "axios";

const URL = "https://randomuser.me/api/?results=7&nat=us";

export default {
  getEmployees: function () {
    return axios.get(URL);
  },
};
