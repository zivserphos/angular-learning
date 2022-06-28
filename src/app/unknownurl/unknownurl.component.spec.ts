import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownurlComponent } from './unknownurl.component';

describe('UnknownurlComponent', () => {
  let component: UnknownurlComponent;
  let fixture: ComponentFixture<UnknownurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownurlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
