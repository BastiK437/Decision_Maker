#!/bin/sh
#input="~Workspace/Javascript/Decision_Maker/token"

if [ $(ps aux | grep node | awk '{print $2}')>0 ] 
  then 
    kill $(ps aux | grep node | awk '{print $2}') # kill the running instance of the bot
fi




