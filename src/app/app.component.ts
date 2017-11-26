import { Component } from '@angular/core';
import { Account } from './models/account.model'


@Component({
  selector: 'my-app',
  templateUrl: 'app/htmls/app.component.html',
})
export class AppComponent  {

  private _accounts:Array<Account> =[
    {
      id: 1,
      title: "xyz bank",
      description: "This is my first account",
      balance: 501.2
    },
    new Account(2, "Bank ASD ", "My Secret account" , 12020)
  ]

  private _nextId = 3

  private createAcc(titleE1:any, descE1:any,balE1:any){
    this._accounts.push(new Account(this._nextId , titleE1.value,
      descE1.value,balE1.value))
      this._nextId++

      titleE1.value = ""
      descE1.value = ""
      balE1.value = 0

  }

  private removeAcc(index:number){
    this._accounts.splice(index,1)
  }
}
