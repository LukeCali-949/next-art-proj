import styled from "@emotion/styled";
import React from "react";
import { Typography } from "./Typography";
import Image from "next/image";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
}

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  rtl,
  ...rest
}) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Image
          alt="Logo Image"
          src="https://i.pinimg.com/736x/72/53/ff/7253ff073d9210e7ef8201c120725fa6.jpg"
          width={50}
          height={50}
        />
        <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
          Art Gallery
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
