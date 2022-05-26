import { useEffect, useState} from 'react'
import { ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'

export default function Home({navigation}) {
    const [allRestaurants, setAllRestaurants] = useState()



useEffect(() => {
    fetch('https://my-first-firestore-ca.web.app/restaurants/')
    .then(res => res.json())
    .then(setAllRestaurants)
    .catch(console.error)
}, [])


return(
    <ScrollView>
            {!allRestaurants
              ? <ActivityIndicator size='large' color='pink' />
              : allRestaurants.map(singleRest => (
                <TouchableOpacity key={singleRest.id} 
                onPress={()=> navigation.navigate('Details')}>
                <RestaurantCard   singleRest={singleRest} />
                </TouchableOpacity>
              ))
            }
    </ScrollView>
)
}