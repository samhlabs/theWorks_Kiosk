#! /bin/sh

sudo killall -TERM omxplayer.bin 2>/dev/null;
sleep(.5);
omxplayer -o local --win '282 0 1600 900' LINESHAFT_1318x900.mp4;
exit 0