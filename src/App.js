import { Routes, Route } from "react-router-dom";
import {Home} from "./containers/index.js"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
