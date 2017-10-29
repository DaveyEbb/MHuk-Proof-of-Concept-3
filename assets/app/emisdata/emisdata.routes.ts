import { Routes } from "@angular/router";

import { LoadComponent } from "./load.component";
import { ViewComponent } from "./view.component";

export const EMISDATA_ROUTES: Routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'load', component: LoadComponent },
    { path: 'view', component: ViewComponent }
];