from urllib.request import urlopen
from bs4 import BeautifulSoup
import time
import json


# TODO - make array of cities objects with city name and URL
# VAN_URL = 'https://vancouver.craigslist.ca/d/software-qa-dba-etc/search/sof?format=rss'
# MONT_URL = 'https://montreal.craigslist.ca/d/software-qa-dba-etc/search/sof?format=rss'
# TOR_URL = 'https://toronto.craigslist.ca/d/software-qa-dba-etc/search/sof?format=rss'
# cities_urls = [VAN_URL, MONT_URL, TOR_URL]

# format=rss because it's easier to manipulate data from rss format
URL = 'https://vancouver.craigslist.ca/d/software-qa-dba-etc/search/sof?format=rss'


def create_craiglist_offers_file():
    page = urlopen(URL)
    soup = BeautifulSoup(page, 'html.parser')
    offers = extract_job_offers(soup)
    updated_time = extract_updated_time(soup)
    json_file = create_json_file(offers, updated_time)

    write_json_file(json_file)
    return


def extract_job_offers(soup):
    items_set = soup.find('items')
    items = items_set.find('rdf:seq')
    job_offers = []
    for item in items:
        if len(str(item)) < 2:
            continue  # preventing empty lines (break lines)
        job_offers.append(item)
    return (job_offers)


def extract_updated_time(content):
    return (content.find('syn:updatebase').contents[0])


def create_json_file(offers, updated_time):
    json_file = {'updated_time': updated_time, 'website': 'craiglist'}
    json_file['list'] = []
    for offer in offers:
        offer_post_url = extract_url(offer)
        offer_post_content = extract_job_post_content(offer_post_url)
        offer_title = extract_job_title(offer_post_content)
        json_file['list'].append({'title': offer_title, 'url': offer_post_url})
        print(offer_title + ' ' + offer_post_url)

    return json_file


def extract_url(job_offer):
    start = 'rdf:resource="'
    start = (str(job_offer).find(start) + len(start))
    end = '"></rdf:li>'
    end = str(job_offer).find(end)
    return (str(job_offer)[start:end])


def extract_job_post_content(url):
    page = urlopen(url)
    soup = BeautifulSoup(page, 'html.parser')
    return (soup)


def extract_job_title(content):
    return (content.find('span', id='titletextonly').contents[0])


def write_json_file(json_file):
    with open('json-files/craiglist.json', 'w') as outfile:
        json.dump(json_file, outfile)
