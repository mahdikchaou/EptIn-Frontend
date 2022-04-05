import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermulti',
  pure: false
})
export class FiltermultiPipe implements PipeTransform {
  transform(myobjects: Array<object>, args?: Array<object>): any {
    if (args && Array.isArray(myobjects)) {
      // copy all objects of original array into new array of objects
      var returnobjects = myobjects;
      // args are the compare oprators provided in the *ngFor directive
      args.forEach(function (filterobj: any) {
        let filterkey = Object.keys(filterobj)[0];
        let filtervalue = filterobj[filterkey];
        if(filterkey === "field") {
          myobjects.forEach(function (objectToFilter: any) {
            if ((objectToFilter[filterkey].filter( (o: any) => o.name === filtervalue).length == 0) && filtervalue != "") {
              // object didn't match a filter value so remove it from array via filter
              returnobjects = returnobjects.filter(obj => obj !== objectToFilter);
            }
          });
        }
        else {
          myobjects.forEach(function (objectToFilter: any) {
            if (objectToFilter[filterkey] != filtervalue && filtervalue != "") {
              // object didn't match a filter value so remove it from array via filter
              returnobjects = returnobjects.filter(obj => obj !== objectToFilter);
            }
          });
        }
      });
      // return new object to *ngFor directive
      return returnobjects;
    }
  }
}
// usage examples
// <div *ngFor='let item of items | filtermulti: [{title:"mr"},{last:"jones"}]' >
// <div *ngFor='let item of items | filtermulti: [{active:"true"},{event:"NYFair2018"}]' >
