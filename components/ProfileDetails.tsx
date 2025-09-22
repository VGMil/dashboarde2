import "@/global.css"
import React from 'react'
import { Image, Text, View } from 'react-native'
import IconButton from "./IconButton"

const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center">
      <Image
        source={require('../assets/images/icon.png')}
        className="max-h-36 max-w-36 rounded-full"
      />
      <Text className="text-2xl font-bold">Milton Velasquez</Text>
      <Text className="text-xl font-bold text-gray-400">Profesor</Text>

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