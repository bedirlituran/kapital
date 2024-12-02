import React from "react";


const Hero= () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Video Layer */}
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      
      {/* Overlay Content */}
      <div className="video-content space-y-2 z-10">
        <h1 className="font-boz text-6xl">Kapital Telecom</h1>
        <h3 className="font-boz text-3xl">Ölkədə Lider</h3>
      </div>
    </section>
  );
};

export default Hero;
