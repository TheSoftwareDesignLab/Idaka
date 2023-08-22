# -*- coding: utf-8 -*-

"""
Information retrieval for good practices in ML for SE
LAURA HELENA CABRA ACELA 
"""

import csv
import re
import string
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk
nltk.download('stopwords')
nltk.download('omw-1.4')
nltk.download('wordnet')
nltk.download('punkt') 
from BM25 import BM25,tune_hyperparameters_BM25
""" from VSM import VSM
from LDA import LDA,tune_hyperparameters,compute_coherence_values """

""" from reading_new_docs import get_docs """""" 
from gensim.corpora import Dictionary """
""" import openpyxl """
""" import matplotlib.pyplot as plt """
""" import docx """
""" from Query_expansion import expansion """
import sys

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
# if __name__ == '__main__':

if __name__ == '__main__':
    # "Read the Practices from the csv"
    query= str(sys.argv[1])
    practices = sys.argv[2].split('|')

    
    #print(practices)
    #practices,original_paraphrased=get_docs()
    def get_practices():
        return practices
    "Cleaning the practices"
    
    sw=stopwords.words("english")
    
    "Return the list of tokens of the document"
    def tokenizer(doc):
        tokenized_doc=nltk.word_tokenize(doc)
        return tokenized_doc
    
    "Return the stemmed version of the tokens"
    def stemmer(tokens):
        porter_stemmer=nltk.stem.PorterStemmer()
        stemmed=[]
        for word in tokens:
            stemmed.append(porter_stemmer.stem(word))
        return stemmed
    
    "Return the lemmatized version of the tokens"
    def lemmatizer(tokens):
        token_lemmatizer = WordNetLemmatizer()
        lemmatized=[]
        for word in tokens:
            lemmatized.append(token_lemmatizer.lemmatize(word))
        return lemmatized
    
    "Return tokens of the doc that are not stop words"
    def remove_stopwords(tokens):
        cleaned_practice = []
        for token in tokens:
            if token not in sw:
                cleaned_practice.append(token)
        return cleaned_practice
        
    #print("tokens", tokenizer(practices[1]))
    #print("stemmed", stemmer(remove_stopwords(tokenizer(practices[1]))))
    #print("lamatized", lemmatizer(remove_stopwords(tokenizer(practices[1]))))
    
    "Return docs tokenized, without stop words and stemmed or lemmatized"
    def cleaning(docs, uni=True, lc=True,pun=True,num=True,sp=True,sw=True,st=True,lm=False):
        cleaned_practices = []
        all_tokens=[]
        for doc in docs:
            #Remove Unicode
            if uni:
                document_test = re.sub(r'[^\x00-\x7F]+', ' ', doc)
            # Lowercase the document
            if lc:
                document_test = document_test.lower()
            # Remove punctuations
            if pun:
                document_test = re.sub(r'[%s]' % re.escape(string.punctuation), ' ', document_test)
            # Remove the numbers
            if num:
                document_test = re.sub(r'[0-9]', '', document_test)
            # Remove the doubled space
            if sp:
                document_test = re.sub(r'\s{2,}', ' ', document_test)
            tokens=tokenizer(document_test)
            if sw:
                tokens=remove_stopwords(tokens)
            if st:
                tokens=stemmer(tokens)
            if lm:
                tokens=lemmatizer(tokens)
            joined_doc= ' '.join(tokens)
            cleaned_practices.append(joined_doc)
            all_tokens.append(tokens)
        return cleaned_practices, all_tokens
        # return cleaned_practices
    
    #Revise la similitud de las task y luego haga solo haga el proceso para las de esa task
    """ "Read the Practices from the csv"
    taskspractices = {}
    with open('Task-Practices.csv') as File:  
        reader = csv.reader(File, delimiter=';')
        for row in reader:
            if taskspractices.get(row[1]):
                taskspractices[row[1]].append(row[0])
            else:
                taskspractices[row[1]]=[]
                taskspractices[row[1]].append(row[0])
    tasks=list(taskspractices.keys())
     """
    
    # print(practices)
    def vectorize(docs):
        cleaned_docs,tokens=cleaning(docs)
        # Instantiate a TfidfVectorizer object
        vectorizer = TfidfVectorizer(use_idf=True)
        # It fits the data and transform it as a vector
        vector = vectorizer.fit_transform(cleaned_docs)
        #Only idf
        idf=vectorizer.idf_
        # Convert the X as transposed matrix
        vector = vector.T.toarray()
        # Create a DataFrame and set the vocabulary as the index
        df = pd.DataFrame(vector, index=vectorizer.get_feature_names_out())
        return [cleaned_docs,vectorizer,idf,df]
    def removing_original_duplicates(ranking):
        top=[]
        for doc in ranking.keys():
            original=get_original(practices[doc])
            if original not in top:
                top.append(original)
                # print(original)
                # print(ranking[doc])
        return top
    
    
    def get_original(doc):
        for k in original_paraphrased:
            if doc in original_paraphrased[k]:
                return k
    # Call the function
    def IR_models(query=None):
        # Add The Query
        if query is None:
            query = input("Please enter the query:")
        #queryVSM=query+" "+expansion(query)
        query = cleaning([query])[0][0]
        #queryVSM =cleaning([queryVSM])[0][0]
        # print(query)
        """ print("VSM with cosine similarity: ")
        print("Practices related---------------")
        cleaned_practices,vectorizer,idf,df=vectorize(practices)
        vsm= VSM(queryVSM, df,vectorizer,cleaned_practices, practices)
        vsm=removing_original_duplicates(vsm) """
        # print("")
        """ print("---------LDA------------ ")
        print("Practices related---------------")
        cleaned_docs,tokens=cleaning(practices)
        cleaned_query,query_tokens=cleaning([query])
        cleaned_docs,vectorizer,idf,df=vectorize(practices )"""
        # print un dict k: id practice, v: distance
        
    
        """ lda=LDA(tokens,query_tokens[0],df,practices)
        lda=removing_original_duplicates(lda) """
        # # # # # tune_hyperparameters(tokens,cleaned_docs)
        # # # # # # # print("Tasks related--------------------------")
        # # # # # # # cleaned_tasks,vectorizer_tasks,idf,df_tasks=vectorize(tasks)
        # # # # # # # task_onevsm=VSM(query, df_tasks,vectorizer_tasks,cleaned_tasks, tasks)
        # # # # # # # print("")
        # # # # # # # print("Practices related from the more related task-------------------------------------")
        # # # # # # # cleaned_taskpractices,vectorizer_taskpractices,idf_taskpractices,df_taskpractices=vectorize(taskspractices[task_onevsm])
        # # # # # # # VSM(query, df_taskpractices,vectorizer_taskpractices,cleaned_taskpractices, taskspractices[task_onevsm])
        # # # # # # # print("")
        # # # # # # # # # print("")
        """ print("-------BM25-------")
        print("Practices related---------------") """
        cleaned_practices,vectorizer,idf,df=vectorize(practices)
        bm25=BM25(query, cleaned_practices, vectorizer,practices,0.75,1)
        print(bm25)
        """ bm25=removing_original_duplicates(bm25) """
        # tune_hyperparameters_BM25(cleaned_practices, vectorizer,practices,original_paraphrased)
        # print("")
        # # # print("Tasks related--------------------------")
        # # # task_onebm25=BM25(query, cleaned_tasks, vectorizer_tasks,tasks)
        # # # print("")
        # # # print("Practices related from the more related task-------------------------------------")
        # # # BM25(query, cleaned_taskpractices, vectorizer_taskpractices,taskspractices[task_onebm25])
        """ return [vsm,lda,bm25] """
        return bm25

    IR_models(query)
    
