import requests

httpstype = requests.get("https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all")
with open('./results/http_proxies.txt', 'wb') as g:
    g.write(httpstype.content)
g.close()