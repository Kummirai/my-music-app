import "./audioPlayer.css";
import ProgressCircle from "./ProgressCircle";
import PropTypes from "prop-types";
import WaveAnimation from "./WaveAnimation";
import { useEffect, useRef, useState } from "react";
import Controls from "./controls";

function AudioPlayer({
  currentTrack,
  currentTrackIndex,
  setCurrentTrackIndex,
  total,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  let audioSrc = total[currentTrackIndex]?.track?.preview_url;
  const audioRef = useRef(
    new Audio(total[currentTrackIndex]?.track?.preview_url)
  );

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;
  // console.log(duration);
  // console.log(trackProgress);
  
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentTrackIndex < total.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const handlePrev = () => {
    if (currentTrackIndex - 1 < 0) {
      setCurrentTrackIndex(total.length - 1);
    } else {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  return (
    <div className="player-body">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={currentTrack?.album?.images[0]?.url}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#fbfbfb"
        />
      </div>
      <div className="player-right-body">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom">
          <div className="song-duration">
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={true} />
            <p className="duration">00:31</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}

//props validation
AudioPlayer.propTypes = {
  currentTrack: PropTypes.object,
  isPlaying: PropTypes.bool,
  setIsPlaying: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  total: PropTypes.number,
  currentTrackIndex: PropTypes.number,
  setCurrentTrackIndex: PropTypes.func,
};

export default AudioPlayer;
