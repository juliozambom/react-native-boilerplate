import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import { ThemeToggle } from "@/components/nativewindui/ThemeToggle";
import { Linking, SafeAreaView, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className={"flex-1 bg-background justify-between"}>
      <View className="px-8 pt-8">
        <View className="header">
          <Text variant="title1" className="font-bold">
            Hello World!
          </Text>
          <Text variant="subtitle1">
            This project is a simple boilerplate for a React Native app.
          </Text>
        </View>

        <View className="body mt-12">
          <Text variant="title3">
            This project has the following tech stack:
          </Text>

          <View className="tech-stack mt-3">
            <Text variant="subtitle1">• React Native</Text>
            <Text variant="subtitle1">• Expo</Text>
            <Text variant="subtitle1">• Nativewind</Text>
            <Text variant="subtitle1">• NativewindUI</Text>
          </View>
        </View>

        <View className="toggle-theme flex-row gap-2 items-center mt-12">
          <Text variant="title3">Try toggle the color theme</Text>

          <ThemeToggle />
        </View>
      </View>

      <View className="footer px-8">
        <Button
          variant="secondary"
          onPress={() => {
            Linking.openURL("https://github.com/juliozambom");
          }}
        >
          <Text variant="title3">Boilerplate made by @juliozambom</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
