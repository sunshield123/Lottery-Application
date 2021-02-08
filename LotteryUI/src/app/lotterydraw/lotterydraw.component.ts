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
	user = {};
	url="http://localhost:3200/Users"

	constructor(
		private http: HttpClient,private DrawHistory:DrawHistoryService) { 
		this.data=new Array<any>()


	}

	today=new Date();
	test1=this.today.toString()
	Lotterydate=this.test1.slice(4,16);
	LotteryTime=this.test1.slice(16,25);
	//POST REQUEST TO SERVER
	callServer() {
	  	
	  	this.user={id:7,chance1:this.result,chance2:this.result1,chance3:this.result2,chance4:this.result3,chance5:this.result4,date:this.Lotterydate,TimeStamp:this.LotteryTime};
	    const headers = new HttpHeaders()
	          .set('Authorization', 'my-auth-token')
	          .set('Content-Type', 'application/json');

	    this.http.post('http://localhost:3200/ping', JSON.stringify(this.user), {
	      headers: headers
	    })
	    .subscribe(data => {
	    });
	}

	// FUNCTION FOR JACKPOT - 5 UNIQUE NUMBERS
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

	//FUNCTION FOR DRAW HISTORY
			getDataFromAPI(){
				this.DrawHistory.getData().subscribe((data)=>{
					this.data=data
				})

			}


}
