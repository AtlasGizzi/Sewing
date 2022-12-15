import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Fabric } from './Data/fabric';
import { Pattern } from './Data/pattern';
import { materialize, Observable, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showFabricTable = true
  private showPatternTable = true
  private id: number | undefined
  private http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }
  getShowFabricTable (): boolean {
    return this.showFabricTable
  }
  getShowPatternTable (): boolean {
    return this.showPatternTable
  }
  
  Fabric (id: number, yardsFab: number, material: string, image: File,  location: string) 
  {
    const fabric = {
      id: Math.random(),
      yardsFab:yardsFab,
      material: material,
      image: image,
      location: location

    }
    //call post request here
    this.addFabric(fabric)
  }
  //create post request here
  addFabric (fabric:Fabric){
    this.http.post<Fabric>("http://localhost:8080/fabric", fabric)
    .pipe(take(1))
    .subscribe({next:(addedFabric)=>{
      console.log(addedFabric)
  
    },
    error:err=>{console.error(err)}
  })
  }


  Pattern (type:string, yardsPat: number) 
  {
    const pattern = {
      type:type,
      yardsPat:yardsPat,

    }
    //call post request here
    this.addPattern(pattern)
  }
  //create post request here
  addPattern (pattern:Pattern){
    this.http.post<Pattern>("http://localhost:8080/pattern", pattern)
    .pipe(take(1))
    .subscribe({next:(pattern)=>{
      
    }})
  }
}
