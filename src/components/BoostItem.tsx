import { FC, useState } from 'react'
import {IBoost} from '../types/types'

interface IBoostProps{
    id: number,
    title: string,
    text: string,
    clickValueBoost: number,
    clickValue: number,
    setClickValue: React.Dispatch<React.SetStateAction<number>>,
    boosts: Array<IBoost>,
    price: number,
    setBoosts: React.Dispatch<React.SetStateAction<IBoost[]>>,
    balance: number,
    setBalance: (num :number) => void,
}

const BoostItem: FC<IBoostProps> = ({id, title, text, clickValueBoost, clickValue, setClickValue, boosts, price, setBoosts, balance, setBalance}) => {

    const[isBoostActivated, setIsBoostActivated] = useState<boolean>(false);

    const handleBoostClick = () => {
        if(price > balance && !isBoostActivated){
            alert('Не хватает тебе шекелей для покупки!');
        }else{
            if (!isBoostActivated && !boosts.some(boost => boost.id === id && boost.purchased)) {
                setClickValue(clickValue + clickValueBoost);
                setBoosts((prevBoosts) =>
                    prevBoosts.map((boost) =>
                    boost.id === id ? { ...boost, purchased: true } : boost
                    )
                );
                setIsBoostActivated(true);
                setBalance(balance - price);
            }else{
                alert('Ты это уже покупал! Не помнишь да, пьяная голова?');
            }
        }

    };

    return (
        <div className={boosts && boosts.some(boost => boost.id === id && boost.purchased) ? 'boost__item _activated' : 'boost__item'} onClick={handleBoostClick}>
            <div className="boost__item-info">
                <p className='title'>{title} ({price})</p>
                <p className='subtitle'>{text}</p>
            </div>
            <div className="boost__item-image">
                <img width="40" height="40" src="https://img.icons8.com/emoji/48/rocket-emji.png" alt="rocket-emji"/>
            </div>
        </div>
    )
}

export default BoostItem