from selenium import webdriver

# @author: Paulo Henrique Ziemer dos Santos (Winpenning)

def before_all(context):
    print("Extração iniciada.\n - Made in Brazil.")
    options = webdriver.ChromeOptions()
    context.driver = webdriver.Chrome()

def before_scenario(context, scenario):
    context.driver.maximize_window()
    context.driver.implicitly_wait(15)

def after_scenario(context,scenario):
    print()
    print("Extração realizada com sucesso!")

def after_all(context):  
    context.driver.quit()