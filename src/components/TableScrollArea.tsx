import { useState } from 'react';
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
  data: { Price: string; Amount: string; Total: string }[];
}

export function TableScrollArea({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const rows = data.map((row) => (
    <tr key={row.Price}>
      <td>{row.Price}</td>
      <td>{row.Amount}</td>
      <td>{row.Total}</td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table>
        <thead className={cx(classes.header)}>
          <tr>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}