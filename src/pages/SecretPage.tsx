import { FC, useState } from 'react'
import { Link } from 'react-router-dom';

interface ISecretPageProps{
    balance: number,
    setBalance: (num :number) => void,
}

const SecretPage: FC<ISecretPageProps> = ({balance, setBalance}) => {
    const BONUS_VALUE: number = 1000000;
    const [input, setInput] = useState<string>('');
    const [isBonusCollected, setIsBonusCollected] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        if(input === 'secret_key'){
            setBalance(balance + BONUS_VALUE);
            setIsBonusCollected(true);
        }else{
            setInput('');
        }
    }

    return (
        <div className='secret'>
            <div className="secret__nav">
                <Link to="/"><img width="22" height="22" src="https://img.icons8.com/windows/32/ffffff/long-arrow-left.png" alt="long-arrow-left"/>Back</Link>
            </div>
            <div className="secret__main">
                <input type="text" value={input} onChange={handleChange} placeholder='secret_key' className='key for bonus: secret_key'/>
                <button onClick={handleClick}>
                    Получить подгон
                </button>
                {isBonusCollected ? <p>Бонус начислен!</p> : null}
            </div>
        </div>
    )
}

export default SecretPage