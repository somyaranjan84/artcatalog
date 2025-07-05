import React from 'react';

interface ArtPieceProps {
    title: string;
    artist: string;
    imageUrl: string;
}

const ArtPiece: React.FC<ArtPieceProps> = ({ title, artist, imageUrl }) => {
    return (
        <div className="art-piece">
            <img src={imageUrl} alt={title} className="art-image" />
            <h2 className="art-title">{title}</h2>
            <p className="art-artist">{artist}</p>
        </div>
    );
};

export default ArtPiece;