#!/bin/bash
cd ~/carla-portfolio
ng build
rm -r ./dist/carla-portfolio/browser/assets/uploads/
scp -r ./dist/carla-portfolio/browser/* ubuntu@vps.nimbus3k.ch:/home/ubuntu/www
