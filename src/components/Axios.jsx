import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((resp) => {setData(resp.data.message)});
  }, []);

  return (
    <div>
      {data.length > 0 ? ( // Check if data is not empty before rendering
        <img src={data} alt="" width={400} height={300} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Axios;
