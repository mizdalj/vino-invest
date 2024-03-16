export declare type WineVintage = {
  id: number;
  wine_id: number;
  vintage_year: number;
  harvest_date: string;
  good_year: string;
  time_since_bottling: string;
  created_at: string;
  updated_at: string;
};

export declare type WineList = {
  name: string;
  region: string;
  appellation: string;
  domain: string;
  color: string;
  owner: string;
  area: number;
  grape_variety: string;
  viticulture: string;
  alcohol_content: number;
  acidity_level: number;
  bottle_size: number;
  id: number;
  created_at: string;
  updated_at: string;
};

export declare type Wine = {
  name: string;
  region: string;
  appellation: string;
  domain: string;
  color: string;
  owner: string;
  area: number;
  grape_variety: string;
  viticulture: string;
  alcohol_content: number;
  acidity_level: number;
  bottle_size: number;
  id: number;
  created_at: string;
  updated_at: string;
  vintages: WineVintage[];
};
