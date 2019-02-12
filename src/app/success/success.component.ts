import { Component } from '@angular/core'; 

@Component({
    selector: 'app-success', 
    templateUrl: './success.component.html', 
    styles: [`
        .success {
            padding: 20px; 
            background-color: palegreen; 
            border: 1px solid green; 
        }
    `]
})

export class SuccessAlert {

}