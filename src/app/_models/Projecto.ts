import { ServerTestingModule } from "@angular/platform-server/testing";
import { Tag } from "./Tags";

export interface Projecto{
    id:number;
    nombre: string;
    sumario : string;
    descripcion: string;
    linkProyecto: string;
    imagen:string[];
    tags: Tag[];
}