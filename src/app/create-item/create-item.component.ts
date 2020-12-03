import {Component, OnInit} from '@angular/core';
import {Item} from "../model/item";
import {ItemsService} from "../items.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  item: Item = {} as Item;

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit(): void {
  }

  onFormSubmit(itemForm: NgForm) {
    console.log(itemForm);
    this.itemsService.createItem(this.item);
  }

  resetItemForm(itemForm: NgForm) {
    itemForm.resetForm();
  }

}
