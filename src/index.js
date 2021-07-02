import _ from 'lodash';
import './styles/style.scss';
import header from './components/header';
import leftControl from './components/leftControl';
import rightControl from './components/rightControl';
import page1 from './components/page1';
import page2 from './components/page2';
import listener from './controllers/listener';
import folder from './Class/folder';
import controller from './controllers/controller';

function component() {

  const container = document.createElement('div')
  container.classList.add('container')
  container.appendChild(header())
  container.appendChild(leftControl())
  container.appendChild(page1())
  container.appendChild(page2())
  container.appendChild(rightControl())

  return container

}

document.body.appendChild(component())
listener.initializeListeners()
controller.getLocal()
