import requests

sockscincitype = requests.get("https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt")
with open('./results/socks5_proxies.txt', 'wb') as i:
    i.write(sockscincitype.content)
i.close()