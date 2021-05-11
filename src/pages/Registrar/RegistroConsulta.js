import React, { Component, Fragment,  } from 'react';
import {Radio, Form} from 'semantic-ui-react';
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import '../../style/pages/Cadastro/RegistroConsulta.css';
import axiosInstance from '../../services/apiToken';

class RegistroConsulta extends Component{
    constructor(props){
        super(props);
        this.state={
            produtividade:'0',
            problemasPessoais: '0',
            humor: '0', 
            estabilidadeDeEmocoes: '0',
            interessePelaVida: '0',
            capacidadeDeSituacoesDificeis: '0',
            convivioFamiliar: '0',
            energiaSono: '0',
            convivioAmigos: '0',
            conhecimentoDoenca: '0',
            criseEspacoInterior: '0',
            exposicaoRisco: '0',
            qualidadeSono: '0',
            tentativaSuicidio: '0',
            qualidadeEscuta: '0',
            maturidadeEmocional: '0',
            qualidadeNutritiva: '0',
            autoMedicacao: '0',
            intoleranciaFrustracao: '0',
            date:''
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const dataPac = new FormData();
        var data = new Date();
        const dataConsulta = data.getFullYear() + '-' + data.getMonth + '-' + data.getDate()
        dataPac.append("data", this.dataConsulta);
        /* pegar o id do paciente */
        dataPac.append("produtividade", this.produtividade);
        dataPac.append("problemasPessoais", this.problemasPessoais);
        dataPac.append("humor", this.humor);
        dataPac.append("estabilidadeDeEmoções", this.estabilidadeDeEmocoes);
        dataPac.append("interessePelaVida", this.interessePelaVida);
        dataPac.append("capacidadeDeSituaçõesDificeis", this.capacidadeDeSituacoesDificeis);
        dataPac.append("convivioFamiliar", this.convivioFamiliar);
        dataPac.append("energiaSono", this.energiaSono);
        dataPac.append("convivioAmigos", this.convivioAmigos);
        dataPac.append("conhecimentoDoenca", this.conhecimentoDoenca);
        dataPac.append("criseEspaçoInterior", this.criseEspacoInterior);
        dataPac.append("exposiçãoRisco", this.exposicaoRisco);
        dataPac.append("qualidadeSono", this.qualidadeSono);
        dataPac.append("tentativaSuicidio", this.tentativaSuicidio);
        dataPac.append("qualidadeEscuta", this.qualidadeEscuta);
        dataPac.append("maturidadeEmocional", this.maturidadeEmocional);
        dataPac.append("qualidadeNutritiva", this.qualidadeNutritiva);
        dataPac.append("autoMedicacao", this.autoMedicacao);
        dataPac.append("intoleranciaFrustração", this.intoleranciaFrustracao);


        await axiosInstance
          .get("api/psicologos/junin/pacientes/", dataPac)
          .then((data) => {
            alert("Cadastro efetuado passado!");
            console.log(dataPac);
          })
          .catch((err) => alert("Cadastro de Paciente inválido!"));
      };

    
    render(){
        return(
            <Fragment>
                <NavbarPsic/>

                
                <Form> 
                    <h2>Registrar consulta</h2>

                    <Form.Field>
                        <input type="date" />
                    </Form.Field>

         {/*problemasPessoais*/}
                    <Form.Field>
                        <label>Problemas pessoais: <b>{this.state.problemasPessoais}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='problemasPessoais'
                            value='1'
                            checked={this.state.problemasPessoais === '1'}
                            onChange={e => this.setState({ problemasPessoais: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='problemasPessoais'
                            value='0'
                            checked={this.state.problemasPessoais === '0'}
                            onChange={e => this.setState({ problemasPessoais: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='problemasPessoais'
                            value='-1'
                            checked={this.state.problemasPessoais === '-1'}
                            onChange={e => this.setState({ problemasPessoais: '-1'})}
                        />
                    </Form.Field>

     {/*humor*/}
                    <Form.Field>
                        <label>Humor: <b>{this.state.humor}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='humor'
                            value='1'
                            checked={this.state.humor === '1'}
                            onChange={e => this.setState({ humor: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='humor'
                            value='0'
                            checked={this.state.humor === '0'}
                            onChange={e => this.setState({ humor: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='humor'
                            value='-1'
                            checked={this.state.humor === '-1'}
                            onChange={e => this.setState({ humor: '-1'})}
                        />
                    </Form.Field>

     {/*estabilidadeDeEmocoes*/}
                    <Form.Field>
                        <label>Estabilidade de emoções: <b>{this.state.estabilidadeDeEmocoes}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='estabilidadeDeEmocoes'
                            value='1'
                            checked={this.state.estabilidadeDeEmocoes === '1'}
                            onChange={e => this.setState({ estabilidadeDeEmocoes: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='estabilidadeDeEmocoes'
                            value='0'
                            checked={this.state.estabilidadeDeEmocoes === '0'}
                            onChange={e => this.setState({ estabilidadeDeEmocoes: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='estabilidadeDeEmocoes'
                            value='-1'
                            checked={this.state.estabilidadeDeEmocoes === '-1'}
                            onChange={e => this.setState({ estabilidadeDeEmocoes: '-1'})}
                        />
                    </Form.Field>

     {/*interessePelaVida*/}
                    <Form.Field>
                        <label>Interesse pela vida: <b>{this.state.interessePelaVida}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='interessePelaVida'
                            value='1'
                            checked={this.state.interessePelaVida === '1'}
                            onChange={e => this.setState({ interessePelaVida: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='interessePelaVida'
                            value='0'
                            checked={this.state.interessePelaVida === '0'}
                            onChange={e => this.setState({ interessePelaVida: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='interessePelaVida'
                            value='-1'
                            checked={this.state.interessePelaVida === '-1'}
                            onChange={e => this.setState({ interessePelaVida: '-1'})}
                        />
                    </Form.Field>

     {/*capacidadeDeSituacoesDificeis*/}
                    <Form.Field>
                        <label>Capacidade de situações dificeis: <b>{this.state.capacidadeDeSituacoesDificeis}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='capacidadeDeSituacoesDificeis'
                            value='1'
                            checked={this.state.capacidadeDeSituacoesDificeis === '1'}
                            onChange={e => this.setState({ capacidadeDeSituacoesDificeis: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='capacidadeDeSituacoesDificeis'
                            value='0'
                            checked={this.state.capacidadeDeSituacoesDificeis === '0'}
                            onChange={e => this.setState({ capacidadeDeSituacoesDificeis: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='capacidadeDeSituacoesDificeis'
                            value='-1'
                            checked={this.state.capacidadeDeSituacoesDificeis === '-1'}
                            onChange={e => this.setState({ capacidadeDeSituacoesDificeis: '-1'})}
                        />
                    </Form.Field>

     {/*convivioFamiliar*/}
                    <Form.Field>
                        <label>Convivio familiar: <b>{this.state.convivioFamiliar}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='convivioFamiliar'
                            value='1'
                            checked={this.state.convivioFamiliar === '1'}
                            onChange={e => this.setState({ convivioFamiliar: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='convivioFamiliar'
                            value='0'
                            checked={this.state.convivioFamiliar === '0'}
                            onChange={e => this.setState({ convivioFamiliar: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='convivioFamiliar'
                            value='-1'
                            checked={this.state.convivioFamiliar === '-1'}
                            onChange={e => this.setState({ convivioFamiliar: '-1'})}
                        />
                    </Form.Field>

     {/*energiaSono*/}
                    <Form.Field>
                        <label>Energia sono: <b>{this.state.energiaSono}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='energiaSono'
                            value='1'
                            checked={this.state.energiaSono === '1'}
                            onChange={e => this.setState({ energiaSono: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='energiaSono'
                            value='0'
                            checked={this.state.energiaSono === '0'}
                            onChange={e => this.setState({ energiaSono: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='energiaSono'
                            value='-1'
                            checked={this.state.energiaSono === '-1'}
                            onChange={e => this.setState({ energiaSono: '-1'})}
                        />
                    </Form.Field>
        
     {/*convivioAmigos*/}
                     <Form.Field>
                        <label>Convivio amigos: <b>{this.state.convivioAmigos}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='convivioAmigos'
                            value='1'
                            checked={this.state.convivioAmigos === '1'}
                            onChange={e => this.setState({ convivioAmigos: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='convivioAmigos'
                            value='0'
                            checked={this.state.convivioAmigos === '0'}
                            onChange={e => this.setState({ convivioAmigos: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='convivioAmigos'
                            value='-1'
                            checked={this.state.convivioAmigos === '-1'}
                            onChange={e => this.setState({ convivioAmigos: '-1'})}
                        />
                    </Form.Field>
                    
     {/*conhecimentoDoenca*/}
                    <Form.Field>
                        <label>Conhecimento doenca: <b>{this.state.conhecimentoDoenca}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='conhecimentoDoenca'
                            value='1'
                            checked={this.state.conhecimentoDoenca === '1'}
                            onChange={e => this.setState({ conhecimentoDoenca: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='conhecimentoDoenca'
                            value='0'
                            checked={this.state.conhecimentoDoenca === '0'}
                            onChange={e => this.setState({ conhecimentoDoenca: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='conhecimentoDoenca'
                            value='-1'
                            checked={this.state.conhecimentoDoenca === '-1'}
                            onChange={e => this.setState({ conhecimentoDoenca: '-1'})}
                        />
                    </Form.Field>

     {/*criseEspacoInterior*/}
                    <Form.Field>
                        <label>Crise espaço interior: <b>{this.state.criseEspacoInterior}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='criseEspacoInterior'
                            value='1'
                            checked={this.state.criseEspacoInterior === '1'}
                            onChange={e => this.setState({ criseEspacoInterior: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='criseEspacoInterior'
                            value='0'
                            checked={this.state.criseEspacoInterior === '0'}
                            onChange={e => this.setState({ criseEspacoInterior: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='criseEspacoInterior'
                            value='-1'
                            checked={this.state.criseEspacoInterior === '-1'}
                            onChange={e => this.setState({ criseEspacoInterior: '-1'})}
                        />
                    </Form.Field>
                    
     {/*exposiçãoRisco*/}
                    <Form.Field>
                        <label>Exposição risco: <b>{this.state.exposicaoRisco}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='exposicaoRisco'
                            value='1'
                            checked={this.state.exposicaoRisco === '1'}
                            onChange={e => this.setState({ exposicaoRisco: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='exposicaoRisco'
                            value='0'
                            checked={this.state.exposicaoRisco === '0'}
                            onChange={e => this.setState({ exposicaoRisco: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='exposicaoRisco'
                            value='-1'
                            checked={this.state.exposicaoRisco === '-1'}
                            onChange={e => this.setState({ exposicaoRisco: '-1'})}
                        />
                    </Form.Field>

     {/*qualidadeSono*/}
                    <Form.Field>
                        <label>Qualidade sono: <b>{this.state.qualidadeSono}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='qualidadeSono'
                            value='1'
                            checked={this.state.qualidadeSono === '1'}
                            onChange={e => this.setState({ qualidadeSono: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='qualidadeSono'
                            value='0'
                            checked={this.state.qualidadeSono === '0'}
                            onChange={e => this.setState({ qualidadeSono: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='qualidadeSono'
                            value='-1'
                            checked={this.state.qualidadeSono === '-1'}
                            onChange={e => this.setState({ qualidadeSono: '-1'})}
                        />
                    </Form.Field>

     {/*tentativaSuicidio*/}
                    <Form.Field>
                        <label>Tentativa suicidio: <b>{this.state.tentativaSuicidio}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='tentativaSuicidio'
                            value='1'
                            checked={this.state.tentativaSuicidio === '1'}
                            onChange={e => this.setState({ tentativaSuicidio: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='tentativaSuicidio'
                            value='0'
                            checked={this.state.tentativaSuicidio === '0'}
                            onChange={e => this.setState({ tentativaSuicidio: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='tentativaSuicidio'
                            value='-1'
                            checked={this.state.tentativaSuicidio === '-1'}
                            onChange={e => this.setState({ tentativaSuicidio: '-1'})}
                        />
                    </Form.Field>


      {/*qualidadeEscuta*/}
            <Form.Field>
                        <label>Qualidade escuta: <b>{this.state.qualidadeEscuta}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='qualidadeEscuta'
                            value='1'
                            checked={this.state.qualidadeEscuta === '1'}
                            onChange={e => this.setState({ qualidadeEscuta: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='qualidadeEscuta'
                            value='0'
                            checked={this.state.qualidadeEscuta === '0'}
                            onChange={e => this.setState({ qualidadeEscuta: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='qualidadeEscuta'
                            value='-1'
                            checked={this.state.qualidadeEscuta === '-1'}
                            onChange={e => this.setState({ qualidadeEscuta: '-1'})}
                        />
                    </Form.Field>

     {/*maturidadeEmocional*/}
                    <Form.Field>
                        <label>Maturidade emocional: <b>{this.state.maturidadeEmocional}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='maturidadeEmocional'
                            value='1'
                            checked={this.state.maturidadeEmocional === '1'}
                            onChange={e => this.setState({ maturidadeEmocional: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='maturidadeEmocional'
                            value='0'
                            checked={this.state.maturidadeEmocional === '0'}
                            onChange={e => this.setState({ maturidadeEmocional: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='maturidadeEmocional'
                            value='-1'
                            checked={this.state.maturidadeEmocional === '-1'}
                            onChange={e => this.setState({ maturidadeEmocional: '-1'})}
                        />
                    </Form.Field>

     {/*qualidadeNutritiva*/}
                    <Form.Field>
                        <label>Qualidade nutritiva: <b>{this.state.qualidadeNutritiva}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='qualidadeNutritiva'
                            value='1'
                            checked={this.state.qualidadeNutritiva === '1'}
                            onChange={e => this.setState({ qualidadeNutritiva: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='qualidadeNutritiva'
                            value='0'
                            checked={this.state.qualidadeNutritiva === '0'}
                            onChange={e => this.setState({ qualidadeNutritiva: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='qualidadeNutritiva'
                            value='-1'
                            checked={this.state.qualidadeNutritiva === '-1'}
                            onChange={e => this.setState({ qualidadeNutritiva: '-1'})}
                        />
                    </Form.Field>
        
     {/*autoMedicacao*/}
                    <Form.Field>
                        <label>Auto medicação: <b>{this.state.autoMedicacao}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='autoMedicacao'
                            value='1'
                            checked={this.state.autoMedicacao === '1'}
                            onChange={e => this.setState({ autoMedicacao: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='autoMedicacao'
                            value='0'
                            checked={this.state.autoMedicacao === '0'}
                            onChange={e => this.setState({ autoMedicacao: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='autoMedicacao'
                            value='-1'
                            checked={this.state.autoMedicacao === '-1'}
                            onChange={e => this.setState({ autoMedicacao: '-1'})}
                        />
                    </Form.Field>

     {/*intoleranciaFrustracao*/}
                    <Form.Field>
                        <label>Intolerancia a frustração: <b>{this.state.intoleranciaFrustracao}</b></label>
                        <Radio
                            label='Houve melhora'
                            name='intoleranciaFrustracao'
                            value='1'
                            checked={this.state.intoleranciaFrustracao === '1'}
                            onChange={e => this.setState({ intoleranciaFrustracao: '1'})}
                        />
                        <Radio
                            label='Não houve mudanças'
                            name='intoleranciaFrustracao'
                            value='0'
                            checked={this.state.intoleranciaFrustracao === '0'}
                            onChange={e => this.setState({ intoleranciaFrustracao: '0'})}
                        />
                        <Radio
                            label='Situação piorou'
                            name='intoleranciaFrustracao'
                            value='-1'
                            checked={this.state.intoleranciaFrustracao === '-1'}
                            onChange={e => this.setState({ intoleranciaFrustracao: '-1'})}
                        />
                    </Form.Field>

                    <Form.Button onChange={this.handleSubmit}>Registrar</Form.Button>
                </Form>
            </Fragment>


        )
    }
}

export default RegistroConsulta;