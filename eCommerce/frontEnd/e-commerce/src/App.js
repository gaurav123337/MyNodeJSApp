import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "reducers/store";

import Header from "components/Header";
import SignUp from "./pages/SignUp";
import Entry from "./pages/Entry";
import AddAllProducts from "pages/AddAllProducts";
import ShowProducts from "./pages/ShowProducts";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/addProducts" element={<AddAllProducts />} />
            <Route path="/signIn" element={<SignUp />} />
            <Route path="/" element={<Entry />} />
            <Route path="/allProducts" element={<ShowProducts />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
