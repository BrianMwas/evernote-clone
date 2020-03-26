import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotePageModule } from '../note/note.module';
import { NotePage } from '../note/note.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private modalCtl: ModalController) { }

  ngOnInit() {
  }

  async startNote() {
    const m = await this.modalCtl.create({
      component: NotePage
    })

    m.present()
  }

}
