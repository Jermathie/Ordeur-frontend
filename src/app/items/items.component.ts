import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../items.service";
import {Item} from "../model/item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];


  constructor(private itemService: ItemsService) {
  }


  ngOnInit() {
    this.getAllItems();
  }

  private getAllItems(): void {
    this.itemService.getAllItems()
      .subscribe(result => {
        console.log(result);
        this.items = result;
      })
  }


}
