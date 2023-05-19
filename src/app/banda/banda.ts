export class Banda {

  id:number;
  name:string;
  foundation_year:number;
  country:string;
  genre:string;
  description:string;
  image:string;

  constructor(
    id:number,
    name:string,
    foundationyear:number,
    country:string,
    genre:string,
    descripcion:string,
    imagen:string
  ){
    this.id=id;
    this.name=name;
    this.country=country;
    this.foundation_year=foundationyear;
    this.genre=genre;
    this.description=descripcion;
    this.image=imagen;
  }
}
