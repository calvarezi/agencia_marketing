import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "containers/errors/Error404";

function App() {
  return (
    <Router>
      <Router>
        {/* Error Display */}
        <Route path="*" element={<Error404 />} />
        {/* Home Page */}
        <Route path="/" element={<Error404 />} />
      </Router>
    </Router>
  );
}

export default App;
