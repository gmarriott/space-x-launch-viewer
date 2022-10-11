export const GetLaunchesAPI = () => {
    return fetch("https://api.spacexdata.com/v4/launches").then((res) => res.json());
};
