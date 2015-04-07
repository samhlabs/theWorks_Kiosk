#! /bin/sh

sudo killall -TERM omxplayer.bin 2>/dev/null
sleep .1
sudo omxplayer -b -o local --win '282 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4 2>/dev/null
clear
exit 0