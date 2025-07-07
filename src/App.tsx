import { useState } from 'react';
import styled from 'styled-components';

import RequestBar from '@/components/request-bar.component';
import RequestBox from '@/components/request-box.component';
import { eel } from '@/main';
import { EelHttpResponse, MethodType } from '@/types/http.type';

function App() {
  const [response, setResponse] = useState<EelHttpResponse | null>(null);

  const onSend = (method: MethodType, url: string) => {
    if (url === '') {
      alert('URL is required');
      return;
    }
    eel.make_http_request(
      url,
      method,
      {},
      {},
      '',
    )((response) => setResponse(response));
  };

  return (
    <FullPageVerticalFlexContainer className='App'>
      <RequestBar onSend={onSend} />
      <HorizontalFlexContainer>
        <RequestBox />
        {response && (
          <div style={{overflow: 'auto', padding: '10px'}}>
            <div>{response.body}</div>
            <div>{response.status}</div>
            <div>{JSON.stringify(response.headers)}</div>
          </div>
        )}
      </HorizontalFlexContainer>
    </FullPageVerticalFlexContainer>
  );
}

const FullPageVerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  gap: 12px;
`;

const HorizontalFlexContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 100%;

  > * {
    flex: 0 0 50%;
  }
`;

export default App;
