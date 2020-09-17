import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginTemplateComponent } from './login-template/login-template.component'
import { SignUpComponent } from './sign-up/sign-up.component'

const routes: Routes = [
    { path: '', component: LoginTemplateComponent },
    { path: 'signup', component: SignUpComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule {}
