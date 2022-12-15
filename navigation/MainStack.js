import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Inicio from '../pages/Inicio';
import Historia from "../pages/Historia";
import AcercaDe from "../pages/AcercaDe";
import Albergues from "../pages/Albergues";
import Login from "../pages/Login";
import Mapa from "../pages/Mapa";
import MedidasPreventivas from "../pages/MedidasPreventivas";
import Miembros from "../pages/Miembros";
import Noticias from "../pages/Noticias";
import Servicios from "../pages/Servicios";
import Videos from "../pages/Videos";
import Voluntario from "../pages/Voluntario";
import CambiarContrasena from "../pages/acceso/CambiarContrasena";
import MapaSituaciones from "../pages/acceso/MapaSituaciones";
import MisSituaciones from "../pages/acceso/MisSituaciones";
import MisNoticias from "../pages/acceso/MisNoticias";
import ReportarSituacion from "../pages/acceso/ReportarSituacion";
import Albergue from "../pages/Albergue";
import MedidaPreventiva from "../pages/MedidaPreventiva";
import * as SecureStore from 'expo-secure-store';
import CerrarSesion from "../pages/CerrarSesion";
import App from "../App";
import Situacion from "../pages/acceso/Situacion";

const Menu = createDrawerNavigator();

export default class MainStack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          logueado: false
        }
      }
    // const [logueado, onLoginChange] = React.useState(false);
    // async function getValueFor(key) {
    //     let result = await SecureStore.getItemAsync(key);
    //     console.log("Result: " + logueado);
    //     if (result) {
    //         onLoginChange(true);
    //     } else {
    //         onLoginChange(false);
    //     }
    //   }

    // React.useEffect(() => {
    //     getValueFor("token");
    // }, []);
    handleReaload = (status) => {
        this.setState({logueado: status});
    }

    componentDidMount()
    {
        this.setState({logueado: false});
    }
    render() {
        // console.log(this.state.logueado);
        if(!this.state.logueado)
        {
            return (
            <NavigationContainer>
                <Menu.Navigator 
                    screenOptions={ {
                    headerStyle: {
                        backgroundColor: "#FF7000"
                    },
                    }}
                    >
                    <Menu.Screen 
                        name="Inicio" 
                        component={Inicio}
                        />
                    <Menu.Screen 
                        name="Historia" 
                        component={Historia} />
                    <Menu.Screen 
                        name="Servicios" 
                        component={Servicios} />
                    <Menu.Screen 
                        name="Noticias" 
                        component={Noticias} />
                    <Menu.Screen 
                        name="Videos" 
                        component={Videos} />
                    <Menu.Screen 
                        name="Albergues" 
                        component={Albergues} />
                    <Menu.Screen 
                        name="Mapa" 
                        component={Mapa} />
                    <Menu.Screen 
                        name="Medidas Preventivas" 
                        component={MedidasPreventivas} />
                    <Menu.Screen 
                        name="Miembros" 
                        component={Miembros} />
                    <Menu.Screen 
                        name="Quiero ser Voluntario" 
                        component={Voluntario} />
                    <Menu.Screen 
                        name="Acerca De" 
                        component={AcercaDe} />
                    <Menu.Screen 
                        name="Iniciar Sesión" 
                        component={Login}
                        initialParams={{ handleReaload: this.handleReaload }} />
                    <Menu.Screen 
                        name="Albergue" 
                        component={Albergue}
                        options={{
                            drawerItemStyle: { display: 'none' }
                        }}/>
                    <Menu.Screen 
                        name="Medida Preventiva" 
                        component={MedidaPreventiva}
                        options={{
                            drawerItemStyle: { display: 'none' }
                        }}/>
                    {/* <Menu.Screen 
                        name="App" 
                        component={App}
                        options={{
                            drawerItemStyle: { display: 'none' }
                        }}/> */}
                </Menu.Navigator>
            </NavigationContainer>
            );
        }else
        {
            return (
                <NavigationContainer>
                    <Menu.Navigator 
                    screenOptions={ {
                        headerStyle: {
                        backgroundColor: "#FF7000"
                        },
                    }}
                    >
                        <Menu.Screen 
                            name="Noticias" 
                            component={Noticias} />
                        <Menu.Screen 
                            name="Reportar Situacion" 
                            component={ReportarSituacion} />
                        <Menu.Screen 
                            name="Mis Situaciones" 
                            component={MisSituaciones} />
                        <Menu.Screen 
                            name="Mapa de Situaciones" 
                            component={MapaSituaciones} />
                        <Menu.Screen 
                            name="Cambiar Contrasena" 
                            component={CambiarContrasena} />
                        <Menu.Screen 
                            name="Cerrar Sesión" 
                            component={CerrarSesion}
                            initialParams={{ handleReaload: this.handleReaload }} />
                        <Menu.Screen 
                            name="Albergue" 
                            component={Albergue}
                            options={{
                                drawerItemStyle: { display: 'none' }
                            }}/>
                        <Menu.Screen 
                            name="Medida Preventiva" 
                            component={MedidaPreventiva}
                            options={{
                                drawerItemStyle: { display: 'none' }
                            }}/>
                        <Menu.Screen 
                            name="Inicio" 
                            component={Inicio}
                            options={{
                                drawerItemStyle: { display: 'none' }
                            }}/>
                        <Menu.Screen 
                            name="Situacion" 
                            component={Situacion}
                            options={{
                                drawerItemStyle: { display: 'none' }
                            }}/>
                            {/* <Menu.Screen 
                        name="App" 
                        component={App}
                        options={{
                            drawerItemStyle: { display: 'none' }
                        }}/> */}
                    </Menu.Navigator>
                </NavigationContainer>
            );
        }
    }
}