import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Navbar } from './components/shared/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Heroes } from './components/heroes/heroes';
import { Heroe } from './components/heroe/heroe';

// Rutas

import { AppRoutingModule } from './app-routing-module';

// Servicios

import { HeroesService } from './services/heroes-service';
import { Busqeda } from './components/busqeda/busqeda';
import { HeroeTarjeta } from './components/heroe-tarjeta/heroe-tarjeta';

@NgModule({
  declarations: [App, Navbar, Home, About, Heroes, Heroe, Busqeda, HeroeTarjeta],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), HeroesService],
  bootstrap: [App],
})
export class AppModule {}
