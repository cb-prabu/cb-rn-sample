import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <List.Section>
                <List.Subheader style={styles.header}>Drop-In</List.Subheader>
                <List.Item
                    style={styles.item}
                    title="HTML"
                    onPress={() => navigation.navigate('DropInHTML')}
                />
                <List.Item
                    style={styles.item}
                    title="Checkout URL"
                    onPress={() => navigation.navigate('DropInCheckoutURL')}
                />
                <List.Subheader style={styles.header}>API</List.Subheader>
                <List.Item
                    style={styles.item}
                    title="Native User Information"
                    onPress={() => navigation.navigate('UserInformation')}
                />
            </List.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5
    },
    item: {
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 25,
        fontSize: 20,
        backgroundColor: "#02daaf",
        borderRadius: 15,
    },
    header: {
        fontSize: 25,
    },
    title: {
        fontSize: 24
    }
});
