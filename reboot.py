import RPi.GPIO as GPIO ## library that lets you control the Pi's GPIO pins
import os ## allows us to talk to the system like in the terminal
from sys import exit ## allows us to use "exit"
from time import sleep ## allows us to use "sleep"

GPIO.setwarnings(False) ## disables messages about GPIO pins already being in use
GPIO.setmode(GPIO.BOARD) ## indicates which pin numbering configuration to use
 
GPIO.setup(16, GPIO.IN) ## tells it that pin 16 (button) will be giving input
GPIO.setup(7, GPIO.OUT) ## tells it that pin 7 (LED) will be outputting
GPIO.output(7, GPIO.HIGH) ## sets pin 7 (LED) to "HIGH" or off

## set i's initial value to 0
i=0
 
## set prev_input's initial value to 0
prev_input=0

##  this while loop constantly looks for button input (presses)
while True:
    ##  if no button press
    if (GPIO.input(16) == False and prev_input!=1):
             i=i+1  ##  iteration count increases by 1
             GPIO.output(7,True) ##  switch on pin 7 (LED)
             sleep(0.5) ##  wait for 0.5 second
             GPIO.output(7,False) ##  switch off pin 7 (LED)
             sleep(1) ##  wait for 1 second
 
    ##  when button is pressed
    else:
             GPIO.output(7,GPIO.HIGH)  ##  turn pin 7 (LED) off
              ##  script to be called
             os.system("sudo reboot")  ##  reboots Pi
             prev_input=1
             exit()
