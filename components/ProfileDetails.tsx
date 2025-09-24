import "@/global.css"
import React from 'react'
import { Image, View } from 'react-native'
import CustomText from "./ui/CustomText"
import IconButton from "./ui/IconButton"

const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center h-1/2 w-screen">
      <Image
        source={require('../assets/images/icon.png')}
        className="max-h-36 max-w-36 rounded-full"
      />
      <CustomText variant="title" value="Milton Velasquez"/>
      <CustomText variant="subtitle" value="Profesor"/>
      
      <View className="flex-row justify-center mt-4 gap-4">
        <IconButton icon="logo-instagram" pulsar={() => console.log("Instagram")} color="red"></IconButton>
        <IconButton icon="logo-whatsapp" pulsar={() => console.log("Whatsapp")} color="green"></IconButton>
        <IconButton icon="logo-facebook" pulsar={() => console.log("Facebook")} color="blue"></IconButton>
        <IconButton icon="logo-linkedin" pulsar={() => console.log("Linkedin")} color="lightblue"></IconButton>
      </View>

    </View>
  )
}

export default ProfileDetails