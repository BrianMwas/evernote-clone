import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from "rxjs/operators"
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore"
import * as firebase from "firebase/app";

export interface Notebook {
  name: string,
  created: any
}

export interface Note {
  content: string;
  title: string;
  notebook: any;
  created: any
}


@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  private notebooksCollection: AngularFirestoreCollection<Notebook>
  private notebooks: Observable<Notebook[]>

  constructor(private afs: AngularFirestore) { 
    this.notebooksCollection = this.afs.collection('notebooks');
    this.notebooks = this.notebooksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Notebook;
        const id = a.payload.doc.id;

        return { id, ...data}; 
      }))
    )
  }


  addNotebook(name: string) {
    return this.notebooksCollection.add({
      name,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  getNotebooks()  {
    return this.notebooks;
  }

  getNotebookList() {
    return this.notebooksCollection.snapshotChanges()
    .pipe(
      take(1),
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Notebook;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  addNote(note: Note) {
    if(note.notebook) {
      note.notebook = this.afs.doc(`/notebooks/${note.notebook.id}`).ref;
    }
    note.created = firebase.firestore.FieldValue.serverTimestamp();
    return this.afs.collection<Note>('notes').add(note)
  }
}
