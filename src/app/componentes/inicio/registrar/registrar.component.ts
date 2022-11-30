import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
 registrar: FormGroup;
  constructor(private fb : FormBuilder) { 
    this.registrar = this.fb.group({
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    genero:['',Validators.required],
    correo:['',Validators.required],
    password:['',Validators.required]

    })
    
  }

  ngOnInit(): void {
  }
 registrarUsuario():void {
  console.log(this.registrar)

 }
}
