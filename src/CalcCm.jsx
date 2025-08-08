import './CalcCm.css';
import { TbRulerMeasure2 } from "react-icons/tb";


function CalcCm() {

    const calcularCm = (function () {
        const metro = document.getElementById('metro').value
        const valorMetro = 100
        const total = metro * valorMetro
            if (metro === '') {
                alert("O Campo está vazio, digite um número válido")
            } else if (isNaN(metro)) {
                alert("O valor digitado não é um número válido")
            } else {
                alert("A medida em cm é: " + total.toFixed(0) + "cm")
            }
            

    })

    return (
        <>
            <div className='card-calcs3'>
                <a className="nav-link" href="#">Conversor de metros em centímetro</a>
                <form className="w-25 m-auto pt-5 pb-5">
                    <div className="form-group mb-3">
                        <label htmlFor="reais">Digite o valor em metros</label>
                        <input type="text" className='form-control' id='metro' />
                    </div>
                    <button type='button' onClick={calcularCm} className='btn btn-primary w-100 liquid'><TbRulerMeasure2 size={20} color='inherit' /> Calcular</button>
                </form>
            </div>
        </>
    );
}


export default CalcCm