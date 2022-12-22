import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import { name } from './data.json';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Adding styles
  element.classList.add('hello');

  // Adding images
  const image = new Image();
  image.src = Icon;
  element.appendChild(image);

  // Adding data
  console.log(Data);
  console.log(Notes);
  console.log(name);

  // Adding other data formats
  console.log(toml);
  console.log(yaml);
  console.log(json);

  return element;
}

document.body.appendChild(component());
