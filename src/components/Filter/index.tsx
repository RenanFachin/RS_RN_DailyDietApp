import { useTheme } from "styled-components/native";
import { ButtonIcon, ButtonText, Container, Content } from "./styles";

type Props = {
  textButton: "Sim" | "Não";
  isChecked?: boolean;
  onPress: () => void;
};

export function Filter({ textButton, isChecked, onPress }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      activeOpacity={0.6}
      underlayColor={textButton === "Sim" ? COLORS.GREEN[500] : COLORS.RED[500]}
      style={[
        isChecked && {
          backgroundColor:
            textButton === "Sim" ? COLORS.GREEN[500] : COLORS.RED[500],
        },
      ]}
      onPress={onPress}
    >
      <Content>
        <ButtonIcon textButton={textButton} />

        <ButtonText>{textButton}</ButtonText>
      </Content>
    </Container>
  );
}