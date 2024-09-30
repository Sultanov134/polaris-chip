import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.imageSource = ""
    this.title = ""
    this.header = ""
    this.details = ""
    this.count = 0;
    this.fancy = false;
    this.description = "hello I'm details"
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        
      }
      h2{
        font-size: 2em;
        margin: 2px;
        padding:0;
      }
      h3{
        margin: 8px 0;
      }
     
      
      .card{
        font-size: 1em;
        
        border: 2px solid grey;
        padding: 8px;
        margin:8px;
       
        
        transition: .6s all ease-in-out;
      }
      .card-details {
        padding: 8px 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0 0 0 0;
        width: 200px;      
      }
      :host([fancy]) {
      
        background-color: pink;
        border: 4px solid fuchsia;
        box-shadow: 10px 5px 5px red;
        
        
      }
      
      .card:hover,.card:focus-within{
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }
      .card-image{
        width: 250px;
      }
      button {
        margin: 8px;
        padding: 8px 16px;
        font-size: 1em;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`<div class="card">
      <img class="card-image" src=${this.imageSource}/>
      <slot><h3 class="card-title">${this.title}</h3></slot>
      <slot class="card-details">${this.details}</p></slot>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details> 
      <div class="counter">
        <button @click="${this.increamentCount}">Increase Count</button>
        Count: ${this.count}</div>
  </div>`;
  }

  static get properties() {
    return {
      title: {type:String},
      imageSource: {type: String},
      details:{type: String},
      header: {type: String},
      count: {type:Number},
      fancy: { type: Boolean, reflect: true},
      description: {type:String}

    };
  }
  increamentCount() {
    this.count += 1;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open"){
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
