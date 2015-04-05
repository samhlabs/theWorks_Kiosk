#! /usr/bin/env python

import RPi.GPIO as GPIO ## library that lets you control the Pi's GPIO pins
import os ## allows us to talk to the system like in the terminal
from sys import exit ## allows us to use "exit"
from time import sleep ## allows us to use "sleep"

GPIO.setwarnings(False) ## disables messages about GPIO pins already being in use
GPIO.setmode(GPIO.BOARD) ## indicates which pin numbering configuration to use

GPIO.setup(40, GPIO.IN) #, pull_up_down=GPIO.PUD_DOWN) #watch pin 40 for a button press
GPIO.setup(38, GPIO.OUT) #setup pin 7 to output for a LED
GPIO.output(38, GPIO.HIGH) #Turn on the LED on pin 38

global count
count = 0 #global count set to 0

def reboot(): #reboot function that blinks LED rapidly and loops until button is released or jumps to shutdown fuction
	global count #load the global count
	while GPIO.input(40) and count < 10: #as long as button is pressed and the count is less than 10 blink the LED faster
		GPIO.output(38,True) #led off
		sleep(.1)
		GPIO.output(38,False) #led on
		sleep(.1)
		GPIO.output(38,True) #led off
		sleep(.1)
		GPIO.output(38,False) #led on
		sleep(.1)
		count = count + 1 #increase the counter to go to full shutdown
	if count >= 10:
		shutdown() #jump to shutdown function
	else:
		GPIO.output(38,True) #led off
		os.system("sudo reboot") #reboot the machine
		sleep(3)
		GPIO.cleanup()
		exit

def shutdown():
	GPIO.output(38,True) #led off
	os.system("sudo shutdown -h now") #shutdown the machine
	sleep(3)
	GPIO.cleanup()
	exit


def idleLoop(): #loop watching for button press
	global count #grab the global count variable
	while True: #initiate infinite loop waiting for button press
		if GPIO.input(40) == False: #if the button is not pressed, blink an LED on pin 38 to signify script is running
			count = 0 #reset the count
			GPIO.output(38,True) #led off
			sleep(.3)
			GPIO.output(38,False) #led on
			sleep(.7)
		else:
			GPIO.output(38,False) #turn LED on pin 38 on
			if GPIO.input(40): #if button on pin 40 is pressed
				sleep(.5) #delay for count
				count = count + 1 #start counting to determine if you want reboot or shutdown
				if count == 2:
					reboot() #goto function reboot /// once in this function, the machine reboots regardless

idleLoop() #start the idle loop function
GPIO.cleanup() #clean up the GPIO python pin library



#  ===============  #
#  [   S A M H   ]  #
#  ===============  #
