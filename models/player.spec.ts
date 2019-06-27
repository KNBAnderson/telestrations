import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Player } from './Player';

describe('Player', () => {

  beforeEach(async(() => {
    var testPlayer = new Player('test@test.com')
  }));

  it('should create', () => {
    expect(testPlayer).toBeTruthy();
  });
});
