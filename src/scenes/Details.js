import {View, Text, Image} from  'react-native'
import styles from '../styles'


export default function() {
    return (
        <View styles={styles.restaurantCard}>
        <Text>
            <Text style={styles.address}/>
        </Text>
        </View>
    )
}