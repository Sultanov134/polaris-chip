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
    this.imageSource = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRoBD_MdWpXJJVGrQdSy6aejdo67OnGB1ZLCOJjRuXaKbASuf_KNuR8HKtSwCcsY_7E0Nd3GzFzASkMcc2vLTqHU_vQq-nUEqWyYvBgQ"
    this.title = "Interesting info"
    this.header = "Kuwait Towers"
    this.details = "The kuwait Towers are a group of three thin towers in the Kuwait City, standing on a promontory into the arabian gulf. there were the sixth and last group in the larger Kuwait water Towers system of 34 towers and were built in a style considerably different from the five other groups."
    this.count = 0;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h2{
        font-size: 2em;
        margin: 2px;
        padding:0;
      }
      h3{
        margin: 8pm 0;
      }
      .card-image{
        width: 200px;
        
      }
      .card{
        font-size: 1em;
        display: inline-flex;
        border: 2px solid grey;
        padding: 8px;
        margin:8px;
        background-color: cyan;
        transition: .6s all ease-in-out;
      }
      .card-text {
        width: 200px;
        padding: 0 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0 0 0 8px;
        height:300px;
        overflow: auto;
      }
      :host([fancy]) .card {
        background-color: orange;
        color: cyan;
        border: 10px solid green;
        margin: 100px;
      }
      
      .card:hover,.card:focus-within{
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }
      .card-image{
        width: 200px;
        height: 100%;
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
    return html`<div class="card-list"><h2>${this.header}</h2><div class="card">
      <img class="card-image" src=${this.imageSource}/>
      <div class="card-text">
        <h3 class="card-title">${this.title}</h3>
        <div class="card-details">
          <p>${this.details}</p>
        </div>
        <button @click="${this.increamentCount}">Increase Count</button>
        <div class="counter">Count: ${this.count}</div>
      </div>
    </div>
    </div>`;
  }

  static get properties() {
    return {
      title: {type:String},
      imageSource: {type: String},
      details:{type: String},
      header: {type: String},
      count: {type:Number}

    };
  }
  increamentCount() {
    this.count += 1;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
