import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components here
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Publish from "./components/Publish";
import Blog from "./components/Blog";

import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  function updateUser(user) {
    setUser(user);
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route
            path="/register"
            element={<Register user={user} updateUser={updateUser} />}
          />
          <Route
            path="/login"
            element={<Login user={user} updateUser={updateUser} />}
          />
          <Route
            path="/blogs/test"
            element={<Blog />}
          />
          <Route path="/publish" element={<Publish user={user} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
