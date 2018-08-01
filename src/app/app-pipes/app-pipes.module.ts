import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPipePipe } from './pipes/email-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailPipePipe],
  exports: [EmailPipePipe]
})
export class AppPipesModule { }
