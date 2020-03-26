import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotbookCreateModalPage } from './notbook-create-modal.page';

describe('NotbookCreateModalPage', () => {
  let component: NotbookCreateModalPage;
  let fixture: ComponentFixture<NotbookCreateModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotbookCreateModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotbookCreateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
