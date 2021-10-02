import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Profile(){
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.user}>
                    <View style={styles.greeting}>
                        Olá,
                    </View>

                    <Text style={styles.username}>
                        Wictor
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}