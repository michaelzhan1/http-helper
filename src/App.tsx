import styled from 'styled-components';

import RequestBar from '@/components/request-bar.component';
import { MethodType } from '@/types/curl.type';

function App() {
  const onSend = (method: MethodType, url: string) => {
    if (url === '') {
      alert('URL is required');
      return;
    }
    console.log(`Calling ${url} with ${method}`);
  };

  return (
    <FullPageVerticalFlexContainer className='App'>
      <RequestBar onSend={onSend} />
    </FullPageVerticalFlexContainer>
  );
}

const FullPageVerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default App;
