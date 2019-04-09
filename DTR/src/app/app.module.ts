import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignerComponent } from './designer/designer.component';
import { HttpClientModule }    from '@angular/common/http';
import { DesignerDescriptionComponent } from './designer-description/designer-description.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    DesignerDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
