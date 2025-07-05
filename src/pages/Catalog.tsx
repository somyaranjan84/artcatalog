import React, { useEffect, useState } from 'react';
import ArtPiece from '../components/ArtPiece';

const Catalog: React.FC = () => {
    const [artPieces, setArtPieces] = useState([]);

    useEffect(() => {
        const fetchArtPieces = async () => {
            // Replace with your API endpoint or local data source
            const response = await fetch('/api/art-pieces');
            const data = await response.json();
            setArtPieces(data);
        };

        fetchArtPieces();
    }, []);

    return (
        <div className="catalog">
            <h1>Art Catalog</h1>
            <div className="art-pieces">
                {artPieces.map((piece) => (
                    <ArtPiece key={piece.id} title={piece.title} artist={piece.artist} image={piece.image} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;