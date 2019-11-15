#!/bin/sh
#input="~Workspace/Javascript/Decision_Maker/token"

if [ $(ps -e | grep node | awk '{print $1}')>0 ] 
	then 
	echo "Bot laeuft"
	kill $(ps -e | grep node | awk '{print $1}')
fi

input="/home/pi/Workspace/Javascript/Decision_Maker/token"
while IFS= read -r line
do
  token=$line
done < "$input"

#echo "$token"
node /home/pi/Workspace/Javascript/Decision_Maker/decisionBot.js $token &
