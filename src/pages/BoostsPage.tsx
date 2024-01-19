import { FC } from 'react'
import BoostsList from '../components/BoostsList'
import { Link } from 'react-router-dom'

interface IBoostsPageProps{
    clickValue: number,
    setClickValue: React.Dispatch<React.SetStateAction<number>>,
    balance: number,
    setBalance: (num :number) => void,
}

const BoostsPage: FC<IBoostsPageProps> = ({setClickValue, clickValue, balance, setBalance}) => {
    return (
        <div className='boosts'>
            <div className="boosts__nav">
                <Link to="/"><img width="22" height="22" src="https://img.icons8.com/windows/32/ffffff/long-arrow-left.png" alt="long-arrow-left"/>Back</Link>
            </div>
            <BoostsList setClickValue={setClickValue} clickValue={clickValue} balance={balance} setBalance={setBalance} />
        </div>
    )
}

export default BoostsPage