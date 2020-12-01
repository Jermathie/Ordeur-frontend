import { Component, OnInit } from '@angular/core';
import {Item} from "../model/item";
import {ItemsService} from "../items.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  items: Item[] = {} as Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

  }

}
