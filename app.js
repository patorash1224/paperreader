const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let text = input.value;
    // 全ての改行を全角スペースに置換
    output.innerHTML = text.replace(/\n/g, '　');
});
