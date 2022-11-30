import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  loading= false;

  constructor(private fb: FormBuilder,private router: Router) { 
    this.login = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  logi(): void{
    console.log(this.login)

    const usuario: Usuario= {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }
    this.loading= true;
    setTimeout(()=>{
      if(usuario.nombreUsuario === '1234' && usuario.password ==='1234'){
        this.login.reset();
        this.router.navigate(['/dashboard']);
      }else{
        console.log('error')
      }
      this.loading = false;
    }, 2000
    );
    console.log(usuario);
  }
  

}
