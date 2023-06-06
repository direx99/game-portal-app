import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    ViewBase,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import amashi from "../assets/amashi.jpeg";
  import serach from "../assets/search.png";
  import star from "../assets/star.png";
  import coc from "../assets/coc.png";
  import jetpack from "../assets/jetpack.png";
  import { Stack, Chip } from "@react-native-material/core";
  import { LinearGradient } from "expo-linear-gradient";
  const jsonData = require('./data.json');


const GameCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
      }, []);

  return (
    <View >
        {data.map(item => (
      <View key={item.id} style={styles.ImgContainer}>
            <Image style={styles.GameImg}  source={{ uri: item.image }} />

<LinearGradient
      colors={item.gradientColors}
      style={styles.GameCard}
    >
        
      <Image style={styles.GameImg1}   source={{ uri: item.image }} />
      <View style={styles.GameCardData}>
        <View>
          <Text style={styles.GameName}>{item.name}</Text>
          <Text style={styles.GameName}>{item.name2}</Text>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Image style={styles.StarImg} source={star} />
            <Image style={styles.StarImg} source={star} />
            <Image style={styles.StarImg} source={star} />
            <Image style={styles.StarImg} source={star} />
            <Image style={styles.StarImg} source={star} />
          </View>
        </View>
      </View>
    </LinearGradient>
      </View>
    ))}
    
    
  </View>
  )
}

export default GameCard

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  welcomeNote: {
    fontSize: 11,
    color: "#737372",
  },
  UserName: {
    fontSize: 14,
    color: "#fff",
  },
  TopView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  UserRow: {},
  UserImg: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginLeft: 10,
  },
  searchIcon: {
    height: 24,
    width: 24,
    marginStart: 20,
  },
  Discover: {
    fontSize: 34,
    color: "#fff",
  },
  SearchBar: {
    flex: 1,
    width: "100%",
    height: 40,
    borderRadius: 30,
    color: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    marginTop: 15,
    width: "100%",
    backgroundColor: "#232322",
    height: 40,
    borderRadius: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  ChipStack: {
    paddingTop: 10,
  },
  ActiveChip: {
    height: 32,
    backgroundColor: "#333333",
  },
  DisChip: {},
  GameCard: {
    backgroundColor: "red",
    width: "100%",
    height: 160,
    marginVertical: 20,
    borderRadius: 30,
    marginTop: -100,
  },
  CardSet: {},
  GameImg: {
    height: 200,
    width: 200,
  },
  GameImg1: {
    height: 200,
    width: 200,
    marginTop: -100,
  },
  ImgContainer: {
marginBottom: -50,
  },
  GameName: {
    fontSize: 30,
    color: "#fff",
    marginBottom: -10,
    fontWeight: 600,
    textTransform:'capitalize'

  },
  GameCardData: {
    flex: 1,
    alignItems: "center",
    marginTop: -70,
    marginLeft: 80,
  },
  StarImg: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});