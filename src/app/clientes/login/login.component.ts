import { Component, OnInit } from "@angular/core";
import { Cliente } from "../cliente";
import { ClienteService } from "../cliente.service";
import { Router, ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";
import { NgForm } from "@angular/forms";
import { ifStmt } from "@angular/compiler/src/output/output_ast";

import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public user: any = {};
  public usuario: any = {};

  public userName;
  public formdata;
  public password;

  public cliente: Cliente = new Cliente();

  constructor() {}

  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl(""),
      // password: new FormControl(""),
    });
  }
  onClickSubmit(result) {
    console.log("No reactivo : " + result.username);
  }

  onClickSubmit1(data) {
    this.userName = data.userName;
    // this.password = data.password;
    console.log("Si reactivo :" + this.userName);
    // console.log("Si reactivo :" + this.passWord);
  }

  login(loginForm) {
    if (loginForm.valid) {
      let data = {
        email: this.user.email,
        password: this.user.password,
      };
      console.log(data.email);
      console.log(data.password);
    }
  }
}
