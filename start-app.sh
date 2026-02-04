#!/bin/bash
export NVM_DIR="/home/owner/.nvm"
# load nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd /srv/samba/public/converso-whatsapp-api-v2
npm run start
