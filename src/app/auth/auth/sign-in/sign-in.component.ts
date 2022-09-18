import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _auth: AuthService
  ) { }

  loginForm: FormGroup;
  returnUrl: string;

  ngOnInit(): void {
    this.createForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.value;
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['login@gmail.com', [Validators.required]],
      password: ['123456', [Validators.required]],
      remember: ['', [Validators.required]]
    });
  }

  async submit() {
    const { email, password } = this.f;
    const user: User = await this._auth.logIn(email, password).toPromise();
    this.router.navigate(['/home']);
  }


  postRequest() {

    this._auth.signIn().subscribe((res:any) => {
      console.log(res)


    }, err => {
      console.log(err)
    }
    )

  }

}
