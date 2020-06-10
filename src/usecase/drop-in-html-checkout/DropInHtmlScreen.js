import React from 'react';
import {WebView} from 'react-native-webview';
import {Platform} from "react-native";
import {redirectIfSubscriptionComplete} from "../../utils/SuccessHandler";
import {URL_LISTENER} from "../../utils/UrlListener";

export default function DropInHtmlScreen({navigation}) {
    const sourceUri = (
        Platform.OS === 'android' ? 'file:///android_asset/': ''
    );

    return (<WebView
        originWhitelist={['*']}
        source={{ uri: sourceUri + 'web.bundle/site/drop-in-html/index.html' }}
        style={{marginTop: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScript={URL_LISTENER}
        onMessage={({nativeEvent}) => {
            if (nativeEvent.data === "navigationStateChange") {
                redirectIfSubscriptionComplete(navigation, nativeEvent.url)
            }
        }}
    />);
}
