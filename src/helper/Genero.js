export function handleGenero(sigla) {
    switch(sigla){
        case 'M':
            return 'Masculino'
        
        case 'F':
            return 'Feminino'

        case 'P':
            return 'Outro'
        
        default:
            return 'Indefina'
    }
    
}