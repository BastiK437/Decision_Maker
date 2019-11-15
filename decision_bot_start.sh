#!/bin/bash
# Autor: Bastian Krammer
# Erstellt am: 10.11.2019
# Github: TODO
# Version: 1.0.1


pid=$(ps -e | grep 'node' | awk '{print $1}')

if [ $pid>0 ] 
  then 
    kill $pid # kill the running instance of the bot
    reset
fi

if [ "$1" == "kill" ] # start if
  then
    echo "killed old bot"    

  else
    # read the token from file
    input="/home/pi/Workspace/Javascript/Decision_Maker/token"
    while IFS= read -r line
    do
      token=$line
    done < "$input"

    # start the bot
    node /home/pi/Workspace/Javascript/Decision_Maker/decisionBot.js $token &

    echo "start new bot"

fi # end if



