//Any text styling goes in here

import {colors} from './colors';
import {Dimensions} from "react-native";
import {fontSizes, dashboardFontSizes, fontWeight} from './fontSizes';
const size = Dimensions.get('window').height

export const textStyle = {
    placeholder: {
        color: colors.primaryGrey,
        fontSize: fontSizes.small,
        fontWeight: fontWeight.lightMedium,
    },
    label: {
        color: colors.primaryBlack,
        fontSize: fontSizes.medium,
        fontWeight: fontWeight.medium,
        letterSpacing: -0.5
    },
    input: {
        color: colors.primaryBlack,
        fontSize: fontSizes.small,
        lineHeight: fontSizes.small,
        height: fontSizes.small,
        fontWeight: fontWeight.medium,
    },
    faqQuestion: {
        color: colors.primaryBlack,
        fontSize: fontSizes.small,
        fontWeight: fontWeight.medium,
    },
    faqAnswer: {
        color: colors.primaryBlack,
        fontSize: fontSizes.small,
        fontWeight: fontWeight.light,
        paddingLeft: '5%'
    },
    title: {
        color: colors.primaryBlack,
        fontSize: fontSizes.large,
        fontWeight: fontWeight.bold,
        marginLeft: 8
    },
    error: {
        color: colors.servicesRed,
        fontSize: fontSizes.small,
        fontWeight: fontWeight.medium,
    },
    dashboardBig: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardLarge,
        fontWeight: fontWeight.bold,
        height: fontSizes.dashboardLarge,
        marginTop:85,
        textAlign: 'center'
    },
    dashboard_Bold_Medium: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardMedium,
        lineHeight: fontSizes.dashboardMedium,
        fontWeight: fontWeight.bold,
        textAlign: 'center',
        letterSpacing: 1,
    },
    dashboard_Bold_Small: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardSmall,
        lineHeight: fontSizes.dashboardSmall,
        fontWeight: fontWeight.bold,
        textAlign: 'center',
        letterSpacing: 1
    },
    dashboard_Medium_Medium: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardKMH,
        fontWeight: fontWeight.medium,
        textAlign: 'center',
        letterSpacing: 2
    },
    dashboardSmall: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardSmall,
        fontWeight: fontWeight.bold,
    },
    dashboardGreyMedium: {
        color: colors.primaryGrey,
        fontSize: fontSizes.dashboardMedium,
        fontWeight: fontWeight.bold,
        textAlign: 'center',
    },
    dashboardGreySmall: {
        color: colors.primaryGrey,
        fontSize: fontSizes.dashboardSmall,
        fontWeight: fontWeight.bold,
        marginTop:"18%",
        textTransform: 'uppercase',
    },
    dashboardUnits: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardUnits,
        fontWeight: fontWeight.bold,
        textAlign: "left",
        letterSpacing: 1,
        // paddingTop: 1

        // color: colors.primaryBlack,
        // fontSize: fontSizes.dashboardUnits,
        // fontFamily: 'FSLucas-SemiBold',
        // fontWeight: fontWeight.bold,
        // marginTop:"10%",
        // letterSpacing: 2,
    },
    dashboardOdometerUnits: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboard_Odometer,
        fontWeight: fontWeight.bold,
        marginTop:"6%",
        marginLeft:2,
        letterSpacing: 2,
    },
    dashboardEcoUnits: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardUnits,
        fontWeight: fontWeight.bold,
        letterSpacing: 2,
        marginTop:"6%",
    },
    dashboardOdometer: {
        color: colors.primaryBlack,
        fontSize: size*0.05, 
        fontWeight: fontWeight.bold,
        marginBottom:  Platform.OS === 'android' ? '10%' : 0,

        // fontWeight: fontWeight.bold,
        // letterSpacing: 2,
        // marginTop:"6%",
    },
    dashboardSubscript: {
        color: colors.primaryGrey,
        fontSize: fontSizes.dashboardSubScript,
        fontWeight: fontWeight.bold,
        //lineHeight:10,
        marginTop:"25%",
    },
    ecoSubscript: {
        color: colors.primaryGrey,
        fontSize: fontSizes.dashboardSmall/2,
        fontWeight: fontWeight.bold,
        lineHeight: size*0.03,
    },
    menuButton: {
        color: colors.primaryBlack,
        fontSize: fontSizes.medium,
        lineHeight: fontSizes.medium * 1.05,
        height: fontSizes.medium,
        marginVertical: 10,
        marginLeft: 10,
        fontWeight: fontWeight.medium,
        letterSpacing: -0.5,
    },
    dashboardEcoSubText: {
        color: colors.primaryGrey,
        fontSize: fontSizes.dashboardSmall,
        fontWeight: fontWeight.bold,
        textTransform: 'uppercase'
    },
    dashboardSpeed: {
        color: colors.primaryGrey,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    popupInstructions: {
        color: colors.primaryBlack,
        fontSize: fontSizes.small,
        fontWeight: fontWeight.medium,
        letterSpacing: -0.5,
        textAlign: 'center',
    },
    dashboard_Odometer: {
        color: colors.primaryBlack,
        fontSize: fontSizes.dashboardMedium,
        fontWeight: fontWeight.bold,
        textAlign: 'center',
        letterSpacing: 1
    },
    scooterGuide: {
        color: colors.primaryBlack,
        fontSize: fontSizes.small,
        fontWeight: fontWeight.medium,
        textAlign: 'center',
    },
    scooterGuidetitle: {
        color: colors.primaryBlack,
        fontSize: fontSizes.large,
        fontWeight: fontWeight.bold,
        textAlign: 'center'
    },
    textCentered: {
        color: colors.primaryBlack,
        fontSize: fontSizes.autoMedium,
        fontWeight: fontWeight.medium,
        textAlign: 'center',
    },
    titleCentered: {
        color: colors.primaryBlack,
        fontSize: fontSizes.autoLarge,
        fontWeight: fontWeight.bold,
        textAlign: 'center'
    },
    link: {
        color: colors.primaryGrey,
        fontSize: fontSizes.small,
        fontWeight: fontWeight.lightMedium,
        textAlign: 'center'
    },
    extraInfo: {
        color: colors.primaryGrey,
        fontSize: fontSizes.extraSmall,
        fontWeight: fontWeight.light,
        textAlign: 'left'
    },
    imageTitle: {
        color: colors.primaryWhite,
        fontSize: fontSizes.large,
        fontWeight: fontWeight.lightMedium,
        marginHorizontal: 8,
        marginTop: -10,
    },
    imageSubTitle: {
        color: colors.primaryWhite,
        fontSize: fontSizes.medium,
        fontWeight: fontWeight.lightMedium,
        marginHorizontal: 8,
        marginTop: -10,
    },
    name: {
        color: '#6a6a6a',
        textAlign: 'left',
        fontSize: fontSizes.small,
        fontWeight: fontWeight.lightMedium,
        textTransform: 'uppercase',
    },
    date: {
        color: '#18cca3',
        textAlign: 'left',
        fontSize: fontSizes.extraSmall,
        fontWeight: fontWeight.lightMedium,
    },
    basketItem: {
        color: '#6a6a6a',
        fontSize: fontSizes.small,
        fontWeight: fontWeight.lightMedium,
        textAlign: 'right',
        marginRight: 10
    },
    addressLine: {
        color: '#6a6a6a',
        fontSize: fontSizes.small,
        fontWeight: fontWeight.lightMedium,
        textAlign: 'left',
    },
    basketPrice: {
        color: colors.secondarySunshine,
        fontSize: fontSizes.medium,
        fontWeight: fontWeight.lightMedium,
        textAlign: 'right',
        marginRight: 10
    },
    basketTotal: {
        color: colors.primaryBlack,
        fontSize: fontSizes.medium,
        fontWeight: fontWeight.lightMedium,
        textAlign: 'right',
        marginRight: 10
    }
}