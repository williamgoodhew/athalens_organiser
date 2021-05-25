import {Dimensions, Platform} from 'react-native';
import {colors} from './colors';

const size = Dimensions.get('window').height                                // Get she phones screen height

let gradient;
if (Platform.OS === 'ios') {
    gradient = ['#fff', '#cbcdcd']
} else {
    gradient = ['#fff', '#d8dada']
}
export const containerStyle = {
    scrollView: {
        backgroundColor: 'transparent',
        height: '100%',
    },
    sectionContainer: {
        marginTop: 75,
        paddingHorizontal: 24,
    },
    midContainer: {
        paddingHorizontal: 10,
    },
    helpTitle: {
        paddingHorizontal: 10,
        marginTop: 80,
    },
    bottomContainer: {
      padding: 20,
    },
    sectionContainerList: {
        marginTop: 75,
        paddingHorizontal: 24,
        paddingBottom: 100
    },
    gradient: {
        width: '100%',
        height: '100%',
        flex: 1,
        height: Dimensions.get('window').height
    },
    gradientList: {
        flex: 1,
        height: Dimensions.get('window').height
    },
    dashboardGradient: {
        width: '100%',
        height: '100%',
        
    },
    dashboardMainSection: {
         height: '80%',
        //  backgroundColor : "black",
    },
    dashboardSection1: {
        // height: Dimensions.get('window').height * 0.40,
        height: '48%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "20%",
        // backgroundColor : "red",
    },
    dashboardSection1b: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        flexDirection: 'row',
        marginRight: 0,
        // backgroundColor : "yellow",
        marginTop: "-20%",
    },
    dashboardSection1SubView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    dashboardSection2: {
        height: '28%',
        marginTop: "5%",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        // backgroundColor : "blue",
    },
    dashboardSection2SubView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        //overflow: 'visible'
    },
    dashboardSection3: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        flexDirection: 'column',
        marginTop: "-12%", 
    },
    dashboardSection3SubView: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
        flex:1,
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'row',
    },
    dashboardSection4: {
        flexDirection: 'row',
        backgroundColor: colors.headerBackground,
        height: '100%',
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderTopColor: "#707070",
    
    },
    dashboardSection4Icons: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: colors.headerBackground,
        justifyContent: 'space-evenly',
        marginTop: 10,
        borderRightWidth: 1,
        borderRightColor: "#707070",
    },    
    dashboardSection4Separator: {
    
        borderRightWidth: 1,
        borderRightColor: "#707070",
        height: 60,
    },
    dashboardUnits:{
        alignItems: 'center',
        flexDirection: 'row',
        marginBoittom:  Platform.OS === 'android' ? '2%' : 0,
        // backgroundColor: 'orange',
    },
    dashboardUnitsSymbols:{
        marginTop:  Platform.OS === 'android' ? 0: '10%',
        marginBottom:  Platform.OS === 'android' ? '2.5%' : 0,
        // backgroundColor: 'blue',
    },
    dashboardEcoUnits:{
        alignItems: 'center',
        flexDirection: 'row',
        // marginTop:"-15%",
        
    },
    dashboardOdometerUnits:{
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:"-22%",
    },
    dashboardEco:{
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
        backgroundColor: "red",
        
        marginRight: 20,
    },
    dashboardSpeedCalc1: {
        marginTop:  Platform.OS === 'android' ? size * -0.12 : size * -0.10,  
    },
    dashboardSpeedCalc2: {
        marginTop:  size*-0.1//-120 ,
    },
    gradientDashboardLocation: [0.6,1],
    gradientColor: gradient,
    gradientDashboardColor: ['#fff', '#e5e6e6'], //gradientDashboardColor: ['#fff', '#d8dada'],
    gradientLocation: [0.6,1],
    findScooterTopContainer: {
        marginTop: Dimensions.get('window').height * 0.1,
        paddingHorizontal: 24,
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
      },
    findScooterBottomContainer: {
        marginTop: Dimensions.get('window').height * 0.05,
        paddingHorizontal: 24,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    findScooterScrollView: {
        alignItems: 'center',
    },
    overlayWarning: {
        width: '80%',
        height: 'auto',
        justifyContent: 'center',
        borderRadius: 15,
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    menuButton: {
        width: Dimensions.get('window').width * 0.7,
        borderBottomColor: colors.primaryGrey,
        borderBottomWidth: 1,
    },
    menuLinearGradient: {
        height: '100%',
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    profileTopView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.primaryGrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupInstructionsView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    scooterGuide: {
        paddingHorizontal: 10,
        marginTop: 20,
    },
    scooterGuideButton: {
        marginHorizontal: '5%',
        bottom: Dimensions.get('window').height * 0.07
    }
        
}