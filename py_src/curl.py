# write a function that takes a url, method, headers, options, and a body, and 
# performs a curl request to the url. Make sure to escape quotes in the body.
# do it in the main process

import subprocess
import json

def curl_request(url, method='GET', headers=None, options=None, body=None):
    """Perform a curl request to the specified URL with given parameters."""
    
    # Prepare the curl command
    command = ['curl', '-X', method, url]

    # Add headers if provided
    if headers:
        for key, value in headers.items():
            command.append('-H')
            command.append(f'{key}: {value}')

    # Add options if provided
    if options:
        for option in options:
            command.append(option)

    # Add body if provided
    if body:
        command.append('-d')
        command.append(json.dumps(body))  # Escape quotes in the body

    # Execute the curl command
    result = subprocess.run(command, capture_output=True, text=True)

    return result.stdout