export type Ability = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

export type Move = {
  move: NamedAPIResource;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
  }[];
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  forms: NamedAPIResource[];
  height: number;
  id: number;
  is_default: boolean;
  moves: Move[];
  name: string;
  order: number;
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type Sprites = {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
  other?: {
    [key: string]: {
      front_default: null | string;
      front_shiny: null | string;
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
