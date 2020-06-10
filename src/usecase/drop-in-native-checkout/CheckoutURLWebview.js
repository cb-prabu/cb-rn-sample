import * as React from 'react';
import WebView from "react-native-webview";
import {URL_LISTENER} from "../../utils/UrlListener";
import {redirectIfSubscriptionComplete} from "../../utils/SuccessHandler";

export default function CheckoutURLWebview({navigation, route}) {
    let webview;

    return (
        <WebView
            ref={ref => (webview = ref)}
            originWhitelist={['*']}
            source={{uri: route.params.planUrl}}
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            injectedJavaScript={URL_LISTENER}
            onMessage={({nativeEvent}) => {
                if (nativeEvent.data === "navigationStateChange") {
                    redirectIfSubscriptionComplete(navigation, nativeEvent.url)
                }
            }}
        />
    );
}
