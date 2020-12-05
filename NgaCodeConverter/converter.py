# encoding=utf-8

from NgaCodeConverter.parser import HTML2BBCode
import markdown2
from bs4 import BeautifulSoup
import re


class Converter:
    def convert(self, text):
        soup = BeautifulSoup(text, 'lxml')
        self.__formalize_html(soup)
        fontsize = self._get_default_fontsize(text)
        return self.__postprocess_text(str(HTML2BBCode().feed(str(soup), default_fontsize=fontsize)))

    @staticmethod
    def __formalize_html(soup):
        for x in soup.find_all():
            if len(x.get_text(strip=True)) == 0:
                children = x.findChildren(recursive=True)
                if all(y.name in ('span', 'strong', 'p') for y in children) and len(children) > 0:
                    x.extract()

    def _get_default_fontsize(self, text):
        reg = re.findall(r'font-size:\s*(\d+)pt', text)
        try:
            font_sizes = [int(s) for s in reg]
            default_size = max(set(font_sizes), key=font_sizes.count)
            if default_size < 8 or default_size > 20:
                default_size = 16
        except ValueError:
            default_size = 16
        return default_size

    def __postprocess_text(self, text):
        text = text.replace('&nbsp;', ' ')
        text = text.replace(u'\xa0', u' ')
        text = text.replace('[url=][/url]', '')
        return text


def html2nga(html):
    conv = Converter()
    bbcode = conv.convert(html)
    return bbcode


def md2nga(md):
    html = markdown2.markdown(md, extras=['code-friendly', 'cuddled-lists', 'fenced-code-blocks',
                                          'tables', 'wiki-tables'])
    bbcode = Converter().convert(html)
    return bbcode
