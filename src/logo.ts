import typescriptLogo from './typescript.svg'
export function dynamic_addElement(){
    let mountPoint = document.querySelector<HTMLDivElement>('#app')
    let logo:HTMLAnchorElement=document.createElement("a")
    logo.setAttribute("href", "https://www.typescriptlang.org/")
    logo.setAttribute("target", "_blank")
    logo.innerHTML=`<img src="${typescriptLogo}" class="logo vanilla" alt="TypeScriptlogo"/>`
    mountPoint?.appendChild(logo)
}