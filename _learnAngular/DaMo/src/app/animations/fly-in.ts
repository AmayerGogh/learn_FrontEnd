import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

export const flyIn =trigger('flyIn',[
    //星号（*）表示“不可见状态”，void表示任意状态。这是两种内置的状态，(*=>void)表示是进场动画，而(void=>*)表示离场动画
    transition('void => *',[
        animate(3000,keyframes([
            style({opacity:0,transform:'translateX(-100%)',offset:0}),
            style({opacity:1,transform:'translateX(25px)',offset:0.3}),
            style({opacity:1,transform:'translateX(0)', offset:1})
        ]))
    ]),
    transition('* => void',[
        animate(300,keyframes([
            style({opacity:1,transform:'translateX(0)',offset:0}),
            style({opacity:1,transform:'translateX(-25px)',offset:0.7}),
            style({opacity:0,transform:'translateX(100%)',offset:1.0}),
        ]))
    ])
])