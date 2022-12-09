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
  
  Fabric (id: number, yardsFab: number, material: string, color: string,  location: string) 
  {
    const fabric = {
      id: Math.random(),
      yardsFab:yardsFab,
      material: material,
      color:color,
      location: location

    }
    //call post request here
    this.addFabric(fabric)
  }
  //create post request here
  addFabric (fabric:Fabric){
    this.http.post<Fabric>("http://localhost:3000/budgets", fabric)
    .pipe(take(1))
    .subscribe({next:(fabric)=>{
      
    }})
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
    this.http.post<Pattern>("http://localhost:3000/budgets", pattern)
    .pipe(take(1))
    .subscribe({next:(pattern)=>{
      
    }})
  }
}
