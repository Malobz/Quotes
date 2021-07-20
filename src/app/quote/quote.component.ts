import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
  new Quote ('Maloba Mercy','The purpose of our lives is to be happy.','Dalai Lama', new Date (2020,3,14),0,0),
  new Quote ('Eugene Martins','Life is what happens when you’re busy making other plans.','John Lenon', new Date (2019,6,20),0,0),
  new Quote ('Maureen Hope','Get busy living or get busy dying.','Stephen King', new Date (2021,4,18),0,0),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  // completeQuote(isComplete, index){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].Name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
