import { useQuery } from "@tanstack/react-query";
// import { fakeAPI } from "../data/api";

const BASE = () =>
  fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json());

const fake = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json());

const ReactQuery = () => {
  // RANDOM DOG API
  const { data, isLoading, error } = useQuery({
    queryKey: ["api"],
    queryFn: BASE,
  });

  // TODO API
  const {
    data: TodoData,
    isLoading: TodoIsLoading,
    error: TodoError,
  } = useQuery({
    queryKey: ["todo"],
    queryFn: fake,
  });

  console.log(TodoData);

  if (isLoading || TodoIsLoading) {
    return <p>...loading</p>;
  }

  if (error || TodoError) {
    return <p>There was an error</p>;
  }

  if (!data || !TodoData) {
    return <p>Nothing to display...</p>;
  }

  return (
    <div>
      <img src={data.message} alt="random dog" width={300} height={300} />

      <div className="space-y-4 ">
        {TodoData.map((todo) => (
          <div key={todo.id} className="flex flex-col text-start">
            <p>userID: {todo.userId}</p>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed}</p>
          </div>
        ))}
      </div>
    </div>
  );
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
