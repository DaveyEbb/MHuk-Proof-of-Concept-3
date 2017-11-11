import { Routes } from "@angular/router";

import { LoadComponent } from "./load.component";
import { ViewComponent } from "./view.component";
import { ChartComponent } from "./chart.component";
import { RiskComponent } from "./risk.component";

export const EMISDATA_ROUTES: Routes = [
    { path: '', redirectTo: 'load', pathMatch: 'full' },
    { path: 'load', component: LoadComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'risk', component: RiskComponent },
    { path: 'view', component: ViewComponent }
];