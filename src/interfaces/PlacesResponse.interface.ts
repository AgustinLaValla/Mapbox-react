export interface PlacesResponse {
  type:        string;
  query:       string[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:            string;
  type:          string;
  place_type:    string[];
  relevance:     number;
  properties:    Properties;
  text_en:       string;
  place_name_en: string;
  text:          string;
  place_name:    string;
  center:        [number, number];
  geometry:      Geometry;
  address:       string;
  context:       Context[];
}

export interface Context {
  id:           string;
  text_en:      string;
  text:         string;
  wikidata?:    string;
  language_en?: Language;
  language?:    Language;
  short_code?:  ShortCode;
}

export enum Language {
  En = "en",
}

export enum ShortCode {
  Ar = "ar",
  ArB = "AR-B",
}

export interface Geometry {
  type:          string;
  coordinates:   [number, number];
  interpolated?: boolean;
  omitted?:      boolean;
}

export interface Properties {
  accuracy:            string;
  "override:postcode": string;
}
