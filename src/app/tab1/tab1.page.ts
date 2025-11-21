import { Component, inject } from '@angular/core';
import { CouponService } from '../services/coupon';
import { Coupon } from 'cupones-app/src/app/coupon.model';

import {
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSegmentView,
  IonSegmentContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/angular/standalone';

import { FilterCouponCategoryPipe } from '../pipes/filter-coupon-category-pipe';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonSegmentView,
    IonSegmentContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    FilterCouponCategoryPipe
]
})
export class Tab1Page {

  coupons: Coupon[] = [];
  private couponService = inject(CouponService);

  async ionViewWillEnter() {
    this.coupons = await this.couponService.getCoupons();
    console.log(this.coupons);
  }
}
