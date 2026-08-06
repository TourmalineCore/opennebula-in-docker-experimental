start:

# I noticed that in documentation(https://docs.opennebula.io/7.0/software/installation_process/manual_installation/kvm_node_installation/)
# we should restart libvirtd after opennebula-node-kvm package installation, but i got error with systemctl3.py and started libvirtd manually

	sudo /usr/sbin/libvirtd --daemon

# When i tried to create a new host i got an monitoring error, so i checked /var/log/one/monitor.log and there was an error
# "Command execution failed (exit code: 255): exec 2>/dev/null; cd '/var/lib/one/remotes'/ && rsync -LRaz --delete . 'localhost':'/var/tmp/one'/"
# Then i tried to execute "rsync -LRaz --delete . 'localhost':'/var/tmp/one'/"" by oneadmin user and got new error "ssh: connect to host localhost port 22: Connection refused"

	python3 systemctl3.py start ssh

# after restarting the container the /run folder is cleaned and if we try to manage VM we get an error 
# "cannot bind to path /run/one/ssh-socks/ctl-M-d48288831690091159c0b372ef75d08f9cfc867a.sock.wu6z2u8clA2MNvUP: No such file or directory"
	mkdir -p /run/one/ssh-socks
	
	sudo chown oneadmin:oneadmin /run/one/ssh-socks

# When i tried to create a new VM i got an error "failed to connect socket to '/run/libvirt/virtlogd-sock'"
# Solution: https://github.com/crc-org/crc/issues/629#issuecomment-534367420
	python3 systemctl3.py start virtlogd

# After restarting the container it's needed to recreate this folder because without it opennebula fails to start
	mkdir -p /run/lock/one
	
	sudo chown oneadmin:oneadmin /run/lock/one

#  another way to start opennebula
# 	sudo -u oneadmin /usr/bin/oned 

	python3 systemctl3.py start opennebula

# When i tried to connect to VM using VNC i've get a client error so i checked /var/log/one/fireedge.log
# and there was error "Error: connect ECONNREFUSED 127.0.0.1:4822"
# At OpenNebula forum i found out that 4822 is a Guacamole proxy port
# Then i found out that opennebula has the opennebula-guacd package and tried to start it and it worked

	python3 systemctl3.py start opennebula-guacd
	
	python3 systemctl3.py start opennebula-fireedge

	oneuser passwd oneadmin admin && echo oneadmin:admin > /var/lib/one/.one/one_auth