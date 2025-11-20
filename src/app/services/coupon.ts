import { Injectable } from '@angular/core';
import { Coupon, ICoupon } from 'cupones-app/src/app/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class CouponService {  

  async getCoupons() {
    try {
      const res = await fetch('./assets/coupons.json');
      const couponData: ICoupon[] = await res.json();

      const coupons: Coupon[] = this.processCoupon(couponData);

      // Inicializar active = false
      coupons.forEach(coupon => coupon.active = false);

      return coupons;

    } catch (err) {
      return [];
    }
  }

  processCoupon(couponsData: ICoupon[]): Coupon[] {
    const coupons: Coupon[] = [];

    for (const couponData of couponsData) {
      const coupon = new Coupon(couponData);
      coupons.push(coupon);
    }

    return coupons;
  }
}
