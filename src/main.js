import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './HelloWorld.js';

const items = [
  {content: 'Slide 1: s similique veritatis eligendi, aspernatur nobis. Beatae est, reiciendis rem hic velit labore maxime quisquam deleniti nulla! Est molestias fuga alias illum esse officiis ex. Minima sunt hic, vitae perferendis ipsum.'},
  {content: 'Slide 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo hic necessitatibus sint mollitia ipsum nam sapiente, repellendus unde laudantium voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Quo hic necessitatibus sint mollitia ipsum nam sapiente, repellendus unde laudantium voluptates similique veritatis eligendi, aspernatur nobis. Beatae est, reiciendis rem hic velit labore maxime quisquam deleniti nulla! Est molestias fuga alias illum esse officiis ex. Minima sunt hic, vitae perferendis ipsum.'},
  {content: 'Slide 3: Blah blah blah'}, 
  {content: 'Slide 4: blah blah blah'}
]

render(<HelloWorld items={items} />, document.querySelector('#app'));