import { FC, useState, useEffect } from "react";
import BoostItem from "./BoostItem";
import {IBoost} from "../types/types";

interface IBoostsListProps {
    setClickValue: React.Dispatch<React.SetStateAction<number>>,
    clickValue: number,
    balance: number,
    setBalance: (num :number) => void,
}

const BoostsList: FC<IBoostsListProps> = ({ setClickValue, clickValue, balance, setBalance}) => {
    const [boosts, setBoosts] = useState<Array<IBoost>>([
        {
            id: 0,
            title: "Хряпнуть водочки",
            text: "Водочка добавит +5 к силе нашего богатыря",
            clickValueBoost: 5,
            price: 3000,
            purchased: false,
        },
        {
            id: 1,
            title: "Пивка для рывка",
            text: "Золотой дождь даст +7",
            clickValueBoost: 7,
            price: 5000,
            purchased: false,
        },
        {
            id: 2,
            title: "Подраться на свалке",
            text: "Победа обеспечила +10",
            clickValueBoost: 10,
            price: 8000,
            purchased: false,
        },
        {
            id: 3,
            title: "Мексиканская сигара",
            text: "Пошёл по комнате дымок и дал +15",
            clickValueBoost: 15,
            price: 13000,
            purchased: false,
        },
        {
            id: 4,
            title: "Отжать часы у прохожего",
            text: "В ломбарде за них дали +20",
            clickValueBoost: 20,
            price: 17000,
            purchased: false,
        },
        {
            id: 5,
            title: "Я богач!",
            text: "Деньги на ветер и кешбек на +1",
            clickValueBoost: 1,
            price: 1500000,
            purchased: false,
        },
    ]);

    useEffect(() => {
        const storedBoosts = localStorage.getItem("boosts");
        if (storedBoosts) {
            const parsedBoosts = JSON.parse(storedBoosts);
            setBoosts(parsedBoosts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("boosts", JSON.stringify(boosts));
    }, [boosts]);

    return (
        <div className="boosts__list">
            <h3 style={{textAlign:'center', fontSize: '24px'}}>Киоск</h3>
            {boosts.map((boost) => (
                <BoostItem
                    key={boost.id}
                    id={boost.id}
                    title={boost.title}
                    text={boost.text}
                    clickValueBoost={boost.clickValueBoost}
                    clickValue={clickValue}
                    setClickValue={setClickValue}
                    price={boost.price}
                    boosts={boosts}
                    setBoosts={setBoosts}
                    balance={balance}
                    setBalance={setBalance}
                />
            ))}
        </div>
    );
};

export default BoostsList;
