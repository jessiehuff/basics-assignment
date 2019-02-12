import { Component } from '@angular/core'; 

@Component({
    selector: 'app-warning', 
    templateUrl: './warning.component.html',
    styles: [`
        .warning {
            padding: 20px; 
            background-color: mistyrose; 
            border: 1px solid red;  
        }
    `]
})

export class WarningAlert {

}