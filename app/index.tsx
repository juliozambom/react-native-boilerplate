import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-8 pt-8">
        <View className="header">
          <Text className="text-3xl font-bold">Hello World!</Text>
          <Text className="text-xl">
            This project is a simple boilerplate for a React Native app.
          </Text>
        </View>

        <View className="body mt-12">
          <Text className="text-xl font-bold">
            This project has the following tech stack:
          </Text>

          <View className="tech-stack">
            <Text className="text-xl"> • React Native</Text>
            <Text className="text-xl"> • Expo</Text>
            <Text className="text-xl"> • Nativewind</Text>
            <Text className="text-xl"> • NativewindUI</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
