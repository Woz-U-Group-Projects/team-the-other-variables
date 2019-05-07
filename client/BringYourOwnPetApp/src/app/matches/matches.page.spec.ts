import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MatchesPage } from './matches.page';

describe('MatchesPage', () => {
  let component: MatchesPage;
  let fixture: ComponentFixture<MatchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(MatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
