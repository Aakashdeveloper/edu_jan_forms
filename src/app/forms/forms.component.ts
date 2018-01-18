import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
    selector:'ang-forms',
    templateUrl:'./forms.component.html'
})

export class FormComponent{
    languages=["Nodejs","AngularJS","ReactJS"]
    model = new Employee("Edureka","Angular",0,true,"male","Nodejs")
    hasCodeError=false

    firstToUpper(value:string){
        if(value.length>0)
            this.model.firstname = value.charAt(0).toUpperCase() + value.slice(1)
        else
            this.model.firstname=value
    }
    validateLang(event){
        if(this.model.codelang == "default")
            this.hasCodeError=true
        else
            this.hasCodeError=false
    }
}

/*
ng-untouched  ng-pristine   ng-valid
ng-touched    ng-dirty      ng-invalid
(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)

*/