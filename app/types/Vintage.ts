export declare type Vintage = {
  id: number;
  harvest_date: string;
  good_year: string;
  updated_at: string;
  wine_id: number;
  vintage_year: number;
  time_since_bottling: string;
  created_at: string;
  offers: VintageOffer[];
  forecasts: any[];
  wine: {
    region: string;
    name: string;
    domain: string;
    owner: string;
    grape_variety: string;
    alcohol_content: number;
    bottle_size: number;
    updated_at: string;
    id: number;
    appellation: string;
    color: string;
    area: number;
    viticulture: string;
    acidity_level: number;
    created_at: string;
  };
  prices: VintagePrice[];
};

declare type VintagePrice = {
  id: number;
  vintage_id: number;
  updated_at: string;
  date_recorded: number;
  price: number;
  created_at: string;
};

export declare type VintageOffer = {
  id: number;
  vintage_id: number;
  accepted: number;
  created_at: string;
  updated_at: string;
  offer_price: number;
  offer_date: string;
  user_id: number;
  active: number;

}
