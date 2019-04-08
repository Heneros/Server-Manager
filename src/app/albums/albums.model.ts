import { Music } from '../shared/music.model';


export class Albums {
  public name: string;
  public description: string;
  public imagePath: string;
  public songs: Music[];

  constructor(name: string, desc: string, imagePath: string, songs: Music[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.songs = songs;
  }
}
