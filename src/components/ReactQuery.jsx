import { useQuery } from "@tanstack/react-query";
import { fakeAPI } from "../data/api";

const BASE = () =>
  fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json());


  const fake = () => fetch(fakeAPI).then((res) => res.json())

const ReactQuery = () => {

  // RANDOM DOG API
  const { data, isLoading, error } = useQuery({
    queryKey: ["api"],
    queryFn: BASE,
  });

  // TODO API
  


  console.log(data);
  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>There was an error</p>;
  }

  if (!data) {
    return <p>Nothing to display</p>;
  }

  return <img src={data.message} alt="random dog" width={300} height={300} />
};

export default ReactQuery;

// if (isLoading) {
//   return <p>Loading...</p>;
// }

// if (error) {
//   return <p>Error: {error.message}</p>;
// }

// if (!data) {
//   return <p>No data available</p>;
// }
