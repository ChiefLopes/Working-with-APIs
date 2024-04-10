import { useQuery } from "@tanstack/react-query";

const BASEURL = () =>
  fetch("https://random.dog/woof.json").then((res) => res.json());

const Query2 = () => {const { data, isLoading, error } = useQuery({ queryKey: ["dogs"], queryFn: BASEURL,
  });

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>there is an error</p>;
  }

  if (!data) {
    return <p>Nothing to display</p>;
  }

  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.fileSizeBytes}</p>
          <img src={item.url} alt="" width={300} height={300} />
        </div>
      ))}
    </div>
  );
};

export default Query2;
