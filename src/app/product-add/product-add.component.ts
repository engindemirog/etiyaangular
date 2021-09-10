import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../category/category';
import { Product } from '../product/product';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup
  categories :Category[]=[]
  constructor(
    private productService:ProductService, 
    private formBuilder:FormBuilder, 
    private toastService:ToastrService, 
    private categoryService : CategoryService) { 

  }

  ngOnInit(): void {
    this.createAddForm();
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

  createAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
        this.toastService.success("Ürün eklendi")
        this.productService.add(this.productAddForm.value).subscribe(data=>{
        })
    }else{
        this.toastService.error("Sayfa geçerli değil")
    }
    
  }

}
