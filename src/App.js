import './App.css';
import React, {useState} from 'react'
import Header from "./components/Header";
import {Button} from "react-bootstrap";

function App() {

    // const [isAuth, setIsAuth] = useState(false)
    // const login = () => setIsAuth(true)
    // const logout = () => setIsAuth(false)
    // if (!isAuth) {
    //     return (
    //         <div className="App">
    //             <div>
    //                 <Button variant="outline-secondary" onClick={login}>Log In</Button>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="App">
            {/*<Button onClick={logout} variant="outline-secondary">Log out</Button>*/}
            <Header/>
        </div>
    );
}

export default App;
