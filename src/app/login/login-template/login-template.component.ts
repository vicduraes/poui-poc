import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Subscription } from 'rxjs'

import { PoI18nService } from '@po-ui/ng-components'
import {
    PoModalPasswordRecoveryType,
    PoPageLoginLiterals,
    PoPageLoginRecovery,
} from '@po-ui/ng-templates'
@Component({
    selector: 'app-login-template',
    templateUrl: './login-template.component.html',
})
export class LoginTemplateComponent implements OnInit {
    customLiterals: PoPageLoginLiterals = {
        welcome: '',
        registerUrl: 'Cadastre-se',
    }
    literalsI18n: PoPageLoginLiterals
    loading: boolean = false
    loginErrors = []
    passwordErrors = []
    passwordRecovery: PoPageLoginRecovery = {
        url: 'https://thf.totvs.com.br/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'suporte@teste.com.br',
    }
    showPageBlocked: boolean = false

    private i18nSubscription: Subscription

    constructor(private poI18nService: PoI18nService, private router: Router) {}

    ngOnDestroy() {
        this.i18nSubscription.unsubscribe()
    }

    ngOnInit() {
        this.i18nSubscription = this.poI18nService
            .getLiterals()
            .subscribe((literals) => {
                this.literalsI18n = literals
            })
    }

    checkLogin(formData) {
        this.loading = true

        if (formData.login === 'teste' && formData.password === '2020') {
            this.passwordErrors = []
            this.loginErrors = []

            setTimeout(() => {
                this.router.navigateByUrl('/dashboard')
            }, 1000)
        } else {
            this.loading = false
            this.passwordErrors = [
                'Senha e/ou usuário inválido, verifique e tente novamente.',
            ]
            this.loginErrors = [
                'Senha e/ou usuário inválido, verifique e tente novamente.',
            ]
        }
    }

    passwordChange() {
        if (this.passwordErrors.length) {
            this.passwordErrors = []
        }
    }

    loginChange() {
        if (this.loginErrors.length) {
            this.loginErrors = []
        }
    }
}
