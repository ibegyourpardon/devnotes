first

go to

c:\Users\U\.atom

touch .apmrc

vi .apmrc

```
registry=https://registry.npm.taobao.org/
strict-ssl=false
```

then,set npm

```
npm config set registry https://registry.npm.taobao.org
```

check it.

```
apm install --check
```

if it shows

```
Checking for native build tools done
```

then everything's fine. go.
