import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
//SweetAlert2
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  // ใช้ ViewChild ในการเข้าถึง Element ใน Template
  @ViewChild('emailInput') emailInput!: ElementRef

  //FormGroup
  loginForm!: FormGroup

   // สร้างตัวแปรไว้เช็คว่า submit form หรือยัง
   submitted = false

   hide = true

  //ตัวแปรสำหรับผูกกับฟอร์ม
  userLogin = {
    "email": "",
    "password": ""
  }

  constructor(
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitLogin(){

    this.submitted = true
     //ตรวจสอบค่าในฟอร์มที่กรอก
     //ถ้าฟอร์มไม่ถูกต้อง
     if(this.loginForm.invalid){
      return
     }
     else{

      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password

      if(this.userLogin.email == "admin@email.com" && this.userLogin.password == "123456"){
        // alert("Login Success")

        //ป้อบอัพแสดงการแจ้งเตือนว่าเข้าสู่ระบบสำเร็จ
        Swal.fire({
          title: 'เข้าสู่ระบบสำเร็จ',
          text: 'ยินดีต้อนรับเข้าสู่ระบบ Stock Management',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      } else {
        // alert("Login Fail")

        //ป้อบอัพแสดงการแจ้งเตือนว่าเข้าสู่ระบบไม่สำเร็จ
        Swal.fire({
          title: 'มีข้อผิดพลาด',
          text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

  resetForm(){
    this.submitted = false
    this.loginForm.reset()

    //ให้ focus ที่ input email
    this.emailInput.nativeElement.focus()

  }

  // สร้าง function สำหรับการ toggle การแสดง/ซ่อน password
  togglePasswordVisibility(){
    this.hide = !this.hide
  }

}
