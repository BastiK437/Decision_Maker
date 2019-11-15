#!/bin/bash

pid=$(ps -e | grep 'node' | awk '{print $1}')

if [ $pid>0 ] 
  then 
    kill $pid # kill the running instance of the bot
    echo "killed old bot"
fi

if [ "$1" == "start" ] # start if
  then

    # read the token from file
    input="/home/pi/Workspace/Javascript/Decision_Maker/token"
    while IFS= read -r line
    do
      token=$line
    done < "$input"

    # start the bot
    node /home/pi/Workspace/Javascript/Decision_Maker/decisionBot.js $token &

    echo "start new bot"

  #elif [ "$1"=="kill" ]
  #  then
      # bot already got killed

fi # end if



