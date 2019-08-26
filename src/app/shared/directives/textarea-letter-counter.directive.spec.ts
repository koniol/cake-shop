import { TextareaLetterCounterDirective } from './textarea-letter-counter.directive';

describe('TextareaLetterCounterDirective', () => {
  it('should create an instance', () => {
    const directive = new TextareaLetterCounterDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
