import { useEffect, useState} from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'

export default function Home() {
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
              ? <ActivityIndicator size='large' color='yellow' />
              : allRestaurants.map(singleRest => (
                <RestaurantCard key={singleRest.id} singleRest={singleRest} />
              ))
            }
    </ScrollView>
)
}