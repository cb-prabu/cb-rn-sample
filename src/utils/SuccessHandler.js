import {StackActions} from "@react-navigation/native";

export function redirectIfSubscriptionComplete(navigation, url) {
    console.log(url);
    if (url && url.includes('thankyou')) {
        navigation.dispatch(
            StackActions.replace('Success')
        );
    }
}
