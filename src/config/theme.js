import { extendTheme } from '@chakra-ui/react'

const defaultProjectTheme = {
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    background: { light: '#ffffff', dark: '#1A202C' },
    text: {
      light: '#000000',
      dark: '#ffffff',
    },
    primary: {
      50: '#EBF8FF',
      100: '#BEE3F8',
      200: '#90CDF4',
      300: '#63B3ED',
      400: '#4299E1',
      500: '#3182CE',
      600: '#2B6CB0',
      700: '#2C5282',
      800: '#2A4365',
      900: '#1A365D',
    },
    secondary: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
    error: { 50: '#FFF5F5', 500: '#E53E3E', 900: '#700f0f' },
    warning: { 50: '#FFFAF0', 500: '#DD6B20', 900: '#62300e' },
    success: { 50: '#F0FFF4', 500: '#38A169', 900: '#133523' },
    gradient: {
      50: 'linear-gradient(135deg, #E6FFFA, #EBF8FF)',
      100: 'linear-gradient(135deg, #B2F5EA, #BEE3F8)',
      200: 'linear-gradient(135deg, #4FD1C5, #4299E1)',
      300: 'linear-gradient(135deg, #38B2AC, #3182CE)',
      400: 'linear-gradient(135deg, #319795, #2B6CB0)',
      500: 'linear-gradient(135deg, #4FD1C5, #4299E1)',
      600: 'linear-gradient(135deg, #38B2AC, #3182CE)',
      700: 'linear-gradient(135deg, #319795, #2B6CB0)',
      800: 'linear-gradient(135deg, #4FD1C5, #4299E1)',
      900: 'linear-gradient(135deg, #38B2AC, #3182CE)',
    },
  },
  textStyles: {
    head: {
      1: { fontSize: '2xl', fontWeight: 700, opacity: 0.9 },
      2: { fontSize: '2xl', fontWeight: 400, opacity: 0.9 },
      3: { fontSize: '2xl', fontWeight: 400, opacity: 0.6 },
      error: { fontSize: '2xl', fontWeight: 400, color: 'red.500', opacity: 0.9 },
      success: { fontSize: '2xl', fontWeight: 400, color: 'green.500', opacity: 0.9 },
    },
    body: {
      1: { fontSize: 'md', fontWeight: 700, opacity: 0.9 },
      2: { fontSize: 'md', fontWeight: 400, opacity: 0.9 },
      3: { fontSize: 'md', fontWeight: 400, opacity: 0.6 },
      error: { fontSize: 'md', fontWeight: 400, color: 'red.500', opacity: 0.9 },
      success: { fontSize: 'md', fontWeight: 400, color: 'green.500', opacity: 0.9 },
    },
    tail: {
      1: { fontSize: 'xs', fontWeight: 700, opacity: 0.9 },
      2: { fontSize: 'xs', fontWeight: 400, opacity: 0.9 },
      3: { fontSize: 'xs', fontWeight: 400, opacity: 0.6 },
      error: { fontSize: 'xs', fontWeight: 400, color: 'red.500', opacity: 0.9 },
      success: { fontSize: 'xs', fontWeight: 400, color: 'green.500', opacity: 0.9 },
    },
  },
}

const getTheme = (projectTheme = defaultProjectTheme) =>
  extendTheme({
    config: {
      initialColorMode: 'light',
    },
    ...projectTheme,
  })

export default getTheme
