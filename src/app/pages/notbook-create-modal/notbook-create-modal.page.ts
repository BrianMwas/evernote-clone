import { Component, OnInit } from '@angular/core';
import { NotebookService } from 'src/app/services/notebook.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notbook-create-modal',
  templateUrl: './notbook-create-modal.page.html',
  styleUrls: ['./notbook-create-modal.page.scss'],
})
export class NotbookCreateModalPage implements OnInit {
  name: string = ''
  constructor(private modalCtr: ModalController, private notebookService: NotebookService) { }

  ngOnInit() {
  }

  save() {
    this.notebookService.addNotebook(this.name).then(() => {
      this.modalCtr.dismiss()
    })
  }

  cancel() {
    this.modalCtr.dismiss()
  }
}
