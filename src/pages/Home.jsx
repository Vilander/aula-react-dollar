import CalcDollar from '../CalcDollar'
import CalcCm from '../CalcCm'
import CalcMetros from '../CalcMetros'
import Banner from '../Banner'

function Home(){
    return (
        <>
            {/* <h2 className="display-5 text-center">Home</h2> */}
            <Banner />
            <CalcDollar />
            <CalcCm />
            <CalcMetros />


        </>
    )
}

export default Home