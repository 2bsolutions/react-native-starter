export default {
  Text: {
    variants: {
      title: () => ({
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 3
      }),
      secondary: () => ({
        fontSize: 16,
        marginBottom: 2
      })
    }
  },
  FormControlLabel: {
    baseStyle: {
      _text: {
        fontSize: 'xs',
        fontWeight: 'bold'
      },
      astrickColor: 'error.400',
      mb: 0,
      mr: 3
    }
  },
  Button: {
    baseStyle: {
      rounded: 15
    },
    defaultProps: {
      colorScheme: 'green'
    },
    variants: {
      facebook: () => ({
        bg: '#075698',
        marginBottom: 2
      }),
      google: () => ({
        bg: 'white',
        marginBottom: 2
      }),
      apple: () => ({
        bg: 'black',
        marginBottom: 2
      }),
      simpleLink: ({ colorScheme }) => {
        return {
          bg: 'transparent',
          _text: {
            color: `${colorScheme}.500`,
            textDecorationLine: 'underline'
          },
          _pressed: {
            _text: {
              color: `${colorScheme}.800`
            }
          }
        };
      }
    }
  }
};
