import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    
        container: {
          marginVertical:20,
          flex: 1,
          backgroundColor: '#00000040',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginHorizontal: 0,
        },
        restaurantCard: {
            width: '100%',
            marginVertical:16,
            backgroundColor:'#fff',
            color:'#444',
            borderRadius:12,
        },
        restaurantsName:{
            marginHorizontal: 9,
            fontSize:30,
            fontWeight: '600',
            fontStyle:'italic',
            marginVertical: 10
        },
        cuisine:{
            marginHorizontal: 12,
            fontSize: 16,
            fontWeight: '100',
           
            
        },
        address:{
            marginHorizontal: 12,
            fontSize:14,
            fontWeight:'300',
            color:'#303030'
        },


})