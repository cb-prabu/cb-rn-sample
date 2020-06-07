import 'react-native-gesture-handler';
import * as React from 'react';
// You can import from local files
// import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DropInHtmlScreen from "../usecase/drop-in/html/DropInHtmlScreen";
import Success from "../components/Success";
import Home from "../components/Home";
import DropInCheckoutURL from "../usecase/drop-in/native/DropInCheckoutURL";
import CheckoutURLWebview from "../usecase/drop-in/native/CheckoutURLWebview";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Success"
                    component={Success}
                    options={{title: "Success"}}
                />
                <Stack.Screen
                    name="DropInHTML"
                    component={DropInHtmlScreen}
                    options={{title: "Honey Comics"}}
                />
                <Stack.Screen
                    name="DropInCheckoutURL"
                    component={DropInCheckoutURL}
                    options={{title: "Honey Comics Subscription"}}
                />
                <Stack.Screen
                    name="CheckoutURLWebview"
                    component={CheckoutURLWebview}
                    options={{title: "Honey Comics"}}
                />
                {/*<Stack.Screen*/}
                {/*    name="ApiCheckout"*/}
                {/*    component={ApiCheckout}*/}
                {/*    options={{title: "Honey Comics"}}*/}
                {/*/>*/}
                {/*<Stack.Screen*/}
                {/*    name="UserInformation"*/}
                {/*    component={UserInformation}*/}
                {/*    options={{title: "Tell us about yourself"}}*/}
                {/*/>*/}
                {/*<Stack.Screen*/}
                {/*    name="ComponentsBasic"*/}
                {/*    component={ComponentsBasic}*/}
                {/*    options={{title: "Checkout"}}*/}
                {/*/>*/}
                {/*<Stack.Screen*/}
                {/*    name="ComponentsProgrammaticActions"*/}
                {/*    component={ComponentsWithProgrammaticActions}*/}
                {/*    options={{title: "Checkout"}}*/}
                {/*/>*/}
                {/*<Stack.Screen*/}
                {/*    name="ComponentsEventListeners"*/}
                {/*    component={ComponentsWithEventListeners}*/}
                {/*    options={{title: "Checkout"}}*/}
                {/*/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
