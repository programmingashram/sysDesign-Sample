import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonExampleComponent } from './button-example/button-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { HomeComponent } from './home/home.component';
import { TabExampleComponent } from './tab-example/tab-example.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { SidebarExampleComponent } from './sidebar-example/sidebar-example.component';
import { BadgeExampleComponent } from './badge-example/badge-example.component';
import { AlertExampleComponent } from './alert-example/alert-example.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideExampleComponent } from './slide-example/slide-example.component';
import { sysDesignModule } from 'sysdesign2023';
//  ng run sys-design:storybook
//  ng run sys-design:build-storybook

@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    HeaderExampleComponent,
    CardExampleComponent,
    HomeComponent,
    TabExampleComponent,
    AccordionExampleComponent,
    SidebarExampleComponent,
    BadgeExampleComponent,
    AlertExampleComponent,
    DialogExampleComponent,
    TreeExampleComponent,
    FormExampleComponent,
    SlideExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sysDesignModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
