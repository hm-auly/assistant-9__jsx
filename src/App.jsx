
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import MyNavber from "./Components/Common/Navber";
import Restaurants from "./Components/All/Restaurants";
import Restaurant from "./Components/Home/Restaurant";
import BellatalialAll from "./Components/BellaItalia/BellatalialAll";

function App() {
  return (
    <Router>
      {/* <SearchBar /> */}
      {/* <MyNavber /> */}
       <Routes>

          <Route path="" element={<MyNavber />} >
          <Route path="/" element={<Restaurants />} />
          <Route path="/All" element={<Restaurant />} />
          <Route path="/BellatalialAll" element={<BellatalialAll />} />
          </Route>

          {/* <Route path="/" element={<Restaurants />} />
          <Route path="/All" element={<Restaurant />} /> */}
        
          
          
      
       </Routes> 
    </Router>
  );
}

export default App;