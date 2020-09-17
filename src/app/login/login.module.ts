import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { PoModule, PoI18nConfig, PoI18nModule } from '@po-ui/ng-components'
import { LoginRoutingModule } from './login-routing.module'
import { SharedModule } from '../shared/shared.module'
import { LoginTemplateComponent } from './login-template/login-template.component'
import { SignUpComponent } from './sign-up/sign-up.component'

const humanResourcesPtLiterals = {
    loginErrorPattern: 'ID inválido',
    loginPlaceholder: 'Insira seu ID',
    passwordErrorPattern: 'Senha incorreta',
    passwordPlaceholder: 'Insira sua senha',
    submitLabel: 'Acesse a sua conta',
    forgotPassword: 'Esqueceu seu ID ou sua senha?',
    highlightInfo: 'Para nós o futuro é agora',
}

const poI18nConfig: PoI18nConfig = {
    contexts: {
        general: {
            pt: humanResourcesPtLiterals,
        },
    },
    default: {
        context: 'general',
        cache: true,
    },
}

@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        LoginRoutingModule,
        PoModule,
        PoI18nModule.config(poI18nConfig),
    ],
    declarations: [LoginTemplateComponent, SignUpComponent],
    exports: [],
    providers: [],
})
export class LoginModule {}
