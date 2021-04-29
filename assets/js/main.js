main();
function main(){
    const btn = document.querySelector('.enviar');
    const iptText = document.querySelector('#resposta');
    const oper = document.querySelector('#op');
    const resultado = document.querySelector('#resultado')
    const atualizar = document.querySelector('.atualizar');

    let exec = 0;
    let falha = 0;
    
    const n1 = geradorNumeros();
    const n2 = geradorNumeros();
    const op = geradorOperador(1);
    const res = calculaNumeros(n1,n2,op);
    
    document.addEventListener('click', function(e){
        const el = e.target
        
        if(el.classList.contains('enviar')){
            if (!iptText.value) {
                limpaTxt();
                main();
                falha++;
                if(falha>=2) document.location.reload();
                return resultado.innerHTML = `RESPOSTA INVÁLIDA!`
            };
            const respUser = recebeResposta();
            const compResul = comparaResposta(respUser, res);
            inserirResultado(compResul);
        };

        if(el.classList.contains('atualizar')){
            document.location.reload();
        };
    })
    inserirOperacao(n1,n2,op);
    limpaTxt();
    
    function limpaTxt(){
        iptText.value = '';
        iptText.focus();
    }

    function inserirResultado(comp){
        if(exec == 0){
        exec++
        atualizarClasses();
        if( comp )  {
            resultado.innerHTML = `VERIFICAÇÃO BEM-SUCEDIDA <br>`
            
        } else {
            resultado.innerHTML = `VERIFICAÇÃO MAL-SUCEDIDA <br>`;
        };
        contagem();
    }
    }

    function contagem(){
        const verif = document.querySelector('.verif');
        const p = document.createElement('p');
        verif.appendChild(p);
        let i = 5

        setInterval(function(){
            p.innerHTML = `RESETANDO EM ${i} segundos`
            i--;
        }, 1000);

        setTimeout(function(){
            document.location.reload();
        },5000);
    }

    function atualizarClasses(){
        btn.classList.remove('enviar');
        atualizar.classList.remove('atualizar');
        
        btn.setAttribute('class', 'nothing');
        atualizar.setAttribute('class', 'nothing');

        iptText.setAttribute('disabled', 'disabled');
    }

    function recebeResposta(resp){
        return iptText.value;
    }

    function comparaResposta(respUser, resp){
        if(respUser == resp) return true;
        return false;
    }

    function inserirOperacao(n1,n2,op){
        oper.innerHTML = `${n1} ${op} ${n2} = ?`;
    }

    function geradorNumeros(){
        const n = Math.floor(Math.random() * 20);
        return n;
    }

    function calculaNumeros(n1,n2,op){
        const numbers = {
            n1,
            n2,
            op,
            res(){
                if(this.op == '+') return n1 + n2;
                if(this.op == '-') return n1 - n2;
                if(this.op == '*') return n1 * n2;
                if(this.op == '/') return n1 / n2;
            }
        }
        
        return numbers.res();
    }

    function geradorOperador(length) {
        var resultado = '';
        var operadores = '+-*/';
        var operadoresLength = operadores.length;
        for ( var i = 0; i < length; i++ ) {
            resultado += operadores.charAt(Math.floor(Math.random() * operadoresLength));
        }
        return resultado;
     }

}

