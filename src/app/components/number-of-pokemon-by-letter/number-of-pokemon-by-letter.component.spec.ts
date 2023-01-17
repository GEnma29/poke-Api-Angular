import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfPokemonByLetterComponent } from './number-of-pokemon-by-letter.component';

describe('NumberOfPokemonByLetterComponent', () => {
  let component: NumberOfPokemonByLetterComponent;
  let fixture: ComponentFixture<NumberOfPokemonByLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NumberOfPokemonByLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfPokemonByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
