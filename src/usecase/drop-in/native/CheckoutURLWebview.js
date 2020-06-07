import * as React from 'react';
import WebView from "react-native-webview";
import {handleSuccess} from "../../../common/Utils";

export default function CheckoutURLWebview({navigation, route}) {
    let webview;

    return (
        <WebView
            onNavigationStateChange={(navigationState) => handleSuccess(navigation, navigationState)}
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
