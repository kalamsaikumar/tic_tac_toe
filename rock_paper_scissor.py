import random
import os

flag=True
while(flag):

    os.system('cls' if os.name=='nt' else 'clear')

    print("Welcome to the rock paper scissors game")
    user_choice=int(input("Enter '0' for rock \n '1' for paper \n '2' for scissors \n"))
    computer_choice=random.randint(0,2)
    print(computer_choice)

    if user_choice==computer_choice:
        print("The game is draw")

    elif(computer_choice==0 and user_choice==2):
        print("Computer wins")

    elif(computer_choice>user_choice):
        print("Computer Wins")

    else:
        print("Users Wins")

    proceed=input("Do you want to continue ? Type 'yes' for continue and 'No' for exit \n")
    if(proceed=="yes"):
        flag=True
    else:
        flag=False
    

