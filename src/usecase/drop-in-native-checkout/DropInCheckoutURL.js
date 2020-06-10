import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Headline, Paragraph, Subheading, Text, Title} from 'react-native-paper';
import {useState} from "react";

const planWithAddonsAndBasicUserDetails = 'https://honeycomics-v3-test.chargebee.com/hosted_pages/plans/comics-box?' +
    'coupon_ids[0]=cbdemo_earlybird&addons[id][0]=extra-comic-book&addons[quantity][0]=2' +
    '&customer[email]=vivek@chargebee.com&customer[cf_test]=customer%20custom%20field' +
    '&customer[cf_date]=1991-09-16&subscription[cf_sub_test]=subscription%20custom%20field';

export default function DropInCheckoutURL({navigation}) {
    const [comicPlan] = useState(planWithAddonsAndBasicUserDetails);

    const subscribePlan = (planUrl) => {
        navigation.navigate('CheckoutURLWebview', {planUrl});
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{marginHorizontal: 20}}>
                    <Headline style={styles.titleText}>Honey Comics</Headline>
                    <Headline>
                        <Text style={{textAlign: 'center'}}>
                            <Text style={styles.titleGreyText}>
                                Subscribe with a fake card and a fake address, We'll deliver our fake
                            </Text>
                            <Text style={styles.titleText}> comics </Text>
                            <Text style={styles.titleGreyText}>On Time!</Text>
                        </Text>
                        <Text>{"\n"}</Text>
                        <Text>{"\n"}</Text>
                        <Text style={styles.baseText}>We are working on something new, fresh and social to help you
                            catalog {"\n"}</Text>
                        <Text style={styles.baseText}> and manage your amazing comic collection.</Text>
                    </Headline>
                    <Text>{"\n"}</Text>
                    <Card>
                        <Card.Cover source={require('../../../assets/comic-book.png')}/>
                        <Card.Actions style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Button mode="contained" color="#02daaf" onPress={() => subscribePlan(comicPlan)}>
                                Subscribe
                            </Button>
                        </Card.Actions>
                        <Card.Content style={{textAlign: 'center'}}>
                            <Title style={{textAlign: 'center'}}>
                                Only $6/Month
                            </Title>
                            <Subheading style={{textAlign: 'center'}}>Free Shipping and No hidden charges</Subheading>
                        </Card.Content>
                    </Card>
                    <Text>{"\n"}</Text>
                    <Paragraph style={{textAlign: 'center'}}>The comics you love. Unlimited access. One convenient
                        subscription.</Paragraph>
                    <Text>{"\n"}</Text>
                    <Text style={{textAlign: 'center'}}>Honey Comics. All Rights Reserved.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    baseText: {
        textAlign: 'center',
        fontSize: 22,
    },
    subText: {
        textAlign: 'center',
        fontSize: 18,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: "bold"
    },
    titleGreyText: {
        textAlign: 'center',
        fontSize: 27,
        color: 'grey'
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
    }
});
