import React from 'react';
import {WebView} from 'react-native-webview';
import {Platform} from "react-native";
import {handleSuccess} from "../../../common/Utils";

export default function DropInHtmlScreen({navigation}) {
    const sourceUri = (
        Platform.OS === 'android'
            ? 'file:///android_asset/'
            : ''
    );
    // const PlatformUri: () => Node = Platform.select({
    //     android: () => 'file:///android_asset/',
    //     default: () => '',
    // });
    // const PlatformWebview: () => Node = Platform.select({
    //     android: () => (
    //         <WebView
    //             originWhitelist={['*']}
    //             source={{ uri: 'file:///android_asset/DropInHtml.html' }}
    //             style={{marginTop: 1}}
    //             javaScriptEnabled={true}
    //             domStorageEnabled={true}
    //             startInLoadingState={true}
    //             onNavigationStateChange={handleWebViewNavigationStateChange}
    //             injectedJavaScript={addAddonsToSubscription()}
    //         />
    //     ),
    //     default: () => (
    //         <WebView
    //             originWhitelist={['*']}
    //             source={HomePage}
    //             style={{marginTop: 1}}
    //             javaScriptEnabled={true}
    //             domStorageEnabled={true}
    //             startInLoadingState={true}
    //             onNavigationStateChange={handleWebViewNavigationStateChange}
    //             injectedJavaScript={addAddonsToSubscription()}
    //         />
    //     ),
    // });

    // const handleWebViewNavigationStateChange = (newNavState) => {
    //     if (newNavState && newNavState.url.includes('thankyou')) {
    //         navigation.dispatch(
    //             StackActions.replace('Success')
    //         );
    //     }
    // }

    console.log('message');
    console.log(sourceUri + 'Web.bundle/site/index.html');
    console.log('---------');

    return (<WebView
        originWhitelist={['*']}
        source={{ uri: sourceUri + 'web.bundle/site/index.html' }}
        style={{marginTop: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onNavigationStateChange={(navigationState) => handleSuccess(navigation, navigationState)}
        injectedJavaScript={addAddonsToSubscription()}
    />);
}

function addAddonsToSubscription() {
    return `
        $(document).ready(function() {
        var cbInstance = Chargebee.getInstance();
    
        // To add addons
        // Get the element with the corresponding plan and addons
        var planElement = document.querySelector("[data-cb-plan-id='comics-box']");
        var product = cbInstance.getProduct(planElement);
        product.addons.push({id: "extra-comic-book", quantity: 2});
    
        // to add coupon
        product.addCoupon("cbdemo_earlybird");
    
        // adding subscription custom fields
        product.data["cf_sub_test"] = "subscription custom field";
    
        // To add coupons and customer related information with custom fields
        var cart = cbInstance.getCart();
        // Date should be in YYYY-MM-DD
        cart.setCustomer({email: "vivek@chargebee.com", cf_test: "customer custom field", cf_date: "1991-09-16"});
    
        cbInstance.setCheckoutCallbacks(function(cart) {
            // You can get the plan name for which the checkout happened like below
            var product = cart.products[0];
            // alert('Here');
            console.log(product.planId);
            console.log(product.addons);
            return {
                loaded: function() {
                    console.log("checkout opened");
                },
                close: function() {
                    console.log("checkout closed");
                },
                success: function(hostedPageId) {
                    console.log(hostedPageId);
                    // Hosted page id will be unique token for the checkout that happened
                    // You can pass this hosted page id to your backend 
                    // and then call our retrieve hosted page api to get subscription details
                    // https://apidocs.chargebee.com/docs/api/hosted_pages#retrieve_a_hosted_page
                },
                step: function(value) {
                    // value -> which step in checkout
                    console.log(value);
                    alert('123');
                }
            }
        });
    });

    `;
}
