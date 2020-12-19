import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      <>
        {data.launches.map((launch) => (
          <LaunchItem launch={launch} key={launch.flight_number} />
        ))}
      </>
    </div>
  );
};

export default Launches;
