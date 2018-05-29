
# 062890900101.dkr.ecr.ap-southeast-1.amazonaws.com/r-meta-weather
FROM cypress/browsers:chrome65-ff57
RUN npm i cypress
RUN firefox --version
RUN $(npm bin)/cypress run --browser chrome
