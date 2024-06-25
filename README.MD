<!--
Copyright(C) 2009 by Xilinx, Inc. All rights reserved.

The files included in this design directory contain proprietary, confidential information of Xilinx, Inc., are distributed under license from Xilinx, Inc., and may be used, copied, and/or disclosed only pursuant to the terms of a valid license agreement with Xilinx, Inc. This copyright notice must be retained as part of this text at all times.
-->

# Pong Project

## Overview
Pong is a project featuring a mixed schematic, VHDL, and Verilog implementation designed for the Xilinx\Digilent Spartan-3 demo board. It utilizes PS2 and VGA monitor connections to create a classic pong game.

### Design Type
- **ISE**: Implemented on chip 3s500e FG320-4

### Controls (Inputs)
- `clk_ic4`: 50 MHz clock input from the on-board oscillator
- `btn(3)`: Leftmost push button on S-3 demo board used as reset for design
- `ps2d`: Data input from PS2 port
- `ps2c`: Clock input from PS2 port

### Outputs
- `seg_<a,b,c,d,e,f,g,dp>`: 7-segment display used to show the game title
- `an(3:0)`: Anode control for determining active seven-segment display
- `vga_red`, `vga_blue`, `vga_green`: Color signals to VGA monitor
- `vga_vs`: Vertical synchronization signal to VGA monitor
- `vga_hs`: Horizontal synchronization signal to VGA monitor

### Description
This project implements a simple pong game where:
- PS2 keyboard inputs control the paddles and ball serving.
- The game is displayed on a VGA monitor.
- Keyboard controls:
  - Up arrow key: Move right paddle up
  - Down arrow key: Move right paddle down
  - 'W' key: Move left paddle up
  - 'S' key: Move left paddle down
  - Space bar: Serve the ball

### Source Files
- `pong_top.sch`: Top-level schematic with FPGA pin connections and demo board features layout
- `pong_cntrl.vhd`: Entity containing the pong game logic
- `testram.vhd`: Entity with an array of data elements representing VGA display patterns
- `vgacore_multi.vhd`: Entity for VGA display control
- `game_title.v`: Module displaying "PONG" on the four seven-segment LEDs of the Spartan3 Demo Board
- `read_ps2.v`: Module interpreting scan codes from the keyboard to move paddles or serve
- `ps2_cntrl.v`: Module receiving clock and serial data from PS2 port and outputting scan codes
- `vga_interface.vhd`: Entity interpreting color output to VGA monitor

### Simulation
Behavioral and RTL simulation conducted using `pong_tb.v`.

### Note
If you are running this example in a read-only location, the design hierarchy may not display correctly. Please copy the project to a new location using "Project Save As..." in ISE or another method where you have write permissions.

### Support and Contact
For support and additional information, visit:
- [Xilinx Support](http://www.xilinx.com/support)
- [Contact Information](http://www.xilinx.com/support/services/contact_info.htm)
