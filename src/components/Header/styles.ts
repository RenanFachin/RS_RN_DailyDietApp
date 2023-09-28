import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const UserImgContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${({theme}) => theme.COLORS.GRAY[700]};
`

export const UserImg = styled.Image`
  width: 100%;
  height: 100%;
`