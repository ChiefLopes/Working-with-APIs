import "./App.css";
import Axios from "./components/Axios";
import FetchMethod from "./components/Fetch";
import UseSWR from "./components/UseSWR";
import { Suspense } from "react";

function App() {
  return (
    <>
      <div className="flex">
        <Suspense fallback={<p>Loading...</p>}>
          <FetchMethod />
          <Axios />
          <UseSWR />
        </Suspense>
      </div>
    </>
  );
}

export default App;
