import {CanDeactivate} from '@angular/router';
import {ArticleComponent} from '../article/article.component';
export class UnsaveGuard implements CanDeactivate<ArticleComponent>{
    canDeactivate(component: ArticleComponent) {
       return window.confirm("你还没有保存");
    }

}
