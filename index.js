import { AppRegistry } from "react-native";
import App from "../App";
import {name as appname} from './app.json';
import OnboardingScreen from "./Onbording";
AppRegistry.registerComponent(appname, () => OnboardingScreen);