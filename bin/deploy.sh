#! /bin/bash

JEKYLL_ENV=production bundle exec jekyll b
git push origin master

config="hugle@gp-uk.net:~/httpdocs/"
rsync -av --del /home/hughie/sites/hugle.co.uk/hugle/_site/ $config
