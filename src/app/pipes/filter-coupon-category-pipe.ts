import { Pipe, PipeTransform } from '@angular/core';
import { Coupon } from 'cupones-app/src/app/coupon.model';

@Pipe({
  name: 'filterCouponCategory',
  standalone: true
})
export class FilterCouponCategoryPipe implements PipeTransform {

  transform(coupons: Coupon[], category: string): Coupon[] {
    if (!coupons) return [];
    return coupons.filter(coupon => coupon.category === category);
  }

}
