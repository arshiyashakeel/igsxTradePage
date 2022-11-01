import { useState } from "react";
import { TextInput, PasswordInput, Tooltip, Center, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transition="pop-bottom-right"
    >
      <Text color="dimmed" sx={{ cursor: "help" }}>
        BTC
      </Text>
    </Tooltip>
  );

  return (
    <TextInput rightSection={rightSection} label="Price" placeholder="0.0258" />
  );
}

function TooltipFocus() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transition="pop-bottom-right"
    >
      <Text color="dimmed" sx={{ cursor: "help" }}>
        BTC
      </Text>
    </Tooltip>
  );
  return (
    <TextInput
      rightSection={rightSection}
      label="Quantity"
      placeholder="0.0258"
    />
  );
}

export function InputTooltip() {
  return (
    <div className="tooltip">
      <TooltipIcon />
      <TooltipFocus />
    </div>
  );
}
