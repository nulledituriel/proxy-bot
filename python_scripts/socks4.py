import requests

sockspatrutype = requests.get("https://api.proxyscrape.com/?request=getproxies&proxytype=socks4&timeout=10000&country=all&ssl=all&anonymity=all")
with open('./results/socks4_proxies.txt', 'wb') as h:
    h.write(sockspatrutype.content)
h.close()