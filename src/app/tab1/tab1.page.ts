import { Component, inject } from '@angular/core';
import { CouponService } from '../services/coupon';
import { Coupon } from 'cupones-app/src/app/coupon.model';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonLabel, IonSegmentButton, IonSegment, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonSegmentView, IonSegmentContent],
})
export class Tab1Page {
    private couponService: CouponService = inject(CouponService);
    coupons: Coupon[] = [];

    async ionViewWillEntender() {
      this.coupons = await this.couponService.getCoupons();
      console.log(this.coupons);
    
    }
  }


