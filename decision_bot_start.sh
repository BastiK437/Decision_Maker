#!/bin/sh

pid=$(ps -e | grep node | awk '{print $1}')

if [ pid>0 ] 
  then 
    kill pid # kill the running instance of the bot
fi




