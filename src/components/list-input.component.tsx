import { ListInputProps } from "@/types/props.type";
import styled from "styled-components";

const ListInput = ({ items, setItems }: ListInputProps) => {
  return (
    <VerticalFlexContainer>

    </VerticalFlexContainer>
  )
}

const VerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;