export interface cardData {
    id: number
    name: string
    released: string
    rating: number
    background_image: string | URL
}

export type category = 'shooter' | 'action' | 'indie' | 'adventure' | 'rpg' | 'strategy' | 'shooter' |'casual' | 'sim' | 'puzzle' | 'arcade' | 'platformer' | 'racing' | 'mmo' | 'sports' | 'fighting' | 'family' | 'board' | 'educational' | 'card'