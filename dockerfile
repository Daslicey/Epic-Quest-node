FROM node:latest
ADD superApp.js .
CMD ["node", "superApp.js"]