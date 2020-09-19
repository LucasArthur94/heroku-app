type GetProjectsResponse = {
  data: Project[];
};

type Project = {
  acm: boolean;
  archived_at: Date;
  buildpack_provided_description: string;
  build_stack: {
    id: string;
    name: string;
  };
  created_at: Date;
  git_url: string;
  id: string;
  internal_routing: false;
  maintenance: false;
  name: string;
  owner: {
    email: string;
    id: string;
  };
  organization: {
    id: string;
    name: string;
  };
  team: {
    id: string;
    name: string;
  };
  region: {
    id: string;
    name: string;
  };
  released_at: Date;
  repo_size: number;
  slug_size: number;
  space: {
    id: string;
    name: string;
    shield: boolean;
  };
  stack: {
    id: string;
    name: string;
  };
  updated_at: Date;
  web_url: string;
};
