"""Main Python application file for the EEL-CRA demo.

To build for production:
npm run build
python -m eel main.py dist_vite --onefile --path env/lib/site-packages --noconsole
"""

import platform
import sys
from typing import Dict
from py_src.replace_in_file import replaceInfile, findFileRe
from py_src.port_check import find_unused_port
from py_src.http import http_request, MethodType

import eel


@eel.expose
def make_http_request(url: str,
                      method: MethodType,
                      params: Dict[str, str],
                      headers: Dict[str, str],
                      body: str) -> Dict[str, str]:
    """Expose a function to perform an http request from the Eel frontend."""
    return http_request(url, method, params, headers, body)


def start_eel(develop):
    """Start Eel with either production or development configuration."""

    if develop:
        directory = 'src'
        app = None
        page = {'port': 5173}
        eel_port = 5169
    else:
        directory = 'dist_vite'
        app = 'chrome'
        page = 'index.html'

        # find a unused port to host the eel server/websocket
        eel_port = find_unused_port()

        # replace the port in the web files
        replace_file = findFileRe("./dist_vite/assets", "index.*.js")
        replaceInfile(f"./dist_vite/assets/{replace_file}",
                      'ws://localhost:....', f"ws://localhost:{eel_port}")
        replaceInfile("./dist_vite/index.html", 'http://localhost:.....eel.js',
                      f"http://localhost:{eel_port}/eel.js")

    eel.init(directory, ['.tsx', '.ts', '.jsx', '.js', '.html'])

    eel_kwargs = dict(
        host='localhost',
        port=eel_port,
        size=(1280, 800),
    )
    try:
        eel.start(page, mode=app, **eel_kwargs)

    except EnvironmentError:
        # If Chrome isn't found, fallback to Microsoft Edge on Win10 or greater
        if sys.platform in ['win32', 'win64'] and int(platform.release()) >= 10:
            eel.start(page, mode='edge', **eel_kwargs)
        else:
            raise


if __name__ == '__main__':
    import sys

    # Pass any second argument to enable debugging
    start_eel(develop=len(sys.argv) == 2)
