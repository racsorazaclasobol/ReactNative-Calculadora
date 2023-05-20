import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    calculadoraContainer: { //En ios no mostraba el padding de arriba
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPequeno: {
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'right',
        fontSize: 20,
    },
    filaBotones: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    textoBoton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 35,
        color: 'white',
        // fontWeight: 'bold'
    }
});