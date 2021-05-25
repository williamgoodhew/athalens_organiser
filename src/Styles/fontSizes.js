import {Dimensions} from "react-native";

const size = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const fontSizes = {
    extraSmall: 14,
    small: 18,
    medium: 25,
    large: 40,
    autoMedium: size * 0.02,
    autoLarge: size * 0.05,
    dashboardSmall: width * 0.045,
    // dashboardMedium: size * 0.07,
    dashboardMedium: width * 0.15,
    dashboardLarge: size * 0.15,
    dashboardKMH: size * 0.05,
    dashboardUnits: size * 0.04,
    dashboardSubScript: size * 0.01,
}

export const fontWeight = {
    light: '300',
    lightMedium: '400',
    medium: '500',
    bold: '600'
}