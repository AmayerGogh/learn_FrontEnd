import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import {Article} from "../article/article.component"

import {Injectable} from "@angular/core"


@Injectable()
export class ArticleResolve implements Resolve<Article>{
    constructor(private router:Router){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        let aid:number=route.params["id"];
        if (aid==1){
            return new Article(1,"ip23");
        }else{
            this.router.navigate(['/']);
            return undefined;
        }
    }

}