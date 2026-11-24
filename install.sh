#!/bin/sh
# 1. Setup Pipewire Config

# Ensure User Pipewire Config Folder is Present 
mkdir -p ~/.config/pipewire/pipewire.conf.d

# Copy Configuration File to User PipeWire Directory
cp ./sofnaPipeWire.conf ~/.config/pipewire/pipewire.conf.d/sofnaPipeWire.conf

# Restart PipeWire to Apply Configuration
systemctl --user restart pipewire pipewire-pulse wireplumber

# 2. Setup Files and Executable for Running the Program