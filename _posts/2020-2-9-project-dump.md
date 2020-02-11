---
layout: post
title: "Project Dump! Laser Harps, Smartwatch MIDI Control, and More!"
---

A lot of my projects either have been on a time-crunch or they were too fun to spend time documenting them!

So I've decided that I'd just side-step this documentation issue, and briefly showcase some of the things I've worked on but haven't posted.

---
# Laser Harp

{% include img.html 
           url="/assets/laser_harp/image.png" 
           description="Laser Harp with ultrasonic misters" 
           width="55%" float=true %}

I don't know how I came up with this idea, beyond inspiration from cheesy spy movies where they dodge under clearly-visible-lasers-for-some-reason. It's probably been done before, but I'm not sure it's been done with built in ultrasonic foggers.

The 3D model for this one was a massive challenge as I had not designed something as large and space constrained as this one. I learned a lot about long PWM'd wires being close to speaker amplfiers, the challenge of lining up 8 lasers in inaccurate 3D printed plastic, and why suspending water resevoirs right above your microcontroller may not be the best idea.

But it's pretty fun to play.

{% include vid.html url="/assets/laser_harp/laser_harp.mp4" %}

---
# PebbleMIDI

{% include img.html 
           url="/assets/pebble_midi/pebble_midi.jpg" 
           description="Watch App" 
           width="35%" float=true %}

[Github Link](https://github.com/alextechcc/PebbleMIDI)

I never really liked piano lessons as a kid, which is why of course the split second I grow up it's something I want to do again. I rented a piano to get back in to it, but before starting to properly learn it again, I noticed the MIDI USB port.

To get some more practice and fool around with my new Pebble watch, I used the Pebble C APIs to try and write a modular Pebble app that sent user-calibratable accelerometer and button press data to my phone, which would forward these packets as MIDI to control effects on my computer. It was fun learning how to write an Android and Pebble app that interact with each-other.

{% include vid.html url="/assets/pebble_midi/pebble_midi.mp4" %}

---
# Dark Souls On A "Keyboard"

I realized that I was only a few lines of Python from controlling my computer with the keyboard, so...

{% include vid.html url="/assets/darksouls_piano/darksouls_piano.mp4" %}

---
# Fish Assistant

[Github Link](https://github.com/alextechcc/fish_assistant)

{% include img.html 
           url="/assets/fish_assistant/fish_assistant.jpg" 
           description="The Fish Assistant" 
           width="35%" float=true %}

{% include img.html 
           url="/assets/fish_assistant/motor_spike.jpg" 
           description="Current Spike" 
           width="35%" float=true %}

This is a fairly old project, and it's a copy too! I had seen others build Amazon Alexa into a dancing fish gadget, and I thought it would be an excellent gift for my father who loves to fish.

This is a standalone device that contains a Raspberry Pi, an audio amplifier board, and a motor controller board attached to the Pi. This project taught me to carefully read datasheets. See that picture of the oscilloscope on the right? Well, it turns out that the motors in this device have large capacitors to smooth EMI emissions. These relatively low impedance devices suck up so much current that they trip the 'intelligent' over-current sensor in the motor driver IC.

Anyway, running a PI in this system needed quite a few scripts and init files to have a ready-status LED and a working power button, along with the ability to set the WiFi network when it fails to connect.

{% include vid.html url="/assets/fish_assistant/fish_video.mp4" %}
