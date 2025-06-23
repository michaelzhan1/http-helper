# HTTP Helper

This is an extremely lightweight clone of Postman that lets you run and store basic HTTP requests. It uses a React frontend with a Python backend, connected via the [Eel](https://github.com/python-eel/Eel) Python package and built using PyInstaller. THis was created from the [template](https://github.com[/KevinRobben](https://github.com/KevinRobben)/Eel/tree/main/examples/11%20-%20ViteReact_ts) by [@KevinRobben](https://github.com/KevinRobben). **Currently, this project is built with Windows in mind only.**

## Quick Start

1. **Configure:** In the app's directory, run `npm install` and `npm run init:env` to set up the node and Python environments.
2. **Develop:** Run `npm run dev` to spin up the frontend assets and backend server. Hot module reloading is enabled.
3. **Build:** Run `npm run build` to build and package the project into an executable. The output is located at `dist/main/main.exe`