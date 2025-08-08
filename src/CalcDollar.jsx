import './CalcDollar.css';
import { TbPigMoney } from "react-icons/tb";

function CalcDollar() {

    const calcular = (function () {
        const reais = document.getElementById('reais').value
            if (reais === '') {
                alert("O Campo 'VALOR EM REAIS' está vazio, digite um número válido")
            } else if (isNaN(reais)) {
                alert("O valor digitado no campo 'VALOR EM REAIS' não é um número válido")
            } else {
                reais
            }
        const cotacao = document.getElementById('cotacao').value
            if (cotacao === '') {
                alert("O Campo 'COTAÇÃO' está vazio, digite um número válido")
            } else if (isNaN(cotacao)) {
                alert("O valor digitado no campo 'COTAÇÃO' não é um número válido")
            } else {
                cotacao
            }
        const total = reais / cotacao
            if (isNaN(reais || cotacao)){
                alert("Campos preenchidos erroneamente, tente outra vez!")
            }else if( reais || cotacao ===''){
                alert("Campos preenchidos erroneamente, tente outra vez!")
            }else{
                alert("O valor do seu dinheiro convertido em Dólar é: $"+total)
            }
        
             

    })

    return (
        <>
            <form className="card w-25 m-auto pt-5 pb-5">
                <div className="form-group mb-3">
                    <label htmlFor="reais">Valor em Reais</label>
                    <input type="text" className='form-control' id='reais' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="cotacao">Cotação do Dólar</label>
                    <input type="text" className='form-control' id='cotacao' />
                </div>
                <button type='button' onClick={calcular} className='btn btn-primary w-100 liquid'><TbPigMoney size={20} color='inherit' /> Calcular</button>
            </form>
        </>
    );
}


export default CalcDollar