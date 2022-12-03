import { Component, Prop, h, Element, Host } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() checked: boolean;

  private handleChange = (e: Event) => {
    this.checked = (e.target as HTMLInputElement).checked;
  };

  private inputRef!: HTMLInputElement;

  render() {
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          ref={ele => {
            this.inputRef = ele;
          }}
          onChange={this.handleChange}
          checked={this.checked}
          type="checkbox"
          style={{
            transform: 'translateX(-100%)',
            position: 'absolute',
            pointerEvents: 'none',
            opacity: '0',
            margin: '0',
            width: '25',
            height: '25',
          }}
        />
        <button
          style={{
            all: 'unset',
            backgroundColor: 'white',
            width: '25px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'rgba(0, 0, 0, 0.14) 0px 2px 10px',
            borderRadius: '4px',
          }}
        >
          {this.checked && <slot name="indicator" />}
        </button>
        {this.inputRef?.checked && 'CHECKED'}
      </div>
    );
  }
}
