import { FC, useEffect, useState } from 'react'

interface IEarnItemProps{
    id: number,
    title: string,
    award: number,
    goal: number,
    totalClicked: number,
    balance: number,
    setBalance: (num :number) => void,
}


const EarnItem: FC<IEarnItemProps> = ({id, title, award, goal, totalClicked, balance, setBalance}) => {
    const [isBalanceUpdated, setIsBalanceUpdated] = useState<boolean>(false);

    useEffect(() => {
        if(totalClicked >= goal && isBalanceUpdated === false){
            setBalance(balance + award);
            setIsBalanceUpdated(true);
        }
    }, [totalClicked, goal, balance, award, setBalance, setIsBalanceUpdated, isBalanceUpdated])

    return (
        <div className={totalClicked >= goal ? 'earn__item _done' : 'earn__item'}>
            <div className="earn__item-info">
                <p className='title'>{title}</p>
                <p className='subtitle'>Награда {award}</p>
                {isBalanceUpdated ? null : <p className='progress'>Прогрес {totalClicked} / {goal}</p>}
            </div>
            <div className="earn__item-image">
                <img width="40" height="40" src="https://img.icons8.com/emoji/48/trophy-emoji.png" alt="trophy-emoji"/>
                <p>{totalClicked >= goal ? 'Выполнено' : 'Не выполнено'}</p>
            </div>
        </div>
    )
}

export default EarnItem