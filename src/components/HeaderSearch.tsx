import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  Avatar,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconWallet, IconTriangle } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    color: 'white',
    backgroundColor: '#3c3c5c',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
   
    paddingTop: '13px',
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: 'white',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export function HeaderSearch({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={90} className={classes.header} mb={110}>
      <div className={classes.inner}>
        <Group>
          {/* <Burger opened={opened} onClick={toggle} size="sm" /> */}
         <Text size={30}>IGSX</Text>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group>
            <IconSearch size={26} stroke={1.5} />
          </Group>
          <Group>
            <IconWallet size={26} stroke={1} />
            <Group>602.02 $</Group>
          </Group>
          <Group>
            <Avatar
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
              radius="xl"
              size={28}
            />
          </Group>
        </Group>
      </div>
    </Header>
  );
}
