import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import * as $ from 'jquery';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    loading = false;
    rest: any;

    constructor(
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private router: Router,
        private _login: LoginService
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.addFocusClass();
        this.keyUpObserve();
        this.clickLink();
    }

    ingresar() {
        const user = {
        username: this.form.value.username,
        password: this.form.value.password
        };

        const params = new HttpParams()
        .set('usuario', user.username)
        .set('contrasenia', user.password);

        this.rest.login(params).subscribe((data: { access_token: string; }) => {
            localStorage.setItem('token', data.access_token);
            console.log('ingreso correcto');
            this.router.navigate(['home'])
        });
    }

    verificarCredenciales(username: string, password: string): boolean {
        return username === 'usuario' && password === 'contraseña';
    }

    addFocusClass(): void {
        $(".form-control").on("focus", function () {
            $(this).prev().addClass("on-focus");
        }).on("focusout", function () {
            $(".form-label").removeClass("on-focus");
        });
    }

    keyUpObserve(): void {
        $(".form-control").on("keyup", function () {
            // Convertimos el valor a string antes de verificar su longitud
            if (String($(this).val()).length > 0) {
                $(this).prev().addClass("filled");
            } else {
                $(this).prev().removeClass("filled");
            }
        });
    }

    clickLink(): void {
        $(".link").on("click", function () {
            var open = $(this).data("open");
            var close = $(this).data("close");

            $("#" + close).animate({
                'opacity': 0,
                'top': +100
            }, 500 , function () {
                $(this).removeClass("open").addClass("close").removeAttr("style");
                $("#" + open).removeClass("close").addClass("open");
            });
        });
    }

    fakeloading() {
      this.loading = true;
      setTimeout(() => {
          this._snackBar?.open('Usuario y/o contraseña incorrecta', '',{
              duration:5000,
              horizontalPosition:'center',
              verticalPosition:'bottom'
          })
      }, 1500);
  }  
}
