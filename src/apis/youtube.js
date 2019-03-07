import axios from "axios";

const KEY = "AIzaSyCpLvqQej3m9IG_SBgs5DkftGRH3h-48M0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
