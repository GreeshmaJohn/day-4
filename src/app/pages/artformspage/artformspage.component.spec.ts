import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtformspageComponent } from './artformspage.component';

describe('ArtformspageComponent', () => {
  let component: ArtformspageComponent;
  let fixture: ComponentFixture<ArtformspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtformspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtformspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
