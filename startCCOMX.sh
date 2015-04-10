#! /bin/sh

sudo killall -TERM omxplayer.bin 2>/dev/null
sleep .1
#cat /bin/omxfifo | omxplayer -o local --win '300 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4
#omxplayer -o local --win '300 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4 < cat /bin/omxfifo
omxplayer -o local --win '300 0 1600 900' /media/PAGE/lineshaft_CC_1300x900.mp4