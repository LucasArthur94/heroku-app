import jsonEnv from "../../env.json";

export const getEnvVars = (env?: string) => {
  if (
    env === null ||
    env === undefined ||
    env === "" ||
    env.indexOf("dev") !== -1
  )
    return jsonEnv.dev;
  if (env === "staging") return jsonEnv.staging;
  if (env === "prod") return jsonEnv.prod;
};
