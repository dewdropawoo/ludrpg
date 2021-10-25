import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';
import { Task } from '../task';

@Component({
  selector: 'app-xqc',
  templateUrl: './xqc.component.html',
  styleUrls: ['./xqc.component.css']
})
export class XqcComponent extends Task implements OnInit {
  questions: {question: string, correct: string, options: string[]}[];
  selectedQuestion: string;
  selectedOptions: {text: string, correct: boolean}[];

  constructor(protected readonly inventoryService: InventoryService, private readonly router: Router) { 
    super(inventoryService);
    this.questions = [
      {"question": "Who is #15 on Twitch Earnings?", "correct": "loltyler1", "options": ["Asmongold", "Rubius", "moistcr1tikal"]},
      {"question": "Where does Mizkif rank on Twitch Earnings?", "correct": "#23", "options": ["#21", "#25", "#26"]},
      {"question": "Who is #13 on Twitch Earnings?", "correct": "HasanAbi", "options": ["DrDisrespect", "Sykkuno", "Train"]}
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
