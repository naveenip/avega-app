import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AvgHomeComponent } from 'src/app/components/avg-home/avg-home.component';
import { UserCreationFormComponent } from 'src/app/components/user-creation-form/user-creation-form.component';



const route: Route[] = [
  //{},
  {path: "home", component: AvgHomeComponent},
  {path:"admin", component: UserCreationFormComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
