#!/bin/sh

pid=$(ps -e | grep node | awk '{print $1}')

echo "$pid"

if [ pid>0 ] 
  then 
    kill $pid # kill the running instance of the bot
fi

if [ "$1"=="start"] # start if
  then

    # read the token from file
    input="/home/pi/Workspace/Javascript/Decision_Maker/token"
    while IFS= read -r line
    do
      token=$line
    done < "$input"

    # start the bot
    node /home/pi/Workspace/Javascript/Decision_Maker/decisionBot.js $token

  #elif [ "$1"=="kill" ]
  #  then
      # bot already got killed

fi # end if



