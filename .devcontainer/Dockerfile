FROM cypress/browsers:node-22.18.0-chrome-138.0.7204.183-1-ff-141.0-edge-138.0.3351.121-1

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    software-properties-common \
    rsyslog systemd systemd-cron sudo \
    iproute2 \
    make \
    curl \
    ca-certificates \
    gnupg \
    && rm -Rf /var/lib/apt/lists/* \
    && rm -Rf /usr/share/doc && rm -Rf /usr/share/man \
    && apt-get clean

# OpenNebula Fireedge requires NodeJS 20
RUN mkdir -p /opt/node20 \
 && curl -fsSL https://nodejs.org/dist/v20.19.5/node-v20.19.5-linux-x64.tar.xz -o /tmp/node20.tar.xz \
 && tar -xJf /tmp/node20.tar.xz --strip-components=1 -C /opt/node20 \
 && rm /tmp/node20.tar.xz

RUN sed -i 's/^\($ModLoad imklog\)/#\1/' /etc/rsyslog.conf

# https://bugzilla.redhat.com/show_bug.cgi?id=1046469#c11
# https://github.com/ansible-community/molecule/issues/1104
RUN rm -f /lib/systemd/system/systemd*udev* \
    && rm -f /lib/systemd/system/getty.target

STOPSIGNAL SIGRTMIN+3

VOLUME ["/sys/fs/cgroup"]
CMD ["/sbin/init"]

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    software-properties-common \
    rsyslog systemd systemd-cron sudo \
    iproute2 \
    make \
    curl \
    ca-certificates \
    gnupg \
    && rm -Rf /var/lib/apt/lists/* \
    && rm -Rf /usr/share/doc && rm -Rf /usr/share/man \
    && apt-get clean

# RUN mkdir -p /etc/apt/keyrings \
#  && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
#  | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

# RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" \
#  > /etc/apt/sources.list.d/nodesource.list

# RUN apt-get update \
#  && apt-get install -y nodejs \
#  && npm install -g typescript

RUN sed -i 's/^\($ModLoad imklog\)/#\1/' /etc/rsyslog.conf

# https://bugzilla.redhat.com/show_bug.cgi?id=1046469#c11
# https://github.com/ansible-community/molecule/issues/1104
RUN rm -f /lib/systemd/system/systemd*udev* \
    && rm -f /lib/systemd/system/getty.target

STOPSIGNAL SIGRTMIN+3

VOLUME ["/sys/fs/cgroup"]
CMD ["/sbin/init"]