# -*- coding: utf-8 -*-
"""
Created on Tue Oct 18 16:23:59 2022

@author: Laura
"""

# -*- coding: utf-8 -*-
"""
Created on Fri Oct 14 09:49:31 2022

@author: Laura
"""
import sys


import nltk
nltk.download('averaged_perceptron_tagger')
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
from nltk.corpus import wordnet as wn
import csv


        
def tag(sentence):
 words = word_tokenize(sentence)
 words = pos_tag(words)
 return words

def paraphraseable(tag):
 return tag.startswith('NN') or tag.startswith('JJ')

def pos(tag):
 if tag.startswith('NN'):
   return wn.NOUN
 # elif tag.startswith('JJ'):
 #   return wn.ADJ
 # elif tag.startswith('V'):
 #  return wn.VERB

def synonyms(word, tag):
    lemma_lists = [ss.lemmas() for ss in wn.synsets(word, pos(tag))]
    lemmas = [lemma.name() for lemma in sum(lemma_lists, [])]
    return set(lemmas)

def synonymIfExists(sentence):
 for (word, t) in tag(sentence):
   if paraphraseable(t):
    syns = synonyms(word, t)
    if syns:
     if len(syns) > 1:
      yield [word, list(syns)]
      continue
   yield [word, []]

def paraphrase(sentence):

  
    synonyms= synonymIfExists(sentence)
    synonyms_no_empty={}
    for x in synonyms:
        if x[1] != []:
            synonyms_no_empty[x[0]]=x[1]
    return synonyms_no_empty

        
    
def newSynonyms(sentence):
    resp=[]
    for (word, t) in tag(sentence):
        if paraphraseable(t):
            print(word)
            resp.append(word)
    return resp
query= str(sys.argv[1])
newSynonyms(query)


