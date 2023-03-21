import React, {useState} from "react";
import { StyleSheet, Text, View } from 'react-native';

const Dictionary = () => {
const [word, setWord] = useState('')

    return (
        <View>
            <Text>Hi I am a dictionary</Text>
        </View>
    )
}

export default Dictionary;