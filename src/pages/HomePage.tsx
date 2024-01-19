import { FC, useEffect, useState } from 'react'
import coinImage from '../assets/coin.webp'
import { Link } from 'react-router-dom'
import CanvasClick from '../components/CanvasClick';

interface IHomeProps{
    balance: number,
    setBalance: (num :number) => void,
    clickValue: number,
    totalClicked: number,
    setTotalClicked: (num: number) => void,
}

const HomePage: FC<IHomeProps> = ({balance, setBalance, clickValue, totalClicked, setTotalClicked}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isCanvasShowed, setIsCanvasShowed] = useState<boolean>(false);
    const [isImageClicked, setIsImageClicked] = useState<boolean>(false);

    const handleImageClick = () => {
        setIsImageClicked(true);
        setIsCanvasShowed(true);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        setTimeout(() => {
            setIsImageClicked(false)
        }, 50)
    }, [isImageClicked])

    useEffect(() => {
        setTimeout(() => {
            setIsCanvasShowed(false)
        }, 50)
    }, [isCanvasShowed])

    return (
        <div className='home'>
            <div className="home__title">
                <h1>БОМЖ КОИН</h1>
            </div>
            <div className="home__balance">
                <img src={coinImage} alt="coin" />
                <p>{balance}</p>
            </div>
            <div 
                className={isImageClicked ? "home__coin clicked" : "home__coin"} 
                onClick={(e) => {
                    handleImageClick()
                    setBalance(balance + clickValue)
                    setTotalClicked(totalClicked + clickValue)
                    handleMouseMove(e)
                }}
            >
                <img src={coinImage} alt="coin" />
            </div>

            {/* canvas for click value */}
            {position.x && position.y && isCanvasShowed ? <CanvasClick x={position.x} y={position.y} click={clickValue} /> : null}

            <div className="home__nav">
                <Link to='/earn'>
                    <img width="40" height="40" src="https://img.icons8.com/officel/40/cheap-2.png" alt="cheap-2"/>
                    <p>Подгоны</p>
                </Link>
                <Link to='/boosts'>
                    <img width="40" height="40" src="https://img.icons8.com/external-goofy-color-kerismaker/96/external-Vodka-beverage-goofy-color-kerismaker.png" alt="external-Vodka-beverage-goofy-color-kerismaker"/>
                    <p>Киоск</p>
                </Link>
            </div>
            <div className="home__footer">
                <p>Накалякал <a href="https:t.me/prmakk" target='_blank' rel="noreferrer">prmakk</a></p>
            </div>
        </div>
    )
}

export default HomePage