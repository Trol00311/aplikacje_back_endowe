import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./weather";

function app() {
    return(
        <Router>
            <Routes>
                <Route extact path="/pogoda" elemnt={<Weather/>}/>
            </Routes>
        </Router>

    );
}
export default App;