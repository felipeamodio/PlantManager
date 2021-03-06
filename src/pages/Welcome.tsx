import React from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';


export default function Welcome(){
  const navigation = useNavigation();
  
  function handleStart(){
    navigation.navigate('UserIdentification');
  }

  return(
    <>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'} 
      suas plantas de {'\n'}
      forma fácil</Text>

      
        <Image
        source={wateringImg}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.subTitle}>Não esqueça mais de regar suas plantas.{'\n'} Nós cuidamos de lembrar você sempre que {'\n'} precisar</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handleStart}>
            <Feather name="chevron-right" style={styles.icon} />
      </TouchableOpacity>

    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      marginTop: 38,
      fontFamily: fonts.heading,
      lineHeight: 38
  },
  subTitle: {
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading,
      fontFamily: fonts.text
  },
  image: {
      height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56
  },
  icon: {
    fontSize: 32,
    color: colors.white
  }
})