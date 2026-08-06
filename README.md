# opennebula-in-docker-experimental

## Starting Up

To start OpenNebula execute the following command:
```bash
make start --always-make --ignore-errors
```

> `--ignore-errors` flag was added because `python3 systemctl3.py start opennebula` fails, but OpenNebula works fine

## E2E tests
Execute the following command to install needed dependencies:
```
npm ci
```

To run cypress E2E tests execute the following command:
```bash
npm run cypress:run:e2e:local
```
> Tests should be runned on clean environment
## Generating a new SSH key

Execute the following command to generate a new SSH key
```bash
ssh-keygen -t ed25519 -f ./vm-key
```
This key will be used to connect to the created VM

## Creating a VM

Open `https://localhost:2616` and login as `oneadmin` with `admin` password

![](/images/login.png)

Go to the `Settings` -> `Security`

Copy created SSH key from vm-key.pub and paste it to `SSH public key`

### Creating a new host

Go to `Infrastructure` -> `Hosts` -> `Create`  
Select Hypervisor - `KVM`  
Host - `localhost`

![](/images/host-1.png)
Click `Next` and select `default` cluster
![](/images/host-2.png)

### Creating a new image

Go to `Storage` -> `Images` -> `Create`  
Specify the name (e.g. `Ubuntu 24.04 Server Image`)  
Type - `Operating system image`  
Path/Url - `https://cloud-images.ubuntu.com/releases/noble/release/ubuntu-24.04-server-cloudimg-amd64.img`  
![](/images/image-1.png)
Click `Next` and select `default` datastore
![](/images/image-2.png)
Now click `Next` -> `Finish` and wait for the image to be ready
![](/images/image-3.png)

### Creating a virtual network

Go to `Networks` -> `Virtual networks` -> `Create`

Specify the name (e.g. `Private network`)
![](/images/network-1.png)
Click `Next`  
Select `Bridged` type in `Configuration` and enable `Use private host networking or a user-defined bridge`
![](/images/network-2.png)


Switch to the `Addresses` tab -> click `Address Range`  
First IPv4 address - `192.168.1.100`
Size(count of addresses) - `20`
Click `Add`
![](/images/network-3.png)

Switch to the `Context` tab  
Network address - `192.168.1.0`  
Gateway - `192.168.1.1`  
DNS - `8.8.8.8`  
Method - `static`  
Network mask - `255.255.255.0`  
![](/images/network-4.png)
Custom Attributes -> `BRIDGE_TYPE` `linux`
![](/images/network-5.png)
Click `Finish`

### Creating a VM template and VM

Go to `Templates` -> `VM Templates` -> `Create`

Hypervisor - `KVM`  
Specify the name (e.g. `Ubuntu Server 24.04 Template`)  
Memory - `2 GB`
![](/images/vm-template-1.png)

Physical CPU - `2`  
Virtual CPU - `2`
![](/images/vm-template-2.png)
Click `Next`  
`Storage` -> `Attach disk` -> `Image`  
Select created image -> `Next` -> `Finish`
![](/images/vm-template-3.png)

Switch to the `Network` tab -> `Attach NIC`
Switch to the `Select a network` and select created network
![](/images/vm-template-4.png)
Click `Next` and `Finish`

Switch to the `OS&CPU` tab
Select both: DISK0 and NIC0
![](/images/vm-template-5.png)
Click `Next` and `Finish`
![](/images/vm-template-6.png)

Select created template and click `Instantiate` button
![](/images/vm-template-7.png)
Click `Next` and `Finish`

### Connecting to the VM

#### Configuring network access
Open Visual Studio Code and execute the following commands:
```bash
sudo sysctl -w net.ipv4.ip_forward=1
echo 'net.ipv4.ip_forward=1' | sudo tee -a /etc/sysctl.conf
ip addr add 192.168.1.1/24 dev onebr0
ip link set onebr0 up


sudo iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE
sudo iptables -A FORWARD -i onebr0 -o eth0 -j ACCEPT
sudo iptables -A FORWARD -i eth0 -o onebr0 -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo sysctl -w net.ipv4.ip_forward=1
```

#### Connecting to the VM

Install and open [MobaXterm](https://mobaxterm.mobatek.net/)  
Click "Session" button  
Click "SSH"  
Paste VM ip address to "Remote host". IP address can be found on [VM page](http://localhost:2616/fireedge/sunstone/vm)
![](/images/vm-1.png)
Select "Specify username" and write ubuntu  
Open "Advanced SSH Settings" then click "Use private key" and select vm-key(without .pub) file that was created in opennebula-in-docker-experimental repo folder  
Click "Ok"  

