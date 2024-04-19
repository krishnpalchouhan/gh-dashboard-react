export type RepoList = {
    Display_name: string;
    Repo_name: string;
    type: string;
    max: number;
    fullScreen?: boolean;
};
export const repoList: RepoList[]= [
    {
        "Display_name": "APP 1",
        "Repo_name": "app1",
        "type": "FE", "max": 3,
        fullScreen: true
        
    },
    {
        "Display_name": "APP 2",
        "Repo_name": "app2",
        "type": "FE", "max": 6
    },
    {
        "Display_name": "APP 3",
        "Repo_name": "app3",
        "type": "FE", "max": 8
    },
    
];