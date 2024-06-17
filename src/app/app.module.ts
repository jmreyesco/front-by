import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DirectivaComponent } from "./directiva/directiva.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ClienteService } from "./clientes/cliente.service";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from "./clientes/form.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./clientes/login/login.component";

import { ReactiveFormsModule } from "@angular/forms";
import { LoginReactiveComponent } from "./clientes/loginReactive/login-reactive/login-reactive.component";

const routes: Routes = [
  { path: "", redirectTo: "/loginReactive", pathMatch: "full" },
  { path: "directivas", component: DirectivaComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "clientes/form", component: FormComponent },
  { path: "clientes/form/:id", component: FormComponent },
  { path: "login", component: LoginComponent },
  { path: "loginReactive", component: LoginReactiveComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    LoginComponent,
    LoginReactiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes),
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
