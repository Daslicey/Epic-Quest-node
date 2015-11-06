FROM node:latest
MAINTAINER daslicer@gmail.com
ADD superApp.js .
CMD ["node", "superApp.js"]
