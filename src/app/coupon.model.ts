export interface ICoupon {
  idProduct: number;
  img: string;
  name: string;
  category: string;
  discount: number;
  active?: boolean;
}

export class Coupon {
  idProduct!: number;
  img!: string;
  name!: string;
  category!: string;
  discount!: number;
  active: boolean = false;

  // removí campos privados que no se usaban o los reemplacé usando las propiedades públicas

  isEqual(coupon: Coupon) {
    return this.idProduct === coupon.idProduct;
  }

  isValidElement() {
    // discount puede ser 0, así que comprobamos null/undefined explícitamente
    return !!(this.idProduct && this.name && this.category) && this.discount !== undefined && this.discount !== null;
  }

  toCouponData() {
    return {
      idProduct: this.idProduct,
      img: this.img,
      name: this.name,
      category: this.category,
      discount: this.discount,
      active: this.active
    } as ICoupon;
  }

  constructor(data: ICoupon) {
    Object.assign(this, data);
    this.active = data.active ?? false;
  }

  public getIdProduct(): number {
    return this.idProduct;
  }

  public setIdProduct(value: number) {
    this.idProduct = value;
  }
}
