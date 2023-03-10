import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingComponent } from './hosting.component';

describe('HostingComponent', () => {
  let component: HostingComponent;
  let fixture: ComponentFixture<HostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
