import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import {KpiComponent}  from '../src/app/components/kpi.component';

describe('KpiComponent', () => {

  let comp:    KpiComponent;
  let fixture: ComponentFixture<KpiComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(KpiComponent);

    comp = fixture.componentInstance; // KpiComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  
    it('should have a defined component', () => {
        expect(comp).toBeDefined();
    });

/*
  it('should display original title', () => {
  fixture.detectChanges();
  expect(el.textContent).toContain(comp.title);
});

it('should display a different test title', () => {
  comp.title = 'Test Title';
  fixture.detectChanges();
  expect(el.textContent).toContain('Test Title');
});*/
});

