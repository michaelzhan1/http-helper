import { CSSProperties, ChangeEvent, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { METHOD_OPTIONS } from '@/constants/curl.constant';
import { MethodOption, MethodType } from '@/types/http.type';
import { RequestBarProps } from '@/types/props.type';

const RequestBar = ({ onSend }: RequestBarProps) => {
  const [method, setMethod] = useState<MethodType>(METHOD_OPTIONS[0].value);
  const [url, setUrl] = useState<string>('');

  return (
    <HorizontalFlexContainer>
      <Select<MethodOption>
        options={METHOD_OPTIONS}
        defaultValue={METHOD_OPTIONS[0]}
        isSearchable={false}
        onChange={(option: MethodOption | null) =>
          setMethod(option?.value ?? ('GET' as MethodType))
        }
        styles={{
          menu: (base: CSSProperties): CSSProperties => ({
            ...base,
            marginTop: 0,
            width: 'max-content',
            minWidth: '100%',
          }),
        }}
      />
      <StyledInput
        placeholder='URL'
        value={url}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
      />
      <StyledButton onClick={() => onSend(method, url)}>Send</StyledButton>
    </HorizontalFlexContainer>
  );
};

const HorizontalFlexContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 1px 10px;
  border-radius: 4px;
  border: 0.8px solid rgb(204, 204, 204);

  &:focus {
    outline: none;
    border-color: rgb(38, 132, 255);
    box-shadow: rgb(38, 132, 255) 0px 0px 1px;
  }
`;

const StyledButton = styled.button`
  padding: 1px 10px;
  color: white;
  border-radius: 4px;
  border-width: 0.8px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  background-color: rgb(38, 132, 255);

  &:hover {
    cursor: pointer;
    background-color: rgb(28, 112, 235);
  }

  &:active {
    background-color: rgb(18, 92, 205);
  }
`;

export default RequestBar;
