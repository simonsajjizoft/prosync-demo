import { Component } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-gtins-list',
  templateUrl: './gtins-list.component.html',
  styleUrl: './gtins-list.component.scss'
})
export class GtinsListComponent {
  gtins = [
    {"gtin": "123456789012", "checked": false},
    {"gtin": "234567890123", "checked": false},
    {"gtin": "345678901234", "checked": false},
    {"gtin": "456789012345", "checked": false},
    {"gtin": "567890123456", "checked": false},
    {"gtin": "678901234567", "checked": false},
    {"gtin": "789012345678", "checked": false},
    {"gtin": "890123456789", "checked": false},
    {"gtin": "901234567890", "checked": false},
    {"gtin": "012345678901", "checked": false},
    {"gtin": "112345678901", "checked": false},
    {"gtin": "212345678901", "checked": false},
    {"gtin": "312345678901", "checked": false},
    {"gtin": "412345678901", "checked": false},
    {"gtin": "512345678901", "checked": false},
    {"gtin": "612345678901", "checked": false},
    {"gtin": "712345678901", "checked": false},
    {"gtin": "812345678901", "checked": false},
    {"gtin": "912345678901", "checked": false},
    {"gtin": "013245678901", "checked": false},
    {"gtin": "567890123456", "checked": false},
    {"gtin": "678901234567", "checked": false},
    {"gtin": "789012345678", "checked": false},
    {"gtin": "890123456789", "checked": false},
    {"gtin": "901234567890", "checked": false},
    {"gtin": "012345678901", "checked": false},
    {"gtin": "112345678901", "checked": false},
    {"gtin": "212345678901", "checked": false},
    {"gtin": "312345678901", "checked": false},
    {"gtin": "412345678901", "checked": false},
    {"gtin": "512345678901", "checked": false},
    {"gtin": "612345678901", "checked": false},
    {"gtin": "712345678901", "checked": false},
    {"gtin": "812345678901", "checked": false},
    {"gtin": "912345678901", "checked": false},
  ];
  showLoader:boolean = false;

  constructor(private apiService:ApiService){}

  eventCheck(check:any,gtin:any){
    gtin.checked = check?.target?.checked;
  }

  goToLink(){
    let payload = {
      "appName": "ProSync",
      "gln": "234662235",
      // "gln":"3513535151",
      // "gln":"68768767",
      "gtin": this.gtins.filter(res=>res.checked).map(ele=>String(ele?.gtin)),
      "token": "Sample form",
      "userName": "Sample name",
      "userId": 104,
      "formId":12345
    }
    console.log(payload);
    this.showLoader = true;
    let url = environment?.apiUrl + 'newTransaction'
    this.apiService.post(url,payload).subscribe((data:any)=>{
      console.log(data);
      this.showLoader = false;
      let url = data?.url;
      // window.open('https://app-scf-web-docker-dev.azurewebsites.net/home/transaction?id=398532e893402841', "_blank");
      window.open(url,"_blank")
    },
  (err:any)=>{
    console.log(err);
    this.showLoader = false;
  })
    // After getting the response as Redirect URL we need to open
 
  }

}
