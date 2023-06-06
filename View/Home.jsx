import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import amashi from  '../assets/amashi.jpeg'

const Home = () => {
  return (
    <View style={styles.HomeContainer}>

        <View style={styles.TopView}>
        <View style={styles.UserRow}>

            <Text style={styles.welcomeNote}>Welcome back</Text>
            <Text style={styles.UserName}>Dinith Perera</Text>

            </View>
            <Image  style={styles.UserImg} source={amashi}/>

        </View>

        <Text style={styles.Discover}>    
        Discover
        </Text>
        <TextInput 
        placeholder="Search..."
        placeholderTextColor="#fff" 
        style={styles.SearchBar}>


        </TextInput>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    HomeContainer:{
        flex:1,
        justifyContent:'flex-start',
        paddingTop:40,
    },
    welcomeNote:{
        fontSize:11,    
        color:'#737372',

    },
    UserName:{
        fontSize:14,    
        color:'#fff',
    },
    TopView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        
    },
    UserRow:{
    },
    UserImg:{
        height:30,
        width:30,
        borderRadius:30,
        marginLeft:10

    },
    Discover:{
        fontSize:34,    
        color:'#fff',

    },
    SearchBar:{
        width:'100%',
        height:40,
        backgroundColor:'#232322',
        borderRadius:30,
        marginTop:15,
        paddingLeft:20

    }

})