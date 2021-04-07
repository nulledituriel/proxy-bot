import requests

alltypes = requests.get("https://api.proxyscrape.com/?request=getproxies&proxytype=all&timeout=10000&country=all&ssl=all&anonymity=all%22")
with open('./results/all_proxies.txt', 'wb') as f:
    f.write(alltypes.content)
f.close()
