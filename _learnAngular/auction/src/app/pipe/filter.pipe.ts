import { Pipe, PipeTransform } from '@angular/core';
//管道
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //过滤目标   过滤条件
  transform(list: any[], filterField: string,keyword:string): any {
    if(!filterField ||!keyword){
      return list;
    }
    return list.filter(item=>{
       let fiedlValue = item[filterField]
       return fiedlValue.indexOf(keyword) >=0;
    })
  }

}
