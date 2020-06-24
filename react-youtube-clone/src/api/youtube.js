import axios from "axios";

const KEY = 'AIzaSyDeVxhokzmVBOQSQY5hDsUYJPyMMfibWZc'
const baseURL= "https://www.googleapis.com/youtube/v3";

const getResponse = async (term) => {
  const response = await axios.get(baseURL+"/search",{
    params: {
      q: term,
      part: "snippet",
      maxResults: 5,
      key: KEY

    }
  })
  return response
}

export default getResponse;
