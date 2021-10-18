import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  questions: {video: string, options: string[]}[];

  constructor(private readonly inventoryService: InventoryService, private readonly router: Router) { 
    this.questions = [
      {"video": "https://www.youtube.com/embed/dQw4w9WgXcQ", "options": ["never", "gonna", "give", "you"]},
      {"video": "https://www.youtube.com/embed/kffacxfA7G4", "options": ["baby", "baby2", "baby3", "baby4"]},
      {"video": "https://www.youtube.com/embed/CbWgiUJlxKQ", "options": ["boys", "the", "plan", "simple"]}
    ];
  }

  ngOnInit(): void {
    // Select random and populate HTML
    var question = this.questions[Math.floor(Math.random() * this.questions.length)];
    (document.getElementById("toast-video") as HTMLIFrameElement).src = question["video"];
     document.getElementById("toast-answer-1")!.innerHTML = question.options[0];
     document.getElementById("toast-answer-2")!.innerHTML = question.options[1];
     document.getElementById("toast-answer-3")!.innerHTML = question.options[2];
     document.getElementById("toast-answer-4")!.innerHTML = question.options[3];

  }

  onCorrect() {
    this.inventoryService.setObtained('amogus', true);
    this.router.navigate(['/worldmap']);
  }

  onIncorrect() {
    this.inventoryService.setObtained('amogus', false);
    this.router.navigate(['/worldmap']);
  }

}
