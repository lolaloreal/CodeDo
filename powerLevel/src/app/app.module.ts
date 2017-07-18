import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HumanComponent } from './levels/human/human.component';
import { SaiyanComponent } from './levels/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './levels/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './levels/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './levels/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './levels/super-saiyan-four/super-saiyan-four.component';
import { LevelsComponent } from './levels/levels.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent,
    LevelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
