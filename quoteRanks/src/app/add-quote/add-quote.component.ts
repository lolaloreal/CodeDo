import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
    @Input() quotes;
    @Output() createQuoteEvent = new EventEmitter();

    newQuote = { body: "", author: "", rating: 0};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
      console.log(this.newQuote);
      console.log(formData);
      this.createQuoteEvent.emit(this.newQuote);
      this.newQuote = {body: "", author: "", rating: 0};
  }
}
