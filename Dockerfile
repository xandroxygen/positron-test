FROM instructure/node-passenger:10
ENV APP_HOME /usr/src/app/
USER root
COPY nginx/passenger.conf /usr/src/nginx/conf.d/passenger.conf
COPY --chown=docker:docker . $APP_HOME
WORKDIR $APP_HOME
RUN yarn install
USER docker
