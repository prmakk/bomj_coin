import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EarnList from '../components/EarnList'

interface IEarnPageProps{
    balance: number,
    setBalance: (num :number) => void,
    totalClicked: number,
}

const EarnPage: FC<IEarnPageProps> = ({totalClicked, balance, setBalance}) => {

    return (
        <div className='earn'>
            <div className="earn__nav">
                <Link to="/"><img width="22" height="22" src="https://img.icons8.com/windows/32/ffffff/long-arrow-left.png" alt="long-arrow-left"/>Back</Link>
            </div>
            <EarnList 
                totalClicked={totalClicked}
                balance={balance}
                setBalance={setBalance}
            />
        </div>
    )
}

export default EarnPage