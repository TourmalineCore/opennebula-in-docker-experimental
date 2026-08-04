FROM ubuntu:24.04

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

RUN mkdir -p /etc/apt/keyrings \
 && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
 | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" \
 > /etc/apt/sources.list.d/nodesource.list

RUN apt-get update \
 && apt-get install -y nodejs

RUN sed -i 's/^\($ModLoad imklog\)/#\1/' /etc/rsyslog.conf

# https://bugzilla.redhat.com/show_bug.cgi?id=1046469#c11
# https://github.com/ansible-community/molecule/issues/1104
RUN rm -f /lib/systemd/system/systemd*udev* \
    && rm -f /lib/systemd/system/getty.target

STOPSIGNAL SIGRTMIN+3

VOLUME ["/sys/fs/cgroup"]
CMD ["/sbin/init"]