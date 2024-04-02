import "./App.css";
import Axios from "./components/Axios";
import FetchMethod from "./components/Fetch";
import UseSWR from "./components/UseSWR"


function App() {
  return (
    <>
      <div className="flex space-x-8">
        <FetchMethod />
        <Axios />
        <UseSWR />
      </div>
    </>
  );
}

export default App;
