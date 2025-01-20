FROM node:22.6.0-bookworm

ARG USERNAME=node

WORKDIR /usr/src/web

COPY . .
COPY package* .
RUN npm install


USER ${USERNAME}
COPY docker-entrypoint.sh /home/${USERNAME}/
# RUN chmod +x /home/${USERNAME}/docker-entrypoint.sh
ENTRYPOINT ["/home/node/docker-entrypoint.sh"]

ENV SHELL=/bin/bash
SHELL ["/bin/bash"]

CMD [ "sleep", "infinity" ]