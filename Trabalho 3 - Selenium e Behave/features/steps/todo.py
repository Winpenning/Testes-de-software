from behave import given, when, then
from selenium.webdriver.common.by import By 
import time
# @author: Paulo Henrique Ziemer dos Santos (Winpenning)

def wait():
    time.sleep(1)

@given(u'que eu esteja na página')
def go_to_page(context):
    context.driver.get('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    wait()

@when(u'clica no artigo em destaque')
def go_to_campus_list(context):
    campus = context.driver.find_element(By.XPATH,'//*[@id="mw-content-text"]/div[1]/div[2]/div[1]/div[2]/p[2]/b/a')
    campus.click()
    wait()

@when(u'clicar na lista de linguagem')
def go_to_campus(context):
    context.driver.find_element(By.XPATH,'//*[@id="p-lang-btn-checkbox"]').click() 
    wait()

@when(u'altera a linguagem para inglês')
def go_to_courses(context):
    context.driver.find_element(By.XPATH,'/html/body/div[1]/div[2]/div[1]/div/ul/li[4]/a').click() 
    wait()

@then(u'coloca o artigo em um arquivo .txt')
def a(context):
    with open('data.txt', 'w', encoding='utf-8') as arquivo:
            artigo = context.driver.find_elements(By.XPATH, '//*[@id="bodyContent"]')
            for conteudo in artigo:
                print (conteudo.text)
                arquivo.write(conteudo.text+'\n')
    arquivo.close()