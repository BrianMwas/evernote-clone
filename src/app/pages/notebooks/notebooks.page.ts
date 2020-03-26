import { Component, OnInit, Input } from '@angular/core';
import { NotebookService, Notebook } from 'src/app/services/notebook.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { NotbookCreateModalPageModule } from '../notbook-create-modal/notbook-create-modal.module';
import { NotbookCreateModalPage } from '../notbook-create-modal/notbook-create-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.page.html',
  styleUrls: ['./notebooks.page.scss'],
})
export class NotebooksPage implements OnInit {

  notebooks: Observable<Notebook[]>

  @Input() isModal: boolean;
  @Input() currentSelected: Notebook
  
  constructor(private notebookService: NotebookService, private modalCtr: ModalController, private router: Router) { }

  ngOnInit() {
    
    if(this.isModal) {
      this.notebooks = this.notebookService.getNotebookList()
    } else {
      this.notebooks = this.notebookService.getNotebooks();
    }
  }

  filterNotebook(e) {
    console.log("event", e)
  }

  async addNotebook() {
    const m = await this.modalCtr.create({
      component: NotbookCreateModalPage
    })
    m.present();
  }

  openNotebook(note) {
    if(this.isModal) {
      this.modalCtr.dismiss({
        selected: note
      })
    } else {
      // just open
      this.router.navigateByUrl(`/app/notebooks/${note.id}`)
    }
  }

  close() {
    this.modalCtr.dismiss()
  }
}
