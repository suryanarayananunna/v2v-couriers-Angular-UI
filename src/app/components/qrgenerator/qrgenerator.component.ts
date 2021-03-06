import { Component, OnInit } from '@angular/core';
import { QrServiceService } from 'src/app/services/qr-service.service';

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.component.html',
  styleUrls: ['./qrgenerator.component.css']
})
export class QrgeneratorComponent implements OnInit {
  // public Roles: any = ['Admin', 'Provider', 'Customer'];
  // public Email : string;
  // public UserName : string;
  // public Password : string;
  // public Role : string;

  public CourierId : string;
  public CourierName: string;
  public CourierDescription: string;
  public CourierProductId: string;
  public CourierCustomerId: string;
  public CourierType: string;
  public jsondata = {};

  constructor(private qrservice : QrServiceService) { }

  ngOnInit() {
  }

  // register(UserName : string,Email : string, Password : string , Role : string) : void{
  //   this.Email = Email;
  //   this.Password = Password;
  //   this.Role = Role;
  //   this.UserName = UserName;
  //   console.log("FORM DATA" + Role+UserName+Email+Password);
  //   this.jsondata["UserName"] = this.UserName;
  //   this.jsondata["Email"] = this.Email;
  //   this.jsondata["Password"] = this.Password;
  //   this.jsondata["Role"] = this.Role;
  //   console.log("THE JOSN DATA " + this.jsondata);
  //   this.qrservice.registerdata(this.jsondata).subscribe(response => {
  //     // do whatever you want with the response
  //     console.log(response);
  //  }, error => {
  //    console.log(error);
  //     // handle error here
  //     // error.status to get the error code
  //  });
    
  // }


  generateQrCode(CourierId : string,CourierName: string,CourierDescription: string, CourierType : string,CourierProductId: string,CourierCustomerId: string) : void{

    this.CourierId =CourierId;
    this.CourierName = CourierName;
    this.CourierDescription = CourierDescription;
    this.CourierType = CourierType;
    this.CourierProductId = CourierProductId;
    this.CourierCustomerId = CourierCustomerId;

    this.jsondata["CourierId"] = this.CourierId;
    this.jsondata["CourierName"] = this.CourierName;
    this.jsondata["CourierDescription"] = this.CourierDescription;
    this.jsondata["CourierType"] = this.CourierType;
    this.jsondata["CourierProductId"] = this.CourierProductId;
    this.jsondata["CourierCustomerId"] = this.CourierCustomerId;
    console.log("THE JOSN DATA " + this.jsondata);
    this.qrservice.generateqr(this.jsondata).subscribe(response => {
      // do whatever you want with the response
      console.log(response);
   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });

  }


}
