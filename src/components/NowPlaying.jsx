import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SpotifyContext } from './SpotifyProvider'; // Pastikan SpotifyContext diimpor

const NowPlaying = (props) => {
  const { accessToken } = useContext(SpotifyContext);
  const [track, setTrack] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const fetchNowPlaying = async () => {
    if (!accessToken) return;

    try {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data && response.data.is_playing) {
        setTrack(response.data.item);
        setProgress(response.data.progress_ms);
        setDuration(response.data.item.duration_ms);
      }
    } catch (error) {
      console.error('Error fetching currently playing track:', error);
    }
  };

  useEffect(() => {
    fetchNowPlaying(); // Call once on mount

    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 1000); // Update every 1 seconds

    return () => clearInterval(interval);
  }, [accessToken]);

  // Progress Bar Calculation
  const calculateProgress = () => {
    if (!track || duration === 0) return 0;
    return (progress / duration) * 100;
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <div className="now-playing-container">
      {track ? (
        <div className="now-playing">
          <h4>Listening to Spotify <span className="spotify-logo">{props.icon}</span></h4>
          <div className="track-info">
            <img src={track.album.images[0].url} alt={track.name} className="album-art" />
            <div className="track-details">
              <h3>{track.name}</h3>
              <p>by {track.artists.map(artist => artist.name).join(', ')}</p>
              <p>on {track.album.name}</p>
            </div>
          </div>
          {/* Progress Bar and Time Info */}
          <div className="time-progress-container">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${calculateProgress()}%` }}></div>
            </div>
            <div className="time-info">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='noTrack'>
                  <p>Spotify {props.icon}</p>
                  <p>No track is currently playing.</p>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
