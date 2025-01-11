import { Text } from "@/components/nativewindui/Text";
import { SafeAreaView, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-8 pt-8">
        <View className="header">
          <Text variant="largeTitle" className="font-bold">
            Hello World!
          </Text>
          <Text variant="title3">
            This project is a simple boilerplate for a React Native app.
          </Text>
        </View>

        <View className="body mt-12">
          <Text variant="title1">
            This project has the following tech stack:
          </Text>

          <View className="tech-stack mt-3">
            <Text variant="title3">• React Native</Text>
            <Text variant="title3">• Expo</Text>
            <Text variant="title3">• Nativewind</Text>
            <Text variant="title3">• NativewindUI</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
