#! /bin/bash

config="carrollonline_uk@gp-uk.net:~/httpdocs/"
rsync -av --del /home/hughie/sites/carrollonline.uk/carrollonline/_site/ $config