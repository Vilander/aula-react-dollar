import './CalcMetros.css';
import { TfiRulerAlt2 } from "react-icons/tfi";


function CalcMetros() {

    const calcularM = (function(){
        const centimetro = document.getElementById('centimetro').value
        const valorMetro = 100
        const total = centimetro/valorMetro
            if (centimetro ===''){
                alert("O Campo está vazio, digite um número válido")
            }else if (isNaN(centimetro)){
                alert("O valor digitado não é um número válido")
            }else{
                alert("A medida em metros é: "+total.toFixed(2)+"m")
            }
        

    })

    return (
        <>  
            <a className="nav-link" href="#">Conversor de centimetro em Metros</a>
            <form className="w-25 m-auto pt-5 pb-5">
                <div className="form-group mb-3">
                    <label htmlFor="reais">Digite o valor em centímetros</label>
                    <input type="text" className='form-control' id='centimetro'/>
                </div>
                <button type='button' onClick={calcularM} className='btn btn-primary w-100 liquid'><TfiRulerAlt2 size={20} color='inherit'/> Calcular</button>
            </form>
        </>
    );
}


export default CalcMetros