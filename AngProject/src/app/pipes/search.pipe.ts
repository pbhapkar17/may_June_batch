import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchedValue: any): any {
    console.log('data', data);
    console.log('searchedValue', searchedValue); //Poo

    if(!searchedValue){
      return data;
    }

    let valueToBeSearch = searchedValue.toLowerCase();//poo

      return data.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(valueToBeSearch)
    })
  }

}
//{ "name": 'tushar', "age": 20, "city": "pune" }, //False
//  { "name": 'pooja', "age": 23, "city": "pune" }, //True
