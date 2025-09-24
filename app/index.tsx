import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";
import { View } from "react-native";
import "../global.css";
export default function Index() {
  return (
    <View className="flex justify-center items-start bg-white w-screen h-screen">
      <ProfileDetails></ProfileDetails>
      <MoreDetails></MoreDetails>
    </View>
  );
}
