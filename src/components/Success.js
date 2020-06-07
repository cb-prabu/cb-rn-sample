import * as React from 'react';
import {Button, Card, Paragraph, Text, Title} from 'react-native-paper';
import {View} from "react-native";

export default function Success({navigation}) {

    const jumpToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View>
            <Card>
                <Card.Content>
                    <Title style={{textAlign: 'center'}}>
                        Subscription Complete
                    </Title>
                    <Paragraph style={{textAlign: 'center'}}>Thank you for purchasing</Paragraph>
                </Card.Content>
            </Card>
            <Text/>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Button mode="contained" color="#02daaf" onPress={() => jumpToHome()}>
                    Go to Home
                </Button>
            </View>
        </View>
    );
}
