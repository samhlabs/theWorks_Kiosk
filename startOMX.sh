#! /bin/sh

sudo killall -TERM omxplayer.bin 2>/dev/null
sleep .1
clear
xterm -e sudo omxplayer -o local --win '282 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4 >/dev/null
clear
exit 0