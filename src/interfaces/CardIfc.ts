export default interface CardProps {
    imgSrc: string,
    imgAlt: string,
    title: string,
    description: string
}

export interface Character {
    id: number,
    name: { first: string, middle: string, last: string},
    images: { main: string }
    gender: string,
    species: string,
    homePlanet: string
}