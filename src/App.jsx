import "./App.css";
import Axios from "./components/Axios";
import FetchMethod from "./components/Fetch";
import ReactQuery from "./components/ReactQuery";
import UseSWR from "./components/UseSWR";
import { Suspense } from "react";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <Suspense fallback={<p>Loading...</p>}>
          <FetchMethod />
          <Axios />
          <UseSWR />
          <ReactQuery />
        </Suspense>
      </div>
    </>
  );
}

export default App;
