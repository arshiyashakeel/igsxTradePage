import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  boxShadow:{
    padding: "24px 12px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
  }
}));

interface TableSelectionProps {
  data: { Icon: string; Type: string; Avatar: string; AssetName: string; Balance: string; Amount: string; OrderDate: string}[];
}

export function OpenOrders({ data }: TableSelectionProps) {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.OrderDate)));

  const rows = data.map((item) => {
    const selected = selection.includes(item.OrderDate);
    return (
      <tr key={item.OrderDate} className={cx({ [classes.rowSelected]: selected })}>
       <td><Group><Avatar size={18} src={item.Icon}/>{item.Type}</Group></td> 
        <td>
          <Group spacing="sm">
            <Avatar size={26} src={item.Avatar} radius={26} />
            <Text size="sm" weight={500}>
              {item.AssetName}
            </Text>
          </Group>
        </td>
        <td>{item.Balance}</td>
        <td>{item.Amount}</td>
        <td>{item.OrderDate}</td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table>
        <thead>
          <tr>
            <th>Type             
            </th>
            <th>Asset Name</th>
            <th>Balance</th>
            <th>Amount</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}