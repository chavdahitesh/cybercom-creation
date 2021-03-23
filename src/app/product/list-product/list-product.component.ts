import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  prodList: any = []
  constructor(private cs: CommonService) {

  }

  ngOnInit(): void {
    this.prodList = this.cs.getData()
  }
}
