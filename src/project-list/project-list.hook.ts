import { useEffect, useState } from "react";
import { httpClient } from "../common/http-client";

export const useProjectList = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    getProjects(setProjectList);
  }, []);

  const getProjects = async (storeProjects: (projects: Project[]) => void) => {
    const { data } = await httpClient.request<undefined, GetProjectsResponse>({
      method: "GET",
      url: "apps",
    });

    return storeProjects(data);
  };

  const restartDynos = async (appId: string) => {
    const { status } = await httpClient.request<undefined, { status: number }>({
      method: "DELETE",
      url: `apps/${appId}/dynos`,
    });

    return {
      success: status === 202,
    };
  };

  return {
    projectList,
    restartDynos,
  };
};
