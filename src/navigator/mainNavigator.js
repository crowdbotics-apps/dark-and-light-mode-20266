import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2101354Navigator from '../features/BlankScreen2101354/navigator';
import BlankScreen1101353Navigator from '../features/BlankScreen1101353/navigator';
import BlankScreen0101352Navigator from '../features/BlankScreen0101352/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2101354: { screen: BlankScreen2101354Navigator },
BlankScreen1101353: { screen: BlankScreen1101353Navigator },
BlankScreen0101352: { screen: BlankScreen0101352Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
