import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Text,
    useMantineTheme,
    Center,
    Group, 
    ActionIcon, 
    useMantineColorScheme,
    ScrollArea
  } from '@mantine/core';
  import { UserNavbarDisplay } from '../components/userNavbarDisplay';
  import { Sun, MoonStars } from 'tabler-icons-react';
  import { NavbarLinks } from '../components/navbarLinks';
  
  function renderCopyright() { return `Copyright © ${new Date().getFullYear()} by Musiccord. All rights reserved.`; }
  
  export default function DashboardLayout(props: any) {
    const theme = useMantineTheme();
    const { toggleColorScheme } = useMantineColorScheme();
    
    return (
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Navbar.Section grow mt="xs">
                  <NavbarLinks />
              </Navbar.Section>
              <Navbar.Section>
                  <UserNavbarDisplay />
              </Navbar.Section>
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            <Center>{renderCopyright()}</Center>
          </Footer>
        }
        header={
          <Header height={60}>
            <Group sx={{ height: '100%' }} px={20} position="apart">
              <Text>Node-Controller</Text>
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {theme.colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
              </ActionIcon>
            </Group>
          </Header>
        }
      >
          <ScrollArea style={{ height: '83vh' }}>
            {props.children}
          </ScrollArea>
      </AppShell>
    );
  }