const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    let text = input.value;
    output.innerHTML=text.replace('\n','　');
})