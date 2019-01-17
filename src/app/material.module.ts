import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material';

const modules = [
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}