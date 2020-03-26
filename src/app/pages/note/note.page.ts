import { Component, OnInit, Input } from '@angular/core';
import { Note, NotebookService } from 'src/app/services/notebook.service';
import { ModalController } from '@ionic/angular';
import { NotebooksPage } from '../notebooks/notebooks.page';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  @Input() id: string

  note: Note = {
    content: "",
    title: "",
    notebook: "",
    created: null
  }

  constructor(private modalCtr: ModalController, private notebookService: NotebookService) { }

  ngOnInit() {
  }

  cancel() {
    this.modalCtr.dismiss()
  }


  async moveNote() {
    const m = await this.modalCtr.create({
      component: NotebooksPage,
      componentProps: {
        isModal: true,
        currentSelected: this.note.notebook
      }
    })

    m.present()
    m.onDidDismiss().then(result => {
      console.log("result", result);
      if(result.data) {
        this.note.notebook = result.data.selected
      }
    })
  }

  done() {
    if(this.id) {
      // TODO
    } else {
      this.notebookService.addNote(this.note).then(res => {
        this.modalCtr.dismiss()
      })
    }
  }
}
