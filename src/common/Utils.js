import {StackActions} from "@react-navigation/native";


export const handleSuccess = (navigation, newNavState) => {
    if (newNavState && newNavState.url.includes('thankyou')) {
        navigation.dispatch(
            StackActions.replace('Success')
        );
    }
}
