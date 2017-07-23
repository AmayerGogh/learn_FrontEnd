import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMsgComponent } from './article-msg.component';

describe('ArticleMsgComponent', () => {
  let component: ArticleMsgComponent;
  let fixture: ComponentFixture<ArticleMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
