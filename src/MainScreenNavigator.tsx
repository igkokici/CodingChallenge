import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import OverviewScreen from './screens/OverviewScreen'
import CategoryScreen from './screens/CategoryScreen'
import { Ionicons, Feather } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const Übersicht = () => <></>
const Projekte = () => <></>
const Profil = () => <></>



const CustomHeaderLeft = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.headerLeftContainer} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={18} color="white" style={styles.headerIcon} />
            <Feather name="home" size={18} style={styles.headerIcon} color="white"/>
            <Text style={styles.headerTitle}>Wohnen</Text>
        </TouchableOpacity>
    )
}


const OverviewStack = () => (
  <Stack.Navigator initialRouteName="Overview">
    <Stack.Screen name="Overview" component={OverviewScreen} options = {{
        headerShown: false
    }}/>
    <Stack.Screen name="Wohnen" component={CategoryScreen} options={{
        headerStyle: styles.headerStyle,
        headerTitle: '',
        headerLeft: ()=> <CustomHeaderLeft />
    }}/>
  </Stack.Navigator>
)

const InsideAppStack = () => (
  <Tab.Navigator initialRouteName='Verstehen'>
    <Tab.Screen 
        name='Übersicht' 
        component={Übersicht} 
        options={{ tabBarIcon: () => (
            <Image
              source={require('../assets/living.jpg')}
              style={styles.icons}
            />
          )}} 
        listeners={{ tabPress: e => e.preventDefault() }}/>
    <Tab.Screen 
        name='Verstehen' 
        component={OverviewStack} 
        options={{ headerShown: false, tabBarLabelStyle: styles.activeText, 
        tabBarIcon: () => (
            <Image 
                source={require('../assets/understand.jpg')}
                style={styles.icons}
            />
        )}}
    />
    <Tab.Screen 
        name='Projekte' 
        component={Projekte} 
        options={{ tabBarIcon: () => (
            <Image
              source={require('../assets/project.jpg')}
              style={styles.icons}
            />
        )}} 
        listeners={{ tabPress: e => e.preventDefault() }}
    />
    <Tab.Screen 
        name='Dein Profil' 
        component={Profil} 
        options={{ tabBarIcon: () => (
            <Image
                source={require('../assets/profile.jpg')}
                style={styles.icons}
            />
        )}} 
        listeners={{ tabPress: e => e.preventDefault() }}/>
  </Tab.Navigator>
)

export const MainScreenNavigator = () => (
    <NavigationContainer>
        <InsideAppStack />
    </NavigationContainer>
)

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#FF712C',
    },
    headerLeftContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerIcon: {
        marginRight: 17
    },
    headerTitle: {color: 'white', fontSize: 14, lineHeight: 24, fontWeight: '400'},
    icons: {
        width: 20, 
        height: 20
    },
    activeText: {
        color: '#12173D'
    }
})

