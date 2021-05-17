#! /bin/bash

bundle exec JEKYLL_ENV=production jekyll b
git push origin master

config="carrollonline_uk@gp-uk.net:~/httpdocs/"
rsync -av --del /home/hughie/sites/carrollonline.uk/carrollonline/_site/ $config
