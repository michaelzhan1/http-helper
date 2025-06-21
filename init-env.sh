#!/bin/bash

if [ ! -f "env/Scripts/activate" ]; then
    python -m venv env
    env/Scripts/python -m pip install -r requirements.txt
fi