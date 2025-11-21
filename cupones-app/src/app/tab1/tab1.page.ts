import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegmentButton, IonSegment, IonLabel, IonSegmentView, IonSegmentContent, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
imports: [
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSegmentView,
    IonSegmentContent, IonContent]
})
export class Tab1Page {
coupons: any;
  constructor() {}
}

