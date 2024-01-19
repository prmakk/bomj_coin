import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./styles/css/main.css";
import BoostsPage from "./pages/BoostsPage";
import EarnPage from "./pages/EarnPage";
import SecretPage from "./pages/SecretPage";

function App() {
    const [balance, setBalance] = useState<number>(0);
    const [clickValue, setClickValue] = useState<number>(1);
    const [totalClicked, setTotalClicked] = useState<number>(0);

    useEffect(() => {
        const storedBalance = localStorage.getItem("balance");
        const storedClickValue = localStorage.getItem("clickValue");
        const storedTotalClicked = localStorage.getItem("totalClicked");
        if (storedBalance && storedClickValue && storedTotalClicked) {
            const parsedBalance = JSON.parse(storedBalance);
            const parsedClickValue = JSON.parse(storedClickValue);
            const parsedTotalClicked = JSON.parse(storedTotalClicked);
            setBalance(parsedBalance);
            setClickValue(parsedClickValue);
            setTotalClicked(parsedTotalClicked);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("balance", JSON.stringify(balance));
        localStorage.setItem("clickValue", JSON.stringify(clickValue));
        localStorage.setItem("totalClicked", JSON.stringify(totalClicked));
    }, [balance, clickValue, totalClicked]);

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            balance={balance}
                            setBalance={setBalance}
                            clickValue={clickValue}
                            totalClicked={totalClicked}
                            setTotalClicked={setTotalClicked}
                        />
                    }
                ></Route>
                <Route
                    path="/boosts"
                    element={
                        <BoostsPage
                            clickValue={clickValue}
                            setClickValue={setClickValue}
                            balance={balance}
                            setBalance={setBalance}
                        />
                    }
                ></Route>
                <Route
                    path="/earn"
                    element={
                        <EarnPage
                            balance={balance}
                            setBalance={setBalance}
                            totalClicked={totalClicked}
                        />
                    }
                ></Route>
                <Route
                    path="/secret"
                    element={
                        <SecretPage 
                            balance={balance}
                            setBalance={setBalance}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
