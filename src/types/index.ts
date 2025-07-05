export interface ArtPiece {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
    description?: string;
}

export interface Catalog {
    artPieces: ArtPiece[];
}