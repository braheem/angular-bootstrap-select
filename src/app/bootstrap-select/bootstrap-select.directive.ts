import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

declare var jQuery: any;

/**
 * Directive to wrap bootstrap-select
 */
@Directive({
  selector: '[bootstrapSelect]'
})
export class BootstrapSelectDirective implements OnInit, OnDestroy {

  private el;

  constructor(private elref: ElementRef) {
    this.el = elref.nativeElement;
  }

  ngOnInit() {
    jQuery(this.el).selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    });
  }

  ngOnDestroy() {
    jQuery(this.el).selectpicker('destroy');
  }

  refresh() {
    jQuery(this.el).selectpicker('refresh');
  }
}
