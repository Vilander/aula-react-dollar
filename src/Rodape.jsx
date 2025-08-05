import './Rodape.css'

function Rodape() {
    return (
        <>
            <footer className='text-center bg-dark text-white p-3'>
                <p>
                    Desenvolvido por &nbsp;
                    <a href="https://www.linkedin.com/in/vilander-costa/" target='blank' className='text-danger'>Vilander Costa</a>
                    &nbsp; no &nbsp;
                    <a href="https://sp.senac.br/americana" target='blank' className='text-danger'>Senac Americana</a>
                </p>
            </footer>
        </>
    )
}

export default Rodape