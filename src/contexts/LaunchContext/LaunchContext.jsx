import React from "react";
import { GetLaunchesAPI, GetRocketAPI } from "../../api/GetLaunches";

export const launchContextDefaults = {
  listLaunches: Function,
  items: [],
  sort: false,
  setSort: Function,
  filter: "",
  setFilter: Function,
  loading: false,
  setLoading: Function,
  hasError: false,
  setError: Function,
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const [sort, setSort] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [hasError, setError] = React.useState(false);

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: React.useCallback(async () => {
          setFilter("");
          setLoading(true);
          setSort(false);
          try {
            const response = await GetLaunchesAPI();

            Promise.all(
              response.map(async (item) => {
                const rocket = await GetRocketAPI(item.rocket);
                item.rocket_name = rocket.name;
              })
            ).then(() => {
              setLoading(false);
              setItems(response);
            });
          } catch {
            setError(true);
          }
        }, []),
        items,
        sort,
        setSort,
        filter,
        setFilter,
        hasError,
        setLoading,
        loading,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
