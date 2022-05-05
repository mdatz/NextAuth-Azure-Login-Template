import { ActionIcon, Group, useMantineColorScheme, Tooltip } from '@mantine/core';
import { BiLogOutCircle } from 'react-icons/bi'
import { signOut } from 'next-auth/react';

export function LogoutToggle() {
  
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group style={{position: 'absolute', bottom: '25px', right: '75px'}} mt="xl">
      <Tooltip label="Logout">
        <ActionIcon
          onClick={() => signOut({ callbackUrl: '/'})}
          size="xl"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
          })}
        >
          <BiLogOutCircle size={20} color='#cc0011' />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
