import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
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
import { RegistroComponent } from './components/registro/registro.component';
import { Router } from 'express';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { AdminComponent } from './components/admin/admin.component';


const appRoutes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'misCompras', component:MisComprasComponent}
 ];

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
    FooterComponent,
    RegistroComponent,
    MisComprasComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
