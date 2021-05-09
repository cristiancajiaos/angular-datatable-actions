import { Actor } from './actor';
import { Studio } from './studio';
import { Title } from './title';

export interface Film {
  title: Title;
  year: number;
  country: string;
  budget: number;
  studio: Studio;
  cast: string[];
  duration: number;
}
