import { useRef } from "react";
import phonemes from "./phonemes";
import "./SoundBoard.css";

export default function SoundBoard() {
    const playerRef = useRef<HTMLAudioElement>(null);

    type PhonemeList = keyof typeof phonemes;

    function handleClick(phoneme: PhonemeList) {
        if (playerRef.current) {
            playerRef.current.src = phonemes[phoneme];
        }
    }


    return (
        <div className="SoundBoard">
            <audio ref={playerRef} autoPlay />
            {
                Object.keys(phonemes).map(ph => (
                    <button key={ph} className="SoundBoard-Card" onClick={() => handleClick(ph as PhonemeList)}>
                        {ph}
                    </button>
                ))
            }
        </div>
    );
}