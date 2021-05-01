type Owner = {
  login: string,
  avatar_url?: string,
  html_url: string,

}
export type RepoType = {
  id: number,
  name: string,
  full_name: string,
  owner: Owner,
  html_url: string,
  forks_count: number,
  topics?: string[],
  stargazers_count: number,
  fav?: boolean
}

