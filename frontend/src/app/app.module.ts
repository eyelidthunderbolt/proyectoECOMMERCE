import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { CentralComponent } from './components/central/central.component';
import { LatIzqComponent } from './components/lat-izq/lat-izq.component';
import { LatDerComponent } from './components/lat-der/lat-der.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    CentralComponent,
    LatIzqComponent,
    LatDerComponent,
    CategoriasComponent,
    CarritoComponent,
    ListaProductosComponent,
    ProductoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
