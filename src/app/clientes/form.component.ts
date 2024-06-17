import { Component, OnInit } from "@angular/core";
import { Cliente } from "./cliente";
import { CLIENTES } from "./clientes.json"; // Importa los datos
import { ClienteService } from "./cliente.service";
import { Router, ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = "Información básica";

  Mycliente: Cliente = CLIENTES[0];
  myName = this.Mycliente.name;
  myLastName = this.Mycliente.apellido;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarCliente();
    console.log("MyName:", this.myName);
    console.log("MyName:", this.myLastName);
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params["id"];
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe((cliente) => {
      this.router.navigate(["/clientes"]);
      swal(
        "Nuevo cliente",
        `Cliente ${cliente.nombre} creado con éxito!`,
        "success"
      );
    });
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe((cliente) => {
      this.router.navigate(["/clientes"]);
      swal(
        "Cliente Actualizado",
        `Cliente ${cliente.nombre} actualizado con éxito!`,
        "success"
      );
    });
  }
}
