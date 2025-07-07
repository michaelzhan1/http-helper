import { useState } from 'react';
import styled from 'styled-components';

const tabNames = ['body', 'headers', 'params'] as const;
type TabType = (typeof tabNames)[number];

const RequestBox = () => {
  const [activeTab, setActiveTab] = useState<TabType>('body');

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  const bodyInput = <StyledTextarea id='request' placeholder='Request body' />;
  const 

  return (
    <VerticalFlexContainer>
      <TabContainer>
        {tabNames.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => handleTabClick(tab)}
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </TabContainer>
      {bodyInput}
    </VerticalFlexContainer>
  );
};

const VerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  > * {
    flex: 1;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #f5f5f5;
    padding: 10px;

    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }

    &.active {
      border-bottom: 2px solid #007bff;
      background-color: #eaeaea;
    }

    &:hover {
      cursor: pointer;
      background-color: #e0e0e0;
    }
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  border-radius: 0 0 4px 4px;
  border: 0.8px solid rgb(204, 204, 204);
  background-color: #f5f5f5;
  resize: none;
  font-family: 'Source Code Pro', monospace;

  &:focus {
    outline: none;
    border-color: rgb(38, 132, 255);
    box-shadow: rgb(38, 132, 255) 0px 0px 1px;
  }
`;

export default RequestBox;
