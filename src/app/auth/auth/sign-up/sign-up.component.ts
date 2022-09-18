import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../model/login';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  loginDTO: Login = new Login()

  registerForm: FormGroup

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['Burak', [Validators.required]],
      lastName: ['Esnglu', [Validators.required]],
      email: ['register@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
      confirmPassword: ['123456', [Validators.required]],
      aggrement: ['', [Validators.required]],
    },
      // { 
      //   validator: ConfirmedValidator('password', 'confirmPassword')
      // }
    );
  }

  postRequest() {
    // let user = {
    //   firstName: "Brasdk",
    //   lastName: "Esnewqglu",
    //   email: "burakesngluu@gmail.com",
    //   password: "1523132ewq9"
    // }

    this.loginDTO = this.registerForm.value
    debugger

    this.authService.login(this.loginDTO).subscribe((res) => {
      console.log(res)

      alert("Hesabınız oluşturulmuştur. Giriş Sayfasına yönlendiriliyorsunuz...")

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);


    }, err => {
      console.log(err)
    }
    )

  }

}
