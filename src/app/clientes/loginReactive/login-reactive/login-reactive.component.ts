import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Tipo } from "../../tipo.enum";
import { ClienteService } from "../../cliente.service";
import { Cliente } from "../../cliente";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-reactive",
  templateUrl: "./login-reactive.component.html",
  styleUrls: ["./login-reactive.component.css"],
})
export class LoginReactiveComponent implements OnInit {
  form;
  check: boolean = false;

  clientes: Cliente[];
  public cliente: Cliente = new Cliente();

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      firstname: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
          Validators.pattern(/^[1-9]\d{6,10}$/),
        ],
      ],
      lastname: [""],
      email: [""],
      suscripcion: ["", Validators.required],
      message: [""],
    });
  }

  get firstname() {
    return this.form.get("firstname");
  }

  get suscripcion() {
    return this.form.get("suscripcion");
  }

  tipos: any[] = [];
  ngOnInit() {
    for (let item in Tipo) {
      if (isNaN(Number(item))) {
        this.tipos.push({ text: item, value: Tipo[item] });
      }
    }
  }

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log("Tipo documento: " + this.form.value.suscripcion);
      console.log("Numero: " + this.form.value.firstname);
    } else {
      alert("FILL ALL FIELDS");
    }
  }

  goToAnotherPage() {
    this.router.navigate(["/clientes/form"]);
  }
}
