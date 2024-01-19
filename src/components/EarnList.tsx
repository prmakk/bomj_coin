import { FC, useState, useEffect } from 'react'
import {IEarn} from '../types/types';
import EarnItem from './EarnItem';

interface IEarnListProps{
    balance: number,
    setBalance: (num :number) => void,
    totalClicked: number,
}

const EarnList: FC<IEarnListProps> = ({balance, setBalance, totalClicked}) => {
    const [earns, setEarns] = useState<Array<IEarn>>([
        {
            id: 0,
            title: "Накликать 100тыс.",
            award: 10000,
            goal: 100000,
        },
        {
            id: 1,
            title: "Накликать 250тыс.",
            award: 25000,
            goal: 250000,
        },
        {
            id: 2,
            title: "Накликать 500тыс.",
            award: 50000,
            goal: 500000,
        },
        {
            id: 3,
            title: "Накликать 1млн.",
            award: 100000,
            goal: 1000000,
        },
    ]);

    useEffect(() => {
        const storedEarns = localStorage.getItem("earns");
        if (storedEarns) {
            const parsedBoosts = JSON.parse(storedEarns);
            setEarns(parsedBoosts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("earns", JSON.stringify(earns));
    }, [earns]);


    return (
        <div className="earn__list">
            <h3 style={{textAlign:'center', fontSize: '24px'}}>Подгоны</h3>
            {earns.map(earn => (
                <EarnItem 
                    key={earn.id}
                    id={earn.id}
                    title={earn.title}
                    award={earn.award}
                    goal={earn.goal}
                    totalClicked={totalClicked}
                    balance={balance}
                    setBalance={setBalance}
                />
            ))}
        </div>
    );
}

export default EarnList