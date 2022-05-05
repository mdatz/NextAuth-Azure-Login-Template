import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  header: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 35,
    fontWeight: 800,
    letterSpacing: -1,

    [theme.fn.smallerThan('md')]: {
      fontSize: 20,
    },
  },
  logo: {
    position: 'absolute',
    width: '80%',
    zIndex: 5,
    marginLeft: '10%',
    marginTop: '10%',
  },
  logoContainer: {
    position: 'relative',
    padding: '0px',
    margin: '0px'
  },
  gridContainer: {
    width:'100vw',
    height:'100vh', 
    overflow:'hidden', 
    margin: '0px'
  },
  card: {
    width: 'auto',
    minWidth: '25em',
    border: '4px outset #9C3618',
  },
  loginButton: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));
