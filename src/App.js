import './App.css';
import React from "react";
import MainPage from "./pages/mainPage/mainPage";
import UsersPages from "./pages/userPage/UsersPages";
import NumbersPage from "./pages/numbersPage/numbersPage";

function App() {
    return (
        <div className="App">
            {/*<MainPage/>*/}
            {/*<UsersPages/>*/}
            <NumbersPage/>
        </div>
    );
}



export default App;
