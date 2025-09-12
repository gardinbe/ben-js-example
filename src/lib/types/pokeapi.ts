export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  moves: Move[];
};

export type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type Sprites = {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: {
    [key: string]: {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

export type Type = {
  slot: number;
  type: NamedAPIResource;
};

export type Move = {
  move: NamedAPIResource;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
  }[];
};
