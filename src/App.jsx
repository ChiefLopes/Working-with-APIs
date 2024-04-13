import "./App.css";
import Axios from "./components/GET/Axios";
import FetchMethod from "./components/GET/Fetch";
import ReactQuery from "./components/GET/ReactQuery";
import UseSWR from "./components/GET/UseSWR";
import Query2 from "./components/GET/Query2";
import { Suspense } from "react";
import QueryMutaton from "./components/QueryMutaton";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <Suspense fallback={<p>Loading...</p>}>
          {/* <FetchMethod /> */}
          {/* <Axios /> */}
          {/* <UseSWR /> */}
          {/* <ReactQuery /> */}
          {/* <Query2 /> */}
          <QueryMutaton />
        </Suspense>
      </div>
    </>
  );
}

export default App;
