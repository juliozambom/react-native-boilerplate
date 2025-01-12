import { render } from '@testing-library/react-native';
import { useColorScheme } from '@/src/shared/hooks/useColorScheme';
import { ThemeToggle } from '../ThemeToggle';

jest.mock('@/src/shared/hooks/useColorScheme', () => ({
  useColorScheme: jest.fn(),
}));

const mockedUseColorScheme = useColorScheme as jest.Mock;

describe('<ThemeToggle />', () => {
  test('displays moon icon icon when colorScheme is dark', () => {
    mockedUseColorScheme.mockReturnValue({
      colorScheme: 'light',
      setColorScheme: jest.fn(),
    });

    const { getByTestId } = render(<ThemeToggle />);
    const moonIcon = getByTestId('icon-moon');

    expect(moonIcon).toBeTruthy();
  });

  test('displays sun icon icon when colorScheme is dark', () => {
    mockedUseColorScheme.mockReturnValue({
      colorScheme: 'light',
      setColorScheme: jest.fn(),
    });

    const { getByTestId } = render(<ThemeToggle />);
    const sunIcon = getByTestId('icon-sun');

    expect(sunIcon).toBeTruthy();
  });
});
