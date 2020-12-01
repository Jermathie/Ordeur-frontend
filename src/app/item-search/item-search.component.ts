import {Component, OnInit} from '@angular/core';

import {Observable, Subject} from "rxjs";
import {Item} from "../model/item";
import {ItemsService} from "../items.service";

import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {
  items$: Observable<Item[]> = {} as Observable<any>;
  private searchItem = new Subject<string>();

  constructor(private itemsService: ItemsService) {
  }

  search(term: string): void {
    this.searchItem.next(term.toLowerCase());
  }

  ngOnInit(): void {
    this.items$ = this.searchItem.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.itemsService.searchItem(term))
    )
  }

}
