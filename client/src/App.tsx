import Main from "./components/Main";
import Footer from "./components/Footer";
import rainSound from "./assets/rainy.mp3";
import playButton from "./assets/play.png";
import { useRef, useState } from "react";

function App() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audioPlay, setAudioPlay] = useState(false);

    const playAudio = () => {
        setAudioPlay(true);
        audioRef.current?.play();
    };

    const pauseAudio = () => {
        setAudioPlay(false);
        audioRef.current?.pause();
    };

    return (
        <div className="App">
            <header>
                Bulletin
                <img
                    className={audioPlay ? "active" : "inactive"}
                    src={playButton}
                    alt=""
                    onClick={() =>
                        audioRef.current?.paused ? playAudio() : pauseAudio()
                    }
                />
            </header>
            <Main />
            <audio ref={audioRef} loop>
                <source src={rainSound} />
            </audio>
            <Footer />
        </div>
    );
}

export default App;
