import GraficoRegiao from '../../components/Graficos/GraficoRegiao'
import NavbarPsicPerfil from '../../components/Navbar/NavbarPsicPerfil'
import "../../style/pages/DashboardsGerais/DashboardsGerais.css";

function oi(params) {

    return <>
    <div className="Navbar">
    <NavbarPsicPerfil/>
    </div>
    <div className="graficos">
        <h2>Gráfico pacientes por região</h2>
        <GraficoRegiao />
    </div>
    </>
}


export default oi