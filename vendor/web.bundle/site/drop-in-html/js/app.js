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
