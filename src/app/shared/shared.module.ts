import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PoModule, PoTemplatesModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, PoModule, PoTemplatesModule]
})
export class SharedModule { }
