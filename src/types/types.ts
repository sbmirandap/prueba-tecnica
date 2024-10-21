import CharacterDetail from "../components/CharacterDetail";


export interface FuturamaCharacter {
    id: number;
    name: {
      first: string;
      middle?: string;
      last: string;
    };
    images: {
      headShot: string;
      main: string;
    };
    age: number;
    gender: string;
    species: string;
    homePlanet: string;
    occupation: string;
    sayings: string[];
  }

export interface CharacterCardProps {
    character: FuturamaCharacter;
    onClick: (character: FuturamaCharacter) => void;
  }

export interface SearchAndSortProps {
    characters: FuturamaCharacter[];
    onSearch: (filteredCharacters: FuturamaCharacter[]) => void;
  }

export interface CharacterDetailProps {
    character: FuturamaCharacter;
    onClose: () => void;
  }