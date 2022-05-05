import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { LogoutToggle } from '../components/LogoutToggle/LogoutToggle';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Skeleton, Center, Text, Divider } from '@mantine/core';

export default function Dashboard() {

    // Retrieve the session from the Next.js server-side session
    const { data: session, status } = useSession();

    // Boot unauthenticated users out of the app
    useEffect(() => {
        if (status === 'unauthenticated') {
            window.location.href = '/';
        }
    }, [status]);
    
    return (
        <Center mt='100px'>
            {status === 'loading' && <Skeleton width={200} height={30} animate={true} /> }
            {status === 'authenticated' &&
            <> 
                <div>
                    <Text align='center'>
                        Welcome, <b>{session.user.name}</b>!
                    </Text>
                    <Divider my='xs'/>
                    <Text>
                        You are logged in with the email: <Text color='dimmed' align='center'>{session.user.email}</Text>
                    </Text>
                </div>
            </>
            }
            <ColorSchemeToggle />
            <LogoutToggle />
        </Center>
    );
}
