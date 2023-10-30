import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WettscheineJsonReader implements OnDestroy {

  private readonly foo = new Subscription();

  public myData = this.http.get('https://raw.githubusercontent.com/AVittali/TotoData/main/Wettscheine.json');

  wettscheine: any[] = []; // Hier speichern wir die JSON-Daten

  constructor(private readonly http: HttpClient) {
    /*
  this.foo.add(
    this.http.get('https://raw.githubusercontent.com/AVittali/TotoData/main/Wettscheine.json')
      .subscribe(r => {
        this.wettscheine = r as any[];
        console.log({ "Http-Zugriff": r });
      })
      */
    console.log("Konstruktor WettscheineJsonReader")
    this.foo.add(
      this.http.get<any[]>('https://raw.githubusercontent.com/AVittali/TotoData/main/Wettscheine.json')
        .subscribe((data) => {
          this.wettscheine = data;
          console.log("Http-Zugriff abgeschlossen:", data);
        })
    );

    console.log({ "WettscheineJsonReader": this.wettscheine })

  }

  getWettscheine(): any {

    console.log("getWettscheine 3");
    return this.wettscheine;

  }

  public ngOnDestroy(): void {
    this.foo.unsubscribe();
  }

}