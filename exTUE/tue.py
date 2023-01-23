#import random and time module
import random
import time 

#name variable

name = str(input("A Bola-8 Mágica está querendo saber qual seu nome. Qual seu nome? "))
time.sleep(2)

while True:
    #question variable
    print("")
    print(f"Olá {name}")
    time.sleep(2)
    print("")
    question = input("Agora ela quer compreender sua indagação. Qual é sua pergunta de SIM ou NÃO? ")

    #random number generator to be associated to answer 
    random_number = random.randint(1, 9)

    #core logic of answers and its variable
    answer = str()

    if random_number == 1:
        answer = "Definitivamente sim!"
    elif random_number == 2:
        answer = "É decididamente que sim."
    elif random_number == 3: 
        answer = "Sem dúvida."
    elif random_number == 4:
        answer = "Responda nebulosa, tente novamente."
    elif random_number == 5:
        answer = "Pergunte novamente outro dia. Hoje com certeza não é o momento certo. Vai na sombra!"
    elif random_number == 6:
        answer = "Melhor eu não lhe falar agora."
    elif random_number == 7:
        answer = "Minhas fontes dizem que não."
    elif random_number == 8:
        answer = "A perspectiva não é tão boa."
    elif random_number == 9:
        answer = "Duvidosamente!"
    else:
        answer = "Error"


    #prints
    print("")
    print("")
    time.sleep(2)
    print(f"Ei Bola-8, {name} está fazendo a seguinte pergunta: {question}")
    print("")
    print("")
    time.sleep(4)

    print(f"- Bola-8 Mágica : {answer}")