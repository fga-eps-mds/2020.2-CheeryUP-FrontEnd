import GraficoRegiao from '../../components/Graficos/GraficoRegiao'
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import "../../style/pages/DashboardsGerais/DashboardsGerais.css";

function oi(params) {

    return <>
    <div className="Navbar">
    <NavbarPsic />
    </div>
    <div className="graficos">
        <h2>Gráfico pacientes por região</h2>
        <GraficoRegiao />
    </div>
    </>
}


export default oi