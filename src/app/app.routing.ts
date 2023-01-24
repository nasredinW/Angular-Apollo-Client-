import { RouterModule, Routes } from "@angular/router";
import { Q2Component } from "./q2/q2.component";
import { Q3Component } from "./q3/q3.component";
import { Q4Component } from "./q4/q4.component";

const APP_ROUTING : Routes = [
    
{path: 'Q2', component:Q2Component},
{path: 'Q3', component:Q3Component},
{path :'Q4', component:Q4Component}
];
 export const ROUTING = RouterModule.forRoot(APP_ROUTING);