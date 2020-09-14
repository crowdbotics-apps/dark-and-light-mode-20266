import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard28101432Navigator from '../features/Dashboard28101432/navigator';
import BlankScreen7101431Navigator from '../features/BlankScreen7101431/navigator';
import Settings6101430Navigator from '../features/Settings6101430/navigator';
import UserProfile7101429Navigator from '../features/UserProfile7101429/navigator';
import BlankScreen4101356Navigator from '../features/BlankScreen4101356/navigator';
import SignUp24101355Navigator from '../features/SignUp24101355/navigator';
import BlankScreen2101354Navigator from '../features/BlankScreen2101354/navigator';
import BlankScreen1101353Navigator from '../features/BlankScreen1101353/navigator';
import BlankScreen0101352Navigator from '../features/BlankScreen0101352/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard28101432: { screen: Dashboard28101432Navigator },
BlankScreen7101431: { screen: BlankScreen7101431Navigator },
Settings6101430: { screen: Settings6101430Navigator },
UserProfile7101429: { screen: UserProfile7101429Navigator },
BlankScreen4101356: { screen: BlankScreen4101356Navigator },
SignUp24101355: { screen: SignUp24101355Navigator },
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
