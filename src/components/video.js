import React from 'react';


const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe 
        src={`https://www.youtube.com/embed/${embedId}?rel=0`}
        width="100%"
        height="800vh"
        title="YouTube video player"
        frameBorder="0"
        rel="0"
        />
    </div>
)
export default YoutubeEmbed;