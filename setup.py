# coding: utf-8

from setuptools import setup, find_packages

setup(
    name='NgaCodeConverter',
    version='0.2.1',
    author='Jianing Shi',
    author_email='sjn4048@gmail.com',
    url='https://github.com/sjn4048/NgaCodeConverter',
    description='A tool to convert HTML/Markdown code into NGA code format.',
    license='Apache 2.0',
    packages=find_packages(),
    platforms=['all'],
    install_requires=['configparser', 'markdown2', 'bs4'],
    entry_points={},
    data_files=['NgaCodeConverter/data/myconf.conf']
)