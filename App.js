// Importa o módulo 'React' do pacote 'react'
import React from 'react'
// Importa os módulos 'View' e 'StyleSheet' do pacote 'react-native'
import { View, StyleSheet } from 'react-native'

// Importa o componente 'Aleatorio' do arquivo './components/Aleatorio'
import Aleatorio from './components/Aleatorio'

// Define um componente funcional anônimo como o componente principal do aplicativo
export default () => (
    // Retorna um componente 'View' com um estilo aplicado
    <View style={style.App}>
        {/* Renderiza o componente 'Aleatorio' com propriedades 'min' e 'max' */}
        <Aleatorio min={1} max={60} />
    </View>
)

// Define um objeto de estilo utilizando 'StyleSheet.create'
const style = StyleSheet.create({
    // Define o estilo do componente 'View' com a chave 'App'
    App: {
        // Define a cor de fundo como vermelho escuro
        backgroundColor: '#A00',
        // Define que o componente pode crescer para ocupar a área inteira disponível
        flexGrow: 1,
        // Alinha os itens centralmente verticalmente
        justifyContent: "center",
        // Alinha os itens centralmente horizontalmente
        alignItems: "center",
        // Aplica um espaçamento uniforme em todas as direções dentro do componente
        padding: 20
    }
})
