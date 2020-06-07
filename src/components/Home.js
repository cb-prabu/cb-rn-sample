import * as React from 'react';
import {Button, View} from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/*<Button*/}
            {/*    title="Drop-In script"*/}
            {/*    onPress={() => navigation.navigate('DropIn')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="Components-Basic"*/}
            {/*    onPress={() => navigation.navigate('Components-Basic')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="Components-Programmatic Actions"*/}
            {/*    onPress={() => navigation.navigate('Components-Programmatic Actions')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="Components-EventListeners"*/}
            {/*    onPress={() => navigation.navigate('Components-EventListeners')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="CheckoutURL"*/}
            {/*    onPress={() => navigation.navigate('CheckoutURL')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="HoneyComic"*/}
            {/*    onPress={() => navigation.navigate('HoneyComic')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="API"*/}
            {/*    onPress={() => navigation.navigate('FormDisplay')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="URL matching"*/}
            {/*    onPress={() => navigation.navigate('UrlMatching')} check-outline*/}
            {/*/>*/}
            <Button
                title="DropIn - HTML"
                onPress={() => navigation.navigate('DropInHTML')}
            />
            <Button
                title="DropIn - Checkout URL"
                onPress={() => navigation.navigate('DropInCheckoutURL')}
            />
            <Button
                title="Api-Native User Information"
                onPress={() => navigation.navigate('UserInformation')}
            />
            <Button
                title="Api-HTML Components Basic"
                onPress={() => navigation.navigate('ComponentsBasic')}
            />
            <Button
                title="Api-HTML Components Programmatic Actions"
                onPress={() => navigation.navigate('ComponentsProgrammaticActions')}
            />
            <Button
                title="Api-HTML Components Event Listeners"
                onPress={() => navigation.navigate('ComponentsEventListeners')}
            />
        </View>
    );
}
