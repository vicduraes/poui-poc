import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [],
  imports: [CommonModule, PoModule, PoTemplatesModule],
  exports: [CommonModule, PoModule, PoTemplatesModule]
})
export class SharedModule { }
