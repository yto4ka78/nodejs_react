import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./views/main/Main";
import NavBar from "./UI/navbar/NavBar";
import Dashboard from "./views/dashboard/Dashboard";
import Footer from "./UI/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./views/registration/Registration";

function App() {
    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <BrowserRouter>
                <NavBar />
                <div style={{ flex: "1" }}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/createbouquet" element={<Dashboard />} />
                        <Route path="/registration" element={<Registration />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
