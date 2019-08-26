import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextareaLetterCounter]'
})
export class TextareaLetterCounterDirective implements OnInit {
  @Input() color = '#000';
  @Input() size = '12px';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    const element: HTMLTextAreaElement = this.elementRef.nativeElement;
    const counter: HTMLElement = this.renderer.createElement('div');
    const maxlength = element.getAttribute('maxlength');
    counter.style.color = this.color;
    counter.style.fontSize = this.size;

    counter.textContent = `0 / ${maxlength}`;
    this.renderer.appendChild(element.parentElement, counter);

    this.onInput(element, counter, maxlength);
  }

  onInput(element: HTMLTextAreaElement, counter: HTMLElement, maxlength: string) {
    element.addEventListener('input', function() {
      const currentLength = this.value.length;
      counter.textContent = `${currentLength} / ${maxlength}`;
    });
  }


}
