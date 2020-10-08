import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubAboutPage } from './sub-about.page';

describe('SubAboutPage', () => {
  let component: SubAboutPage;
  let fixture: ComponentFixture<SubAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
