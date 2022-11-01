export const GetRocketAPI = (rocket_id: number) => {
  return fetch("https://api.spacexdata.com/v4/rockets/" + rocket_id).then(
    (res) => res.json()
  );
};
