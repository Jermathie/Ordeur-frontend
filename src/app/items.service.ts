import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import {Item} from '../app/model/item';
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsUrl: string;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpItems: HttpClient) {
    this.itemsUrl = 'http://localhost:9000/items';
  }

  public getAllItems(): Observable<Item[]>{
    return this.httpItems.get<Item[]>(this.itemsUrl);
  }

  public searchItem(term: string): Observable<Item[]> {
    if (!term.trim()){
      return of([])
    }
    return this.httpItems.get<Item[]>(`${this.itemsUrl}/?name=${term}`);
  }

  createItem(item: Item = {} as Item): Observable<any> {
    return this.httpItems.post(this.itemsUrl, item, this.httpOptions);
  }
}
