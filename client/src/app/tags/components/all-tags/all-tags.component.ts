import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.scss']
})
export class AllTagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('AllTagsComponent init');
  }

}
