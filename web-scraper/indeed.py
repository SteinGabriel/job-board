from urllib.request import urlopen
from bs4 import BeautifulSoup
URL = 'https://www.indeed.ca/m/jobs?q=software+developer&l=Vancouver'


def extract_indeed_job_link(job_offer):
    link = job_offer.find('a')
    job_post_url = 'https://ca.indeed.com/' + link['href']
    return (job_post_url)


def extract_indeed_job_offers(soup):
    return (soup.findAll('h2', attrs={'class', 'jobTitle'}))


#.findAll('div', class_='row result clickcard')

# def extract_indeed_job_tiltle(soup):


def extract_indeed_job_title(job_offer):
    job_link = job_offer.find('a')
    return (job_link.contents[0])
    # return (jobs)


def create_indeed_report():
    page = urlopen(URL)
    soup = BeautifulSoup(page, 'html.parser')
