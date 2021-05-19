export function handleRegiao(sigla) {
    switch(sigla){
        case 'AC':
            return 'Águas Claras'
        case 'AS':
            return 'Asa Sul'
        case 'AN':
            return 'Asa Norte'
        case 'AR':
            return 'Arniqueira'
        case 'BZ':
            return 'Brazlândia'
        case 'CA':
            return 'Candangolândia'
        case 'CI':
            return 'Ceilândia'
        case 'CZ':
            return 'Cruzeiro'
        case 'FE':
            return 'Fercal'
        case 'GA':
            return 'Gama'
        case 'GR':
            return 'Guará'
        case 'IT':
            return 'Itapoã'
        case 'JB':
            return 'Jardim Botânico'
        case 'LS':
            return 'Lago Sul'
        case 'LN':
            return 'Lago Norte'
        case 'NB':
            return 'Núcleo Bandeirante'
        case 'PW':
            return 'Park Way'
        case 'PA':
            return 'Paranoá'
        case 'PL':
            return 'Planaltina'
        case 'PP':
            return 'Plano Piloto'
        case 'RE':
            return 'Recanto das Emas'
        case 'RF':
            return 'Riacho Fundo'
        case 'SA':
            return 'Samambaia'
        case 'SM':
            return 'Santa Maria'
        case 'SB':
            return 'São Sebastião'
        case 'SCIA':
            return 'SCIA'
        case 'RFII':
            return 'Riacho Fundo'
        case 'SIA':
            return 'SIA'
        case 'SO':
            return 'Sobradinho'
        case 'SOII':
            return 'Sobradinho 2'
        case 'SN':
            return 'Sol Nascente'
        case 'SD':
            return 'Sudoeste'
        case 'TA':
            return 'Taguatinga'
        case 'VA':
            return 'Varjão'
        case 'VP':
            return 'Vicente Pires'
        case 'EO':
            return 'Entre Outros'
        default:
            return 'Indefinido'
    }
}