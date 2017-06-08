import {Component} from 'angular2/core';

@Component({
    selector: 'my-title',
    template: '<h6>{{title}}</h6>'
})
export class MyTitle {

  public title : String = 'Tic Tac Toe!!!';

}
