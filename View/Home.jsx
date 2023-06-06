import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import amashi from  '../assets/amashi.jpeg'
import serach from  '../assets/search.png'
import { Stack, Chip } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';



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
        <View style={styles.searchSection}>

        <TextInput 
        placeholder="Search..."
        placeholderTextColor="#fff" 
        style={styles.SearchBar}>


        </TextInput>
        <Image  style={styles.searchIcon} source={serach}/>

        </View>
        <View>
        <ScrollView   showsHorizontalScrollIndicator={false}
 horizontal={true}>
        <Stack style={styles.ChipStack} direction='row'  spacing={4}>
    <Chip label="Trending"  style={styles.ActiveChip}  color='#fff'  />
    <Chip variant="outlined"  style={styles.DisChip}  color='#fff' label="Action" />
    <Chip variant="outlined"  style={styles.DisChip}  color='#fff' label="Strategy" />
    <Chip variant="outlined"  style={styles.DisChip}  color='#fff' label="RPG" />
    <Chip variant="outlined"  style={styles.DisChip}   color='#fff' label="Adventure" />

  </Stack>
  </ScrollView>
  </View>

  <View>
  <LinearGradient colors={['#FC1518','#131313']} style={styles.GameCard}/>
  <LinearGradient colors={['#E89340','#131313']} style={styles.GameCard}/>
  <LinearGradient colors={['#E4E5E3','#131313']} style={styles.GameCard}/>

  </View>

      
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
    searchIcon: {
        height:24,
        width:24,
        marginStart:20,


    },
    Discover:{
        fontSize:34,    
        color:'#fff',

    },
    SearchBar:{
        flex:1,
        width:'100%',
        height:40,
        borderRadius:30,
        color:'#fff'

    },
    searchSection: {
        flexDirection: 'row',
        marginTop:15,
        width:'100%',
        backgroundColor:'#232322',
        height:40,
        borderRadius:30,
        paddingHorizontal:20,
        alignItems:'center'
        
        

    },
    ChipStack:{
paddingTop:10,
    },
    ActiveChip:{
        height:32,
        backgroundColor:'#333333',


    },
    DisChip:{
    },
    GameCard:{
        backgroundColor:'red',
        width:'100%',
        height:160,
        marginVertical:20,
        borderRadius:30,
    }

})