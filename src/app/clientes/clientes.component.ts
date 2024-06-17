import { Component, OnInit } from "@angular/core";
import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";
import swal from "sweetalert2";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
})
export class ClientesComponent implements OnInit {
  public user: any = {};
  public usuario: any = {};
  public token: any = {};

  public cliente: Cliente = new Cliente();

  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clienteService
      .getClientes()
      .subscribe((clientes) => (this.clientes = clientes));
  }

  delete(cliente: Cliente): void {
    swal({
      title: "Está seguro?",
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: false,
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe((response) => {
          this.clientes = this.clientes.filter((cli) => cli !== cliente);
          swal(
            "Cliente Eliminado!",
            `Cliente ${cliente.nombre} eliminado con éxito.`,
            "success"
          );
        });
      }
    });
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params["id"];
      if (id) {
        console.log("ingreso id: " + id);

        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }
}
