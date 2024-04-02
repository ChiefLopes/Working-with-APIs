
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const UseSWR = () => {
   const {data} = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, {suspense: true});

  return (
    <div>
      {data ? ( // Check if data is not empty before rendering
        <img src={data.message} alt="" width={400} height={300} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default UseSWR