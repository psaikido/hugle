#! /bin/bash

bundle exec jekyll b
git push origin master

config="hugle@gp-uk.net:~/httpdocs/"
rsync -av --del /home/hughie/sites/hugle.uk/hugle/_site/ $config

