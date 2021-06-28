import { Feature } from '../shared/feature.model';

export class Videogame {
  public name: string;
  public description: string;
  public imagePath: string;
  public features: Feature[];

  constructor(name :string, desc: string, imagePath: string, features: Feature[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.features = features;
  }
}
