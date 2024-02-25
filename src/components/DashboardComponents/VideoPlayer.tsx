const VideoPlayer = () => {

  return (
    <video width="100%" height="240" autoPlay loop playsInline >
      <source src="../../../public/Images/atmVideo.mp4"  />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
