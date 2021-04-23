import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { pokemonListReducer, pokemonSelectReducer } from './state/pokemons.reducer';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComponentsModule } from './components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlMX } from './services/paginator.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot({pokemons: pokemonListReducer, pokemon: pokemonSelectReducer})
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlMX}],
  bootstrap: [AppComponent]
})
export class AppModule { }
