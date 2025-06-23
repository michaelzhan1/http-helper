import { useState } from 'react';
import styled from 'styled-components';

import RequestBar from '@/components/request-bar.component';
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
      {response && (
        <div>
          <div>{response.body}</div>
          <div>{response.status}</div>
          <div>{JSON.stringify(response.headers)}</div>
        </div>
      )}
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
