import { createStyles, Table, ScrollArea } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
  }
}));

interface TableScrollAreaProps {
  data: { AssetName: string; price: string; hchange: string }[];
}

export function RightTableArea({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const rows = data.map((row) => (
    <tr key={row.AssetName}>
      <td>{row.AssetName}</td>
      <td>{row.price}</td>
      <td>{row.hchange}</td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table>
        <thead className={cx(classes.header)}>
          <tr>
            <th>Asset Name</th>
            <th>Price</th>
            <th>24h change</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}