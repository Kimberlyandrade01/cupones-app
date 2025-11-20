export interface ICoupon {
  idProduct: number;
  img: string;
  name: string;
  category: string;
  discount: number;
  active?: boolean;
}

export class Coupon {
  private idProduct!: number;
  private img!: string;
  private name!: string;
  private category!: string;
  private discount!: number;
  private active!: boolean;
  private _idProduct: any;
  private _name: any;
  private _discount: any;
  _category: any;


  isEqual(coupon: Coupon) {
    return this._idProduct === coupon._idProduct;
  }

  isValidElement() {
    return !!(this._idProduct && this._name && this._discount && this._category);
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
  }
  public getIdProduct(): number {
    return this.idProduct;
  }
  public setIdProduct(value: number) {
    this.idProduct = value;
  }
}

