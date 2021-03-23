import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data: any
  prodList: any = []
  constructor() {

  }

  setData(data: any) {
    return localStorage.setItem('product', JSON.stringify(data))
  }
  getData() {
    this.data = localStorage.getItem('product')
    return this.prodList = JSON.parse(this.data)
  }
}
