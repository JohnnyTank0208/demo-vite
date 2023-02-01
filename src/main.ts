import './style.css'
import {dynamic_addElement} from './logo'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome To Learn TypeScript </h1>
    <h2>Are you readly? chick it 🔰!</h2>
  </div>
`
dynamic_addElement()