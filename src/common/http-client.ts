import axios from "axios";
import Constants from "expo-constants";

import { getEnvVars } from "./get-env";

export const httpClient = axios.create({
  baseURL: "https://api.heroku.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      getEnvVars(Constants.manifest.releaseChannel)?.token
    }`,
    Accept: "application/vnd.heroku+json; version=3",
  },
});
