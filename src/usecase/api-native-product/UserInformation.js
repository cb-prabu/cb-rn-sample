import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {Button, Divider, Headline, Text, TextInput} from 'react-native-paper';

export default function UserInformation({navigation}) {
    const [firstName, setFirstName] = useState('Prabu');
    const [lastName, setLastName] = useState('K');
    const [email, setEmail] = useState('meail@maile.com');
    const [phone, setPhone] = useState('9090909009');
    const [company, setCompany] = useState('Ajira');

    async function makePayment() {
        const details = {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            company,
            plan_id: 'comics_box'
        };
        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
        const result = await fetch('https://www.recur.in/api/generate_checkout_new_url_demo', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
            body: formBody
        });
        const response = await result.json();
        navigation.navigate('ApiCheckout', {hostedPageResponse: response});
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{paddingVertical: 2, paddingHorizontal: 10}}>
                    <Image
                        style={{margin: 10}}
                        source={require('../../../assets/logo.png')}/>
                    <Divider style={{marginBottom: 30, marginTop: 10}}/>
                    <Headline style={{fontWeight: 'bold', textAlign: 'center'}}>Tell us about yourself</Headline>
                    <Divider style={{marginTop: 20}}/>
                    <TextInput
                        label="First Name"
                        onChangeText={text => setFirstName(text)}
                        defaultValue={firstName}
                    />
                    <TextInput
                        label="Last Name"
                        onChangeText={text => setLastName(text)}
                        defaultValue={lastName}
                    />
                    <TextInput
                        label="Email"
                        onChangeText={text => setEmail(text)}
                        defaultValue={email}
                    />
                    <TextInput
                        label="Phone"
                        onChangeText={text => setPhone(text)}
                        defaultValue={phone}
                    />
                    <TextInput
                        label="Company"
                        onChangeText={text => setCompany(text)}
                        defaultValue={company}
                    />
                    <Button
                        mode="contained"
                        dark={true}
                        color={'#02daaf'}
                        onPress={() => makePayment()}
                        style={{marginTop: 20, color: 'red'}}>
                        Proceed to Payment
                    </Button>
                    <SubscriptionDetails/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function SubscriptionDetails() {
    return (<View>
        <Headline
            style={{fontWeight: 'bold', marginTop: 30}}>
            Subscription Details
        </Headline>
        <Divider style={{marginTop: 10}}/>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: "flex-start", alignItems: "center"}}>
            <Image source={require('../../../assets/plan.png')} style={{margin: 10}}/>
            <View>
                <Text style={{fontWeight: 'bold'}}>Marvel Classics</Text>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>$9</Text>
                    <Text style={{fontStyle: 'italic', color: 'grey'}}> per month</Text>
                </Text>
            </View>
        </View>
    </View>);
}
