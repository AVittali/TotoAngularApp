import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { WettscheineJsonReader } from '../api/wettscheine-json-reader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'list-wettscheine',
  templateUrl: 'list-wettscheine.html',
  styleUrls: ['list-wettscheine.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    CommonModule
  ],
})
export class ListWettscheine implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  public myData = this.http.get<any[]>('https://raw.githubusercontent.com/AVittali/TotoData/main/Wettscheine.json');

  displayedColumns: string[] = ['spalte1', 'spalte2'];

  wettscheine: any[] = [];

  constructor(private wettscheineJsonReader: WettscheineJsonReader, private readonly http: HttpClient) {
    this.accordion = new MatAccordion();
    this.wettscheineJsonReader = wettscheineJsonReader;
  }

  ngOnInit(): void {
    this.wettscheine = this.wettscheineJsonReader.getWettscheine();
    console.log({ "ListWettscheine": this.wettscheine })
  }

  getStatusStyle(status: string): any {
    if (status === 'GEWONNEN') {
      return { color: 'green' };
    } else if (status === 'VERLOREN') {
      return { color: 'red' };
    } else {
      return {}; // Standard-Stil oder leeres Objekt für Standardfarbe
    }
  }

}
