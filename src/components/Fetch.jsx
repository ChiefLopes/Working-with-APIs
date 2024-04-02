import { useState, useEffect } from "react";

const FetchMethod = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((dataf) => {
        console.log(dataf);
        setData(dataf.message);
      })
      .catch((error) => console.log("there is an error", error.message))// Concatenating custom message with server error message

  }, []);
  return (
    <div>
      {data ? ( // Check if data is not empty before rendering
        <img src={data} alt="" width={400} height={300}/>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default FetchMethod;
