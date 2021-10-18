import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-hasan',
  templateUrl: './hasan.component.html',
  styleUrls: ['./hasan.component.css']
})
export class HasanComponent implements OnInit {
  questions: {video: string, correct: string, options: string[]}[];
  selectedImageURL: string;
  selectedOptions: {text: string, correct: boolean}[];

  constructor(private readonly inventoryService: InventoryService, private readonly router: Router) { 
    this.questions = [
      {"video": "https://www.youtube.com/embed/dQw4w9WgXcQ", "correct": "give", "options": ["never", "gonna", "you"]},
      {"video": "https://www.youtube.com/embed/kffacxfA7G4", "correct": "baby", "options": ["baby2", "baby3", "baby4"]},
      {"video": "https://www.youtube.com/embed/CbWgiUJlxKQ", "correct": "boys", "options": ["the", "plan", "simple"]}
    ];
    this.selectedOptions = [];
    this.selectedImageURL = "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iMFSNPTLLalk/v0/1000x-1.jpg";
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
