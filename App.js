import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, ScrollView, Image, Button } from 'react-native';
import { useEffect } from 'react'
import { useState } from 'react'


const image ={uri: "https://media.istockphoto.com/photos/empty-tabletop-in-the-coffe-shop-picture-id1191879835?k=20&m=1191879835&s=612x612&w=0&h=WM--FehE2sULPmRB5Kz0s0uL8Oxh5sk3mZZqyIwVJZc="}

export default function App() {

const [allRestaurants, setAllRestaurants] = useState()

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch('https://my-first-firestore-ca.web.app/restaurants/')
        const data = await response.json()
        setAllRestaurants(data)
      } catch (err) {
        console.error(err)
      }

    }

   
  getData()
},[])
  


  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={image} style ={styles.container}>
        <ScrollView>
        { allRestaurants ? (
          allRestaurants?.map(singleRest => (
            <>
          <Text style={styles.restaurantsName} key={singleRest.id}>
            {singleRest.name}
          </Text>
          <Image source = {{uri: singleRest.img}} style ={{width: '100%'}}
/>          
          

          </>
          ))
             ):(
               <ActivityIndicator size='large' color='purple'/>
             )}
             
            
        </ScrollView>
      </ImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  restaurantsName:{
    color:'white',
    fontSize:34,
    fontStyle:'italic',
    marginVertical: 50
  }
});
