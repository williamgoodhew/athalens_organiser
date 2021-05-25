/* eslint-disable prettier/prettier */

// The below 3 lines are required for the custom icons. 
// Look in config.json to see the different icon names or open the 
// https://medium.com/bam-tech/add-custom-icons-to-your-react-native-application-f039c244386c
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../resources/fonts/config.json'; 

export const CustomIcon = createIconSetFromFontello(fontelloConfig);