import { Icon } from '@roninoss/icons';
import { Pressable, View } from 'react-native';
import Animated, {
  LayoutAnimationConfig,
  ZoomInRotate,
} from 'react-native-reanimated';

import { cn } from '@/src/shared/lib/cn';
import { useColorScheme } from '@/src/shared/hooks/useColorScheme';
import { COLORS } from '@/src/shared/theme/colors';

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={'toggle-' + colorScheme}
        entering={ZoomInRotate}
      >
        <Pressable
          onPress={() => {
            setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
          }}
          className="opacity-80"
        >
          {colorScheme === 'dark'
            ? ({ pressed }) => (
                <View
                  testID="icon-moon"
                  className={cn('px-0.5', pressed && 'opacity-50')}
                >
                  <Icon
                    namingScheme="sfSymbol"
                    name="moon.stars"
                    color={COLORS.white}
                  />
                </View>
              )
            : ({ pressed }) => (
                <View
                  testID="icon-sun"
                  className={cn('px-0.5', pressed && 'opacity-50')}
                >
                  <Icon
                    namingScheme="sfSymbol"
                    name="sun.min"
                    color={COLORS.black}
                  />
                </View>
              )}
        </Pressable>
      </Animated.View>
    </LayoutAnimationConfig>
  );
}
