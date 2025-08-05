import { useState } from 'react';
import debounce from '../helpers/debounce';
import './Main.css'
import avatar1 from "../avatars/avatar1.png";
import avatar2 from "../avatars/avatar2.png";
import avatar3 from "../avatars/avatar3.png";

const avatars = [avatar1, avatar2, avatar3];

const Main = () => {

    const [input, setInput] = useState("");

    const [index, setIndex] = useState(0);

    const nextAvatar = () => setIndex((index + 1) % avatars.length);
    const prevAvatar = () => setIndex((index - 1 + avatars.length) % avatars.length);

    console.log(input)

    const handleChange = debounce((e) => {
        setInput(e.target.value);
    }, 300);

    return (
        <div className='main'>
            <div className='poker'>Poker</div>
            <div className="game-container">
                <div className="game-card">
                    <div className="top-row">
                        <input type="text" placeholder="Enter Name" defaultValue="qwe" onChange={handleChange} />
                    </div>

                    <div className="avatar-section">
                        <button className="arrow left" onClick={prevAvatar}>
                            &lt;&lt;
                        </button>
                        <img src={avatars[index]} alt="avatar" className="avatar" />
                        <button className="arrow right" onClick={nextAvatar}>
                            &gt;&gt;
                        </button>
                    </div>

                    <button className="play-btn">Play with bots</button>
                    <button className="private-btn">Play with friends</button>
                </div>
            </div>
        </div>
    )
}

export default Main