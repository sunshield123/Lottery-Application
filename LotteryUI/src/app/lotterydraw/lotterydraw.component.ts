//should work in array efficeny



import { Component} from '@angular/core';

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

		}



}
