#! /bin/sh

sudo killall -TERM omxplayer.bin 2>/dev/null #Kill all previously running omxplayer instances
sleep .1 #breath... give that damn processor a break already
omxplayer -o local --win '300 0 1600 900' /media/PAGE/lineshaft_CC_1300x900.mp4 #launch the video // TO DO: replace this with variables for video and window size, or make easily replacable