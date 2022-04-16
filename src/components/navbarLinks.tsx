import { HeartRateMonitor, Settings, Server, Users } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useLocation, Link } from 'react-router-dom';

interface NavbarLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  route: string;
}

function NavbarLink({ icon, color, label, route }: NavbarLinkProps) {
    const currentPath = useLocation().pathname;

    return (
      <Link to={route} style={{ textDecoration: "none" }}>
        <UnstyledButton
        sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            backgroundColor: currentPath === route ? theme.colorScheme === 'dark' ?  theme.colors.dark[6] : theme.colors.gray[0] : "",
            '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            },
        })}
        >
        <Group>
            <ThemeIcon color={color} variant="light">
            {icon}
            </ThemeIcon>
            <Text size="sm">{label}</Text>
        </Group>
        </UnstyledButton>
        </Link>
    );
}

const data = [
  { icon: <HeartRateMonitor size={16} />, color: 'blue', label: 'Overview', route: '/overview' },
  { icon: <Settings size={16} />, color: 'teal', label: 'Config', route: '/config' },
  { icon: <Server size={16} />, color: 'violet', label: 'Sub-Nodes', route: '/sub-nodes' },
  { icon: <Users size={16} />, color: 'grape', label: 'Users', route: '/users' },
];

export function NavbarLinks() {
  const links = data.map((link) => <NavbarLink {...link} key={link.label} />);
  return <div>{links}</div>;
}