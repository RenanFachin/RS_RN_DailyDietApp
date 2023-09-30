import { Text, TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, CircleStatus } from "./styles";

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export function Filter({ title, isSelected , ...props }: FilterProps) {
  return (
    <Container isSelected={isSelected} {...props}>
      {title === 'Sim' && <CircleStatus style={{backgroundColor: '#639339'}}/>}
      {title === 'Não' && <CircleStatus style={{backgroundColor: '#BF3B44'}}/>}

      <Text>
        {title}
      </Text>
    </Container>
  )
}