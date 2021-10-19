import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-hasan',
  templateUrl: './hasan.component.html',
  styleUrls: ['./hasan.component.css']
})
export class HasanComponent implements OnInit {
  questions: {question: string, correct: string, options: string[]}[];
  selectedQuestion: string;
  selectedOptions: {text: string, correct: boolean}[];

  constructor(private readonly inventoryService: InventoryService, private readonly router: Router) { 
    this.questions = [
      {"question": "What animal is the symbol of the US Democratic Party?", "correct": "donkey", "options": ["tiger", "elephant", "eagle"]},
      {"question": "Famously, Bernie Sander's had an average donation amount of?", "correct": "$27", "options": ["$33", "$25", "$17"]},
      {"question": "What is the occupation of Ben Shapiro's wife?", "correct": "doctor", "options": ["lawyer", "accountant", "twitch streamer"]}
    ];
    this.selectedOptions = [];
    this.selectedQuestion = "uh oh something broke";
  }

  ngOnInit(): void {
    // Select random and populate HTML
    var question = this.questions[Math.floor(Math.random() * this.questions.length)];
	  //(document.getElementById("toast-video") as HTMLIFrameElement).src = question["video"];

    var selectedOptions = [{"text": question["correct"], "correct": true}];
    for(let option of question["options"]) {
      selectedOptions.push({"text": option, "correct": false});
    }
    this.selectedOptions = shuffleArray(selectedOptions);
    this.selectedQuestion = question["question"];
  }

  answerHandler(correct: boolean) {
    if(correct) {
      this.onCorrect();
    } else {
      this.onIncorrect();
    }
  }

  onCorrect() {
    this.inventoryService.setObtained('aoc', true);
    this.router.navigate(['/worldmap']);
  }

  onIncorrect() {
    this.inventoryService.setObtained('aoc', false);
    this.router.navigate(['/worldmap']);
  }

}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
