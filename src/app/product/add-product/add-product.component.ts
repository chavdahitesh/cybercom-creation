import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: any
  submitted = false;
  isVisible = false
  formValue: any = []
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private cs: CommonService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      category: ['', Validators.required],
      desc: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true
    console.log("product", this.productForm.value);
    if (this.submitted == true) {
      this.formValue.push(this.productForm.value)
      this.cs.setData(this.formValue)
      this.toastr.success('Product added')
      this.resetForm()
    }

  }
  resetForm(){
    this.productForm.reset()
  }

}
