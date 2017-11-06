import { Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { BootstrapSelectDirective } from './bootstrap-select.directive';

/**
 * Base class to extend for any custom bootstrap-select based component
 */
export abstract class BaseBootstrapSelect {

  @ViewChild(BootstrapSelectDirective)
  bootstrapSelectDirective: BootstrapSelectDirective;

  private _options: string[];
  private _optgroups: any[];

  @Input()
  private mySelections: string[];
  @Output()
  private mySelectionsChange = new EventEmitter();

  @Input()
  set options(options: string[]) {
    this._options = options;
    setTimeout(() => {
      this.bootstrapSelectDirective.refresh();
    });
  }

  @Input()
  set optgroups(optgroups: any) {
    this._optgroups = optgroups;
  }

  get options() {
    return this._options;
  }

  get optgroups() {
    return this._optgroups;
  }

  constructor() { }
}
