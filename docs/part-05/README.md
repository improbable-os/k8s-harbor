# Initial Harbor tasks

YouTube video: [https://youtu.be/DcArQEFgk5s](https://youtu.be/DcArQEFgk5s)

Let's do some initial Harbor configuration...

If you are using Let's encrypt staging you need to download and use their
"Fake LE Root X1" certificate for curl, helm and k8s cluster:

```bash
[ ${LETSENCRYPT_ENVIRONMENT} = "staging" ] && \
sudo mkdir -pv /etc/docker/certs.d/core.${MY_DOMAIN}/ && \
sudo wget -q https://letsencrypt.org/certs/fakelerootx1.pem -O /etc/docker/certs.d/core.${MY_DOMAIN}/ca.crt && \
export SSL_CERT_FILE=/etc/docker/certs.d/core.${MY_DOMAIN}/ca.crt && \
for EXTERNAL_IP in $(kubectl get nodes --output=jsonpath="{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}"); do \
  ssh -q -o StrictHostKeyChecking=no -l ec2-user ${EXTERNAL_IP} \
    "sudo mkdir -p /etc/docker/certs.d/core.${MY_DOMAIN}/ && sudo wget -q https://letsencrypt.org/certs/fakelerootx1.pem -O /etc/docker/certs.d/core.${MY_DOMAIN}/ca.crt" ; \
done && \
echo "*** Done"
```

Output:

```bash
```

## Add Project

* Go to `Projects`, click on `NEW PROJECT` and create "private"
  `my_project` project.

You can also use the API directly:

```bash
curl -u "admin:admin" -X POST -H "Content-Type: application/json" "https://core.${MY_DOMAIN}/api/projects" --data "{ \"project_name\": \"my_project\", \"public\": 0 }"
```

## LDAP Authentication

List users which are in Active Directory:

```bash
ldapsearch -LLL -x -h winad01.${MY_DOMAIN} -D cn=ansible,cn=Users,dc=mylabs,dc=dev -w ansible -b cn=users,dc=mylabs,dc=dev -s sub "(cn=aduser*)" dn name description memberOf
```

Output:

```text
dn: CN=aduser01,CN=Users,DC=mylabs,DC=dev
description: User 01 - Group 01
memberOf: CN=adgroup01,CN=Users,DC=mylabs,DC=dev
name: aduser01

dn: CN=aduser02,CN=Users,DC=mylabs,DC=dev
description: User 02 - Group 01
memberOf: CN=adgroup01,CN=Users,DC=mylabs,DC=dev
name: aduser02

dn: CN=aduser03,CN=Users,DC=mylabs,DC=dev
description: User 03 - Group 02
memberOf: CN=adgroup02,CN=Users,DC=mylabs,DC=dev
name: aduser03

dn: CN=aduser04,CN=Users,DC=mylabs,DC=dev
description: User 04 - Group 02
memberOf: CN=adgroup02,CN=Users,DC=mylabs,DC=dev
name: aduser04

dn: CN=aduser05,CN=Users,DC=mylabs,DC=dev
description: User 05 - Group 03
memberOf: CN=adgroup03,CN=Users,DC=mylabs,DC=dev
name: aduser05

dn: CN=aduser06,CN=Users,DC=mylabs,DC=dev
description: User 06 - Group 03
memberOf: CN=adgroup03,CN=Users,DC=mylabs,DC=dev
name: aduser06
```

List groups which are in Active Directory:

```bash
ldapsearch -LLL -x -h winad01.${MY_DOMAIN} -D cn=ansible,cn=Users,dc=mylabs,dc=dev -w ansible -b cn=users,dc=mylabs,dc=dev -s sub "(cn=adgroup*)" dn name description member
```

Output:

```text
dn: CN=adgroup01,CN=Users,DC=mylabs,DC=dev
description: AD User Group  01
member: CN=aduser02,CN=Users,DC=mylabs,DC=dev
member: CN=aduser01,CN=Users,DC=mylabs,DC=dev
name: adgroup01

dn: CN=adgroup02,CN=Users,DC=mylabs,DC=dev
description: AD User Group  02
member: CN=aduser04,CN=Users,DC=mylabs,DC=dev
member: CN=aduser03,CN=Users,DC=mylabs,DC=dev
name: adgroup02

dn: CN=adgroup03,CN=Users,DC=mylabs,DC=dev
description: AD User Group  03
member: CN=aduser06,CN=Users,DC=mylabs,DC=dev
member: CN=aduser05,CN=Users,DC=mylabs,DC=dev
name: adgroup03
```

Configure LDAP/Active Directory authentication in Harbor by going to
`Administration` -> `Configuration` -> `Authentication`:

* `Auth Mode: LDAP`
* `LDAP URL: ldap://winad01.mylabs.dev`
* `LDAP Search DN: cn=ansible,cn=Users,dc=mylabs,dc=dev`
* `LDAP Search Password: ansible`
* `LDAP Base DN: cn=users,dc=mylabs,dc=dev`
* `LDAP UID: sAMAccountName`
* `LDAP Scope: OneLevel`
* `LDAP Group Base DN: cn=users,dc=mylabs,dc=dev`
* `LDAP Group GID: sAMAccountName`
* `LDAP Group Admin DN: cn=adgroup03,cn=users,dc=mylabs,dc=dev`
* `LDAP Group Scope: OneLevel`

It's possible to use API call as well:

```bash
curl -u "admin:admin" -X PUT "https://core.${MY_DOMAIN}/api/configurations" -H "Content-Type: application/json" -d \
"{
  \"auth_mode\": \"ldap_auth\",
  \"ldap_base_dn\": \"cn=users,dc=mylabs,dc=dev\",
  \"ldap_group_admin_dn\": \"cn=adgroup03,cn=users,dc=mylabs,dc=dev\",
  \"ldap_group_attribute_name\": \"sAMAccountName\",
  \"ldap_group_base_dn\": \"cn=users,dc=mylabs,dc=dev\",
  \"ldap_group_search_scope\": 1,
  \"ldap_scope\": 1,
  \"ldap_search_dn\": \"cn=ansible,cn=Users,dc=mylabs,dc=dev\",
  \"ldap_search_password\": \"ansible\",
  \"ldap_uid\": \"sAMAccountName\",
  \"ldap_url\": \"ldap://winad01.mylabs.dev\"
}"
```

![Harbor Authentication Configuration page](./harbor_ldap_auth_configuration.png
"Harbor Authentication Configuration page")

Open a new tab with Harbor login page
([https://core.mylabs.dev](https://core.mylabs.dev)) and login as:

* User: `aduser01`
* Password: `admin`

You should see limited view on the right side containing only `Projects`
and `Logs`:

![Harbor - Standard user view](./harbor_standard_user_view.png
"Harbor - Standard user view")

Open a new tab with Harbor login page
([https://core.mylabs.dev](https://core.mylabs.dev)) and login as:

* User: `aduser06` and `aduser05`
* Password: `admin`

This user belongs to group `adgroup03` which is group containing Harbor
Administrators. You should be able to see much more details in Harbor now
and also Users table has some details:

![Harbor - Admin view](./harbor_admin_view.png "Harbor - Admin view")