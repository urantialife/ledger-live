import React, { useState } from "react";
import styled from "styled-components";

import Text from "@ui/components/asorted/Text";
import Flex from "@ui/components/layout/Flex";
import theme from "./light.json";
import type { Palette } from "@ui/styles/palettes/index";

export default { title: "Particles" };

const ColorArea = styled.div<{ type: keyof Palette; shade: string }>`
  width: 200px;
  aspect-ratio: 1;
  background-color: ${(p) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore next-line
    return p.theme.colors.palette[p.type][p.shade];
  }};
  cursor: pointer;
  border-radius: 2px;
`;

type CardColorProps = { shade: string; type: string; value: string };
const CardColor = ({ shade, type, value }: CardColorProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  const onClick = (type: string, shade: string): void => {
    navigator.clipboard.writeText(`p.theme.colors.palette.${type}.${shade}`);
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ColorArea type={type as keyof Palette} shade={shade} onClick={() => onClick(type, shade)} />
      <Text type="tiny">{isHovered ? value : shade}</Text>
    </Flex>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { type: _, ...palette } = theme;

export const Colors = (): JSX.Element => (
  <Flex flexDirection="column" rowGap="2rem">
    {Object.entries(palette).map(([type, shades]: [string, Array<string>]) => (
      <Flex flexDirection="column" rowGap="1rem">
        <Text type="h2" textTransform="uppercase">
          {type}
        </Text>
        <Flex columnGap="0.5rem" rowGap="0.5rem" flexWrap="wrap">
          {Object.entries(shades).map(([shade, value]) => (
            <CardColor key={shade} shade={shade} type={type} value={value} />
          ))}
        </Flex>
      </Flex>
    ))}
  </Flex>
);