import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChampionsComponent } from './champions/champions.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChampionsComponent, ItemsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
