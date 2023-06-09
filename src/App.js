import { Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import EditUser from "./pages/EditUser";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addUser" element={<AddUser />}/>
        <Route path="/editUser/:id" element={<EditUser />}/>
      </Routes>
    </div>
  );
}

export default App;
