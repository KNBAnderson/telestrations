import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { MatSliderModule } from '@angular/material/slider'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatDividerModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatDividerModule,
    MatTabsModule
  ],
})
export class MaterialModule { }