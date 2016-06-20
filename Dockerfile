###########################################################
#
# Dockerfile for tfk-seneca-sms
#
###########################################################

# Setting the base to nodejs 4.4.5
FROM mhart/alpine-node:4.4.5

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Extra tools for native dependencies
RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TFK_SENECA_SMS_TAG tfk-seneca-sms
ENV TFK_SENECA_SMS_URL https://sms.no
ENV TFK_SENECA_SMS_HOST localhost
ENV TFK_SENECA_SMS_PORT 8000
ENV TFK_SENECA_SMS_USERNAME username
ENV TFK_SENECA_SMS_PASSWORD password

# Startup
CMD ["node", "service.js", "--seneca-log=type:act"]