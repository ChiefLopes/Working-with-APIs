import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UseSWR = () => {
  const { data, error } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, {
    suspense: true,
  });
  if (error) {
    console.log(`This is the error ${error}`);
  }

  return (
    <div>
      {data ? ( // Check if data is not empty before rendering
        <img src={data.message} alt="" width={300} height={300} />
      ) : (
          <p>No data available</p>
      
      )}
    </div>
  );
};

export default UseSWR;
