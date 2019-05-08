import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConceptComponent } from './concept/concept.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule, } from '@angular/router';
import { MiseEnPlaceComponent } from './mise-en-place/mise-en-place.component';
import { HeaderComponent } from './header/header.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemoignagesComponent } from './temoignages/temoignages.component';

const appRoutes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'concept', component: ConceptComponent},
  {path: 'miseEnPlace', component: MiseEnPlaceComponent},
  {path: 'tarifs', component: TarifsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'temoignages', component: TemoignagesComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full' },
  {path: '**', redirectTo: 'books' }
];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConceptComponent,
    ContactComponent,
    MiseEnPlaceComponent,
    HeaderComponent,
    TemoignagesComponent,
    TarifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
