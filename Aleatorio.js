// Importa o módulo 'React' do pacote 'react'
import React from 'react'
// Importa o componente 'Text' do pacote 'react-native'
import { Text } from "react-native"
// Importa o módulo 'Estilo' do arquivo './estilo'
import Estilo from './estilo'

// Define um componente funcional com o nome 'Aleatorio' e parâmetro 'props'
export default props => {
    // Calcula a diferença entre o valor máximo e o valor mínimo, e adiciona 1
    const delta = props.max - props.min + 1
    // Gera um número aleatório dentro do intervalo [min, max] e o armazena em 'aleatorio'
    const aleatorio = parseInt(Math.random() * delta) + props.min
    // Retorna um componente 'Text' com um estilo aplicado e o valor aleatório
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio} 
        </Text>
    )
}
