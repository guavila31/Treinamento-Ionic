import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfineScrollPage } from './infine-scroll.page';

describe('InfineScrollPage', () => {
  let component: InfineScrollPage;
  let fixture: ComponentFixture<InfineScrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfineScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
