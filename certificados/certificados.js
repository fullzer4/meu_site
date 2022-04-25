const botao = document.getElementById('menu-botao');
const ham = document.querySelectorAll('.menu-botao-ham');
const nave = document.getElementById('menu');
const conteudo = document.getElementById('conteudo');
let active = false;

botao.onclick = ()=> {
    if(active == false){
        ham[0].classList.add('hanima1');
        ham[1].classList.add('hanima2');
        ham[2].classList.add('hanima3');
        nave.style.display = 'flex';
        active = true;
    } else {
        ham[0].classList.remove('hanima1');
        ham[1].classList.remove('hanima2');
        ham[2].classList.remove('hanima3');
        nave.style.display = 'none';
        active = false;
    }
}