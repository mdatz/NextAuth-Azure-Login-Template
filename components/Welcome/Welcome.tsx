import { Title, Text,  Grid, Image, Card, Center, Button, Divider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { BsMicrosoft } from 'react-icons/bs';
import { useState } from 'react';
import useStyles from './Welcome.styles';
import { signIn } from 'next-auth/react';

export function Welcome() {

  var colorScheme = useColorScheme();
  const { classes } = useStyles();
  const [loading, setLoading] = useState(false);

  return (
    <Grid className={classes.gridContainer}>
      <Grid.Col span={4} className={classes.logoContainer}>
        {/* <Image src={colorScheme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'} alt='Logo' className={classes.logo}/> */}
        <Image height='100vh' src={colorScheme === 'dark' ? '/images/splash-dark.png' : '/images/splash-light.jpg'} alt="Login Splash" fit='cover'/>
      </Grid.Col>
      <Grid.Col span={8} className={classes.content}>
      <Title className={classes.title} align="center">
        Login{' '}
        <Text inherit variant="gradient" gradient={{ from: 'orange', to: '#9C3618', deg: 145 }} component="span">
          Template
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        To get started, log into your Microsoft account below.
      </Text>
      <Center mt='75px'>
        <Card className={classes.card} shadow='xl' radius='md' withBorder>
          <Text className={classes.header} align='center' mt='xs'>Sign in</Text>
          <Divider m='md' />
          <Center>
            <Button size='lg' radius='md' className={classes.loginButton} leftIcon={<BsMicrosoft size={24}/>} pl='md' loading={loading} onClick={() => {setLoading(true);signIn("azure-ad", {callbackUrl: "/dashboard"})}}>
              Log in with Microsoft
            </Button>
          </Center>
        </Card>
      </Center>
      </Grid.Col>
    </Grid>
  );
}
