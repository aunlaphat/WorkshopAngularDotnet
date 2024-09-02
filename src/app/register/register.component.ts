import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  @ViewChild('emailInput') emailInput!: ElementRef
  registerForm!: FormGroup;
  submitted = false;
  hide = true;

  userRegister = {
    "fullname": "",
    "email": "",
    "mobile": "",
    "password": ""
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }

  submitRegister() {
    this.submitted = true;

    // ถ้าฟอร์มไม่ถูกต้อง
    if (this.registerForm.invalid) {
      return
      // Swal.fire({
      //   title: 'มีข้อผิดพลาด',
      //   text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
      //   icon: 'error',
      //   confirmButtonText: 'OK'
      // })
    }
    else{

      this.userRegister.fullname = this.registerForm.value.fullname
      this.userRegister.email = this.registerForm.value.email
      this.userRegister.mobile = this.registerForm.value.mobile
      this.userRegister.password = this.registerForm.value.password

      if (this.userRegister.fullname !== "" && this.userRegister.email !== "" && this.userRegister.mobile !== "" && this.userRegister.password !== ""){
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

    // เมื่อฟอร์มถูกต้อง
    // alert('ลงทะเบียนสำเร็จ');
    // ทำการรีเซ็ตฟอร์ม
    // this.registerForm.reset();
    // this.submitted = false;
  
  togglePasswordVisibility(){
    this.hide = !this.hide
  }
}
