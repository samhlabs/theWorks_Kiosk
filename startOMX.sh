#! /bin/sh

sudo killall -TERM omxplayer.bin 2>/dev/null #Kill all previously running omxplayer instances

sleep .1 #breath... give that damn processor a break already

#cat /bin/omxfifo | omxplayer -o local --win '300 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4
#pipe a read from omxfifo by omxplayer

#omxplayer -o local --win '300 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4 < cat /bin/omxfifo
#i think this is the same as above, just exhausting options

omxplayer -o local --win '300 0 1600 900' /media/PAGE/lineshaft_1300x900.mp4 #launch the video // TO DO: replace this with variables for video and window size, or make easily replacable