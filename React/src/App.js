import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./views/main/Main";
import NavBar from "./UI/navbar/NavBar";
import Dashboard from "./views/dashboard/Dashboard";
import Footer from "./UI/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/createbouquet" element={<Dashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
