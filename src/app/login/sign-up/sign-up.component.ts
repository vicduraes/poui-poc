import { Component, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components'

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
    password: string
    confirmPassword: string
    errorPattern: string
    reactiveForm: FormGroup

    public readonly modalPrimaryAction: PoModalAction = {
        action: () => this.reactiveFormModal.close(),
        label: 'Close',
    }

    @ViewChild('reactiveFormData', { static: true })
    reactiveFormModal: PoModalComponent

    constructor(private fb: FormBuilder) {
        this.createReactiveForm()
    }

    createReactiveForm() {
        this.reactiveForm = this.fb.group({
            company: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(10),
                ]),
            ],
            cnpj: ['', Validators.compose([Validators.required])],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        })
    }

    saveForm() {
        this.reactiveFormModal.open()
    }
}
