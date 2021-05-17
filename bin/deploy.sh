#! /bin/bash

JEKYLL_ENV=production bundle exec jekyll b
git push origin master

config="carrollonline_uk@gp-uk.net:~/httpdocs/"
rsync -av --del /home/hughie/sites/carrollonline.uk/carrollonline/_site/ $config
