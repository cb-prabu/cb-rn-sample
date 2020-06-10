import React from 'react';
import {WebView} from 'react-native-webview';
import {URL_LISTENER} from "../../utils/UrlListener";
import {redirectIfSubscriptionComplete} from "../../utils/SuccessHandler";
import {Platform} from "react-native";

export default function ApiCheckout({navigation, route}) {
    const sourceUri = (
        Platform.OS === 'android' ? 'file:///android_asset/': ''
    );

    return (<WebView
        originWhitelist={['*']}
        source={{ uri: sourceUri + 'web.bundle/site/api-checkout/index.html' }}
        style={{marginTop: 20}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScript={URL_LISTENER + openCheckout(route.params.hostedPageResponse)}
        onMessage={({nativeEvent}) => {
            if (nativeEvent.data === "navigationStateChange") {
                redirectIfSubscriptionComplete(navigation, nativeEvent.url)
            }
        }}
    />);
}

function openCheckout(hostedPageResponse) {
    return `
        $(document).ready(function() {
            var cbInstance = window.Chargebee.init({site: "honeycomics-v3-test", enableRedirectMode: true});
            cbInstance.openCheckout({
                hostedPage: function() {
                    return new Promise(function(resolve, reject){
                        return resolve(${JSON.stringify(hostedPageResponse)});
                    });
                }
            });
        });

        true;
    `;
}
