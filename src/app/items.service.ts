import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import {Item} from '../app/model/item';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsUrl: string;

  constructor(private httpItems: HttpClient) {
    this.itemsUrl = 'http://localhost:9000/items';
  }

  public getAllItems(): Observable<Item[]>{
    return this.httpItems.get<Item[]>(this.itemsUrl);
  }
}
