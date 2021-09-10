import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], filterText: string): Product[] {

    filterText = filterText?filterText.toLocaleLowerCase():""

    return filterText?products.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):products;
  }

}
