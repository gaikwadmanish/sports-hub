import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SeasonsStore } from '@sports-hub/f1-racing/seasons/data-access';

@Component({
  selector: 'lib-f1-racing-season-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './season-list.component.html',
})
export class SeasonListComponent implements OnInit {
  readonly store = inject(SeasonsStore);
  ngOnInit(): void {
    this.store.loadAll();
  }
}
