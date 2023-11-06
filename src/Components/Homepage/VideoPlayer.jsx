const VideoPlayer = () => {
    return (
      <div>
        <h2>Video Player</h2>
        <video width="640" height="360" controls>
          <source src="https://streamable.com/e/6p4bf0?autoplay=1" type="mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;