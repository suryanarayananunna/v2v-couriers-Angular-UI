import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public Roles: any = ['Admin', 'Provider', 'Customer'];
  public Email : string;
  public UserName : string;
  public Password : string;
  public Role : string;
  public jsondata = {};
  constructor(private registerservice : RegisterService) { }

  ngOnInit() {
  }

  register(UserName : string,Email : string, Password : string , Role : string) : void{
    this.Email = Email;
    this.Password = Password;
    this.Role = Role;
    this.UserName = UserName;
    console.log("FORM DATA" + Role+UserName+Email+Password);
    this.jsondata["UserName"] = this.UserName;
    this.jsondata["Email"] = this.Email;
    this.jsondata["Password"] = this.Password;
    this.jsondata["Role"] = this.Role;
    console.log("THE JOSN DATA " + this.jsondata);
    this.registerservice.registerdata(this.jsondata).subscribe(response => {
      // do whatever you want with the response
      console.log(response);
   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });
    
  }

  
  

}