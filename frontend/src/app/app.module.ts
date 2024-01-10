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
import { PublicLayoutComponentComponent } from './components/public-layout-component/public-layout-component.component';
import { AdminLayoutComponentComponent } from './components/admin-layout-component/admin-layout-component.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { ModificarProductosComponent } from './components/modificar-productos/modificar-productos.component';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { ComponenteNuevoComponent } from './componente-nuevo/componente-nuevo.component';


// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'admin', component: AdminComponent },
//   { path: 'registro', component: RegistroComponent},
//   { path: 'misCompras', component:MisComprasComponent}
//  ];

 const appRoutes: Routes = [

  //Rutas publicas Que se cargan en app module.html
  {
      path: '',
      component: PublicLayoutComponentComponent, //Componente que carga "de base"
      children: [
        { path: '', component: CentralComponent, pathMatch: 'full'}, //Aunque no este pathMatch al estar declarado primero carga esto en el app module.html
        { path: 'registro', component: RegistroComponent },
        { path: 'misCompras', component: MisComprasComponent }
      ]
  },

  //Rutas de Admin Componentes del panel de control administrador
  {
      path: '',
      component: AdminLayoutComponentComponent,
      children: [
        { path: 'admin', component: AdminComponent },
        { path: 'altaProductos', component: FormularioProductosComponent },
        { path: 'modificarProductos', component: ModificarProductosComponent},
        { path: 'actualizarProducto/:id', component: FormularioProductosComponent}

      ]
  },

  // En otro caso redirecciona a home
  // { path: '**', redirectTo: '' } // opcional
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
    AdminComponent,
    PublicLayoutComponentComponent,
    AdminLayoutComponentComponent,
    AdminHeaderComponent,
    ModificarProductosComponent,
    FormularioProductosComponent
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
