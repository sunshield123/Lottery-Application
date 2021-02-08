//should work in array efficeny
//Need to work with sending results to the backend
import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DrawHistoryService} from '../services/draw-history.service'


@Component({
  selector: 'app-lotterydraw',
  templateUrl: './lotterydraw.component.html',
  styleUrls: ['./lotterydraw.component.css']
})
export class LotterydrawComponent {



public result:number=0;
public result1:number=0;
public result2:number=0;
public result3:number=0;
public result4:number=0;
data: Array<any>

url="http://localhost:3200/Users"

constructor(
	private http: HttpClient,private DrawHistory:DrawHistoryService) { 
	this.data=new Array<any>()

// this.http.get(this.url).toPromise().then(data=>{




// 	console.log(data);
// });
// })


}



// Function for CALL SERVER



user = {};


  callServer() {
  	this.user={id:9,player:"player9",chance1:this.result,chance2:this.result1,chance3:this.result2,chance4:this.result3,chance5:this.result4};
  	console.log("call callServer")
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://localhost:3200/ping', JSON.stringify(this.user), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }

// FUNCTION FOR JACKPOT
	JACKPOT(){
		
		var arr = [];
			while(arr.length < 5){
			    var r = Math.floor(Math.random() * 50) + 1;
			    if(arr.indexOf(r) === -1) arr.push(r);
			}

			this.result=arr[0];
			this.result1=arr[1];
			this.result2=arr[2];
			this.result3=arr[3];
			this.result4=arr[4];		
			this.callServer()

		}


		getDataFromAPI(){
			this.DrawHistory.getData().subscribe((data)=>{
				console.log(data)
				this.data=data
			})

		}


}
