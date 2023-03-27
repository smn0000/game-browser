export interface cardData {
    id: number
    name: string
    released: string
    rating: number
    background_image: string | URL
    genres: [{id:number, name:string}]
    metacritic: number
    platforms: [{platform:{id:number, name: string}}]
    stores:[{store:{id:number, name:string}}]
}

export type category = 'shooter' | 'action' | 'indie' | 'adventure' | 'rpg' | 'strategy' | 'shooter' |'casual' | 'sim' | 'puzzle' | 'arcade' | 'platformer' | 'racing' | 'mmo' | 'sports' | 'fighting' | 'family' | 'board' | 'educational' | 'card'