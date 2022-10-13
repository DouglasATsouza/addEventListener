const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_transferir = document.querySelector("#btn_transferir")
const btn_voltar = document.querySelector("#btn_voltar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]    
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})

btn_voltar.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]    
    cursosSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})

