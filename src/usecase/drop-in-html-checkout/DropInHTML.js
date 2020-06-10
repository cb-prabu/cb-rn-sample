import React from 'react';
import {WebView} from 'react-native-webview';
import {Asset} from "expo-asset";
import {URL_LISTENER} from "../../utils/UrlListener";
import {redirectIfSubscriptionComplete} from "../../utils/SuccessHandler";

const logoUri = Asset.fromModule(require('../../../assets/comic-book.png')).uri;

export default function DropInHtml({navigation}) {
    const page = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Honey Comics</title>
        <!-- adding bootstrap.css and the needed styling -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <style>
            html{
                min-height:100%;
                position:relative;
            }
            body{
                margin-bottom:80px;
            }
            .container{
                max-width:1000px;
            }
            .navbar{
                border-color:#d8dbe1;
                border-style:dashed;
                padding-top:25px;
                padding-bottom:25px;
                margin-bottom:0;
            }
            .container>.navbar-header{
                margin:0;
            }
            .navbar-header .h1{
                background: url(https://www.recur.in/drop-in/assets/images/logo.png)no-repeat;
                width: 285px;
                height:70px;
                float: left;
                margin:0;
            }
            .jumbotron{
                background:#fff;
                margin-bottom:0;
            }
            .footer{
                border-top:1px dashed #d8dbe1;
                padding:30px 0;
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 80px;
            }
            label{
                font-weight:normal;
                font-size:13px;	
            }
            .text-danger{
                color:#f00;
            }
            .form-control,
            form .btn,
            .input-group-addon{
                border-radius:2px;
            }
            .form-control{
                padding:6px;
            }
            .btn-success{	
                padding-left:40px;
                padding-right:40px;
            }
            .btn-success,
            .btn-success:hover,
            .btn-success:focus,
            .btn-success:active,
            .panel-success .panel-heading{
                background:#02daaf;
                color:#fff;
                border-color:#02daaf;
                outline:none;
                box-shadow:none;
            }
            .panel-success{
                border-color:#02daaf;
            }
            .cb-cards>span{	
                background: url(https://www.recur.in/drop-in/assets/images/cb-sprite.png) no-repeat;
                width: 32px;
                height: 23px;
                float: left;
                margin: 0 2% 0 0;
                margin-top:7px;
            }
            .cb-cards>span.visa {
                background-position: 0 0;
            }
            .cb-cards>span.mastercard {
                background-position: -45px 0;
            }
            .cb-cards>span.american_express {
                background-position: -91px 0;
            }
            .cb-cards>span.discover {
                background-position: -136px 0;
            }
            .cb-cvv{
                background: url(https://www.recur.in/drop-in/assets/images/cb-sprite.png) no-repeat 0 -35px;
                height: 18px;
                display: inline-block;
                padding-left: 42px;	
                line-height: 30px;
                min-height: 23px;
                margin: 7px 0 0 0;
            }
            .cb-cvv,
            .cb-cards{
                margin-left: -17px;
            }
            .process{
                padding-left:20px;
                background:url(https://www.recur.in/drop-in/assets/images/cb-loading.gif) no-repeat;
                line-height:17px;
            }
            label.success{
                padding-right:22px;
                background: url(https://www.recur.in/drop-in/assets/images/cb-success.gif) no-repeat right center;	
            }
            .label-in_trial{
                color: #f0ad4e;
            }
            .label-active{
                color: #5cb85c;
            }
            .label-non_renewing{
                color: #3737B1;
            }
            .label-cancelled{
                color:#f00;
            }
            #cb-demo-ssp .page-header{
                margin-bottom:10px;
            }
            #cb-demo-ssp .control-label{
                color:#999;
            }
            #cb-demo-ssp .list-dashed li{
                padding: 7px 0;
                border-bottom: 1px dashed #ddd;
            }
            #lightbox,.ajax-loader{
                position:   fixed;
                z-index:    1000;
                top:        0;
                left:       0;
                right:0;
                bottom: 0;
                height:     100%;
                width:      100%;
                background:#fff;
                opacity:.5;
            }
            .center-img{
                margin:120px auto 20px auto;    
                display: block;
            }
            #subscribe-form .affix{
                max-width: 333px;
                width:100%;
            }
            .cb-spacing-bottom{
                margin-bottom: 180px;
            }
            @media (min-width:768px){
            .jumbotron h1{
                font-size:71px;
            }
            .jumbotron h2{
                font-weight:bold;
                font-size:35px;
                line-height:44px;
            }
            .jumbotron h3{
                font-size:21px;
                margin-bottom:120px;
                line-height:35px;
            }	
            .form-horizontal .form-control-static{
                margin-left: -15px;
            }
            .comic-book{
                background:#282f3a;
                position:relative;
            }
            .comic-book:before{
                content: '';
                position: absolute;
                bottom: -10px;
                left: 0;
                right: 0;
                width: 0;
                height: 0;
                margin: 0 auto;
                border-left: 18px solid transparent;
                border-right: 18px solid transparent;
                border-top: 12px solid #282f3a;
            }
            .comic-book img{
                margin-top:-160px;
            }
            }
        </style>
        <!-- adding HTML5.js -->
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.0.min.js" integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=" crossorigin="anonymous"></script>
        <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="honeycomics-v3-test"></script>
        </head>
        <body>
        <div class="navbar navbar-static-top">
        <div class="container">
            <div class="navbar-header">          
              <div class="h1"></div>
            </div>
          </div>
        </div>
        <div class="jumbotron">
            <div class="container text-center">
                <h2><span class="text-muted">Subscribe with a fake card and a fake address, We'll deliver our fake</span> comics <span class="text-muted">On Time!</span></h2>
            <h3 class="text-muted">We are working on something new, fresh and social to help you catalog<br> and manage your amazing comic collection.</h3>
            </div>    
        </div>
        <div class="jumbotron comic-book text-center">
        <img src=${logoUri} alt="comic book" class="center-block img-responsive">
        
            <a href="javascript:void(0)" class="btn btn-success btn-lg" data-cb-type="checkout" data-cb-plan-id="comics-box">subscribe</a>
        </div>
        <div class="jumbotron text-center">
            <h1>Only $6/Month</h1>
            <h4 class="text-muted">Free Shipping and No hidden charges</h4><br>
            <h4 class="h3"><span class="text-muted">The comics you love. Unlimited access. One convenient subscription.</span></h4> 
        </div>
        <div class="footer text-center">
        <span class="text-muted">© Honey Comics. All Rights Reserved.</span>
        </div>

        </body>
        </html>
    `;

    return (<WebView
        originWhitelist={['*']}
        source={{html: page}}
        style={{marginTop: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScript={URL_LISTENER + addAddonsToSubscription()}
        onMessage={({nativeEvent}) => {
            if (nativeEvent.data === "navigationStateChange") {
                redirectIfSubscriptionComplete(navigation, nativeEvent.url)
            }
        }}
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
        product.addCoupon('cbdemo_earlybird');
    
        // adding subscription custom fields
        product.data["cf_sub_test"] = "subscription custom field";
    
        // To add coupons and customer related information with custom fields
        var cart = cbInstance.getCart();
        // Date should be in YYYY-MM-DD
        cart.setCustomer({email: "vivek@chargebee.com", cf_test: "customer custom field", cf_date: "1991-09-16"});
    });
    `;
}
