import * as React from 'react';
import WebView from "react-native-webview";
import {StackActions} from "@react-navigation/native";

export default function CheckoutURLWebview({navigation, route}) {
    let webview;
    const handleWebViewNavigationStateChange = (newNavState) => {
        if (newNavState && newNavState.url.includes('thankyou')) {
            navigation.dispatch(
                StackActions.replace('Thankyou')
            );
        }
    }

    return (
        <WebView
            onNavigationStateChange={handleWebViewNavigationStateChange}
            ref={ref => (webview = ref)}
            originWhitelist={['*']}
            source={{uri: route.params.planUrl}}
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
        />
    );
}
