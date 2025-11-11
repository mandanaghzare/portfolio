export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
}


export const getGitHubRepos = async (): Promise<Repo[]> => {
  const username = "mandanaghzare";
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) throw new Error("Failed to fetch GitHub repositories");
  return response.json();
};
