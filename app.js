const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');
const del = document.querySelector('#delete');
const copy = document.querySelector('#copy');

btn.addEventListener('click', () => {
    let text = input.value;
    // 全ての改行を全角スペースに置換
    output.innerHTML = text.replace(/\n/g, '　');
});

del.addEventListener('click',()=>{
    input.value= '';
});

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(output.textContent);
});

document.addEventListener("keydown", (event) => {
    // CtrlキーとShiftキーが両方押されているか確認
    if (event.key === "Enter" && event.shiftKey) {
        let text = input.value;
    // 全ての改行を全角スペースに置換
    output.innerHTML = text.replace(/\n/g, '　');
    }
});
