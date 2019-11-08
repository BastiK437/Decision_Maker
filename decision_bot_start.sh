#!/bin/bash
#input="~Workspace/Javascript/Decision_Maker/token"
input="/home/pi/Workspace/Javascript/Decision_Maker/token"
while IFS= read -r line
do
  token=$line
done < "$input"

#echo "$token"
node /home/pi/Workspace/Javascript/Decision_Maker/decisionBot.js $token
