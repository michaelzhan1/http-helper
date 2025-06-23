import requests
from typing import Dict, Literal

MethodType = Literal['GET', 'POST', 'PUT',
                     'DELETE', 'PATCH', 'HEAD', 'OPTIONS']


def http_request(url: str,
                 method: MethodType,
                 params: Dict[str, str],
                 headers: Dict[str, str],
                 body: str) -> Dict[str, str]:
    """Perform an http request to the specified URL with given parameters."""
    response = requests.request(method, url, params=params, headers=headers, data=body)
    return {
        'body': response.text,
        'status': response.status_code,
        'headers': dict(response.headers)
    }
