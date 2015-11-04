callback([
  {
    "levelNumber": 1,
    "path": "01-Mail-Room-6.6/6.6.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 01-Mail-Room - SIZE 6/6 - SPEED 6/6 --\n\n-- Straightforward. The first level introduces the inbox and outbox commands.\n\n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n\n",
    "size": 6,
    "steps": 6,
    "successRatio": 1
  },
  {
    "levelNumber": 2,
    "path": "02-Busy-Mail-Room-3.25/24.20.specific-peterfreese.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 02-Busy-Mail-Room - SIZE 24/3 - SPEED 20/25 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n\n",
    "size": 24,
    "steps": 18,
    "successRatio": 0.68,
    "type": "specific",
    "author": "peterfreese"
  },
  {
    "levelNumber": 2,
    "path": "02-Busy-Mail-Room-3.25/3.30.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 02-Busy-Mail-Room - SIZE 3/30 - SPEED 30/25 --\n\n-- The jump command is introduced. This time inbox and outbox are looped with a\n-- jump for automation.\n\na:\n    INBOX   \n    OUTBOX  \n    JUMP     a\n\n",
    "size": 3,
    "steps": 33,
    "successRatio": 1
  },
  {
    "levelNumber": 3,
    "path": "03-Copy-Floor-6.6/6.6.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 03-Copy-Floor - SIZE 6/6 - SPEED 6/6 --\n\n-- The copyfrom command is introduced. Copy the letters B U G to the outbox.\n\n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n\n",
    "size": 6,
    "steps": 6,
    "successRatio": 1
  },
  {
    "levelNumber": 4,
    "path": "04-Scrambler-Handler-7.21/18.18.specific-fd1e4020.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 04-Scrambler-Handler - SIZE 18/7 - SPEED 18/21 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n\n",
    "size": 18,
    "steps": 18,
    "successRatio": 0.15,
    "type": "specific",
    "author": "fd1e4020"
  },
  {
    "levelNumber": 4,
    "path": "04-Scrambler-Handler-7.21/7.21.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 04-Scrambler-Handler - SIZE 7/7 - SPEED 21/21 --\n\n-- The copyto command is introduced and is used to copy the item in hand to\n-- memory.\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 7,
    "steps": 21,
    "successRatio": 0.2
  },
  {
    "levelNumber": 6,
    "path": "06-Rainy-Summer-6.24/25.20.specific-fd1e4020.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 06-Rainy-Summer - SIZE 25/6 - SPEED 20/24 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX  \n\n",
    "size": 25,
    "steps": 20,
    "successRatio": 0.81,
    "type": "specific",
    "author": "fd1e4020"
  },
  {
    "levelNumber": 6,
    "path": "06-Rainy-Summer-6.24/6.24.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 06-Rainy-Summer - SIZE 6/6 - SPEED 24/24 --\n\n-- The add command is introduced and used to add an item from memory to the item\n-- in hand.\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 6,
    "steps": 27,
    "successRatio": 1
  },
  {
    "levelNumber": 7,
    "path": "07-Zero-Exterminator-4.23/14.13.specific.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 07-Zero-Exterminator - SIZE 14/4 - SPEED 13/23 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n\n    INBOX   \n    OUTBOX  \n    INBOX   \n    INBOX   \n    JUMPZ    a\n    OUTBOX  \na:\n    INBOX   \n    OUTBOX  \n    INBOX   \n    INBOX   \n    INBOX   \n    JUMPZ    b\n    OUTBOX  \nb:\n    INBOX   \n\n",
    "size": 14,
    "steps": 14,
    "successRatio": 0.01,
    "type": "specific"
  },
  {
    "levelNumber": 7,
    "path": "07-Zero-Exterminator-4.23/4.23.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 07-Zero-Exterminator - SIZE 4/4 - SPEED 23/23 --\n\n-- The jump if zero command is introduced. Skip outputting zero's by jumping\n-- back if the item in hand is zero.\n\na:\nb:\n    INBOX   \n    JUMPZ    b\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 4,
    "steps": 41,
    "successRatio": 1
  },
  {
    "levelNumber": 8,
    "path": "08-Tripler-Room-6.24/17.17.specific-meh2481.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 08-Tripler-Room - SIZE 17/6 - SPEED 17/24 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    OUTBOX  \n\n",
    "size": 17,
    "steps": 15,
    "successRatio": 0.2,
    "type": "specific",
    "author": "meh2481"
  },
  {
    "levelNumber": 8,
    "path": "08-Tripler-Room-6.24/20.20.specific.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 08-Tripler-Room - SIZE 20/6 - SPEED 20/24 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n\n",
    "size": 20,
    "steps": 18,
    "successRatio": 0.5,
    "type": "specific"
  },
  {
    "levelNumber": 8,
    "path": "08-Tripler-Room-6.24/6.24.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 08-Tripler-Room - SIZE 6/6 - SPEED 24/24 --\n\n-- Triple each inbox item by copying to memory and adding it to itself twice.\n\na:\n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 6,
    "steps": 27,
    "successRatio": 1
  },
  {
    "levelNumber": 9,
    "path": "09-Zero-Preservation-Initiative-5.25/18.16.specific-Gimlao.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 09-Zero-Preservation-Initiative - SIZE 18/5 - SPEED 16/25 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n\n    INBOX   \n    INBOX   \n    OUTBOX  \n    INBOX   \n    JUMPZ    a\n    JUMP     b\na:\n    OUTBOX  \nb:\n    INBOX   \n    INBOX   \n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    JUMPZ    c\n    JUMP     d\nc:\n    OUTBOX  \nd:\n    INBOX   \n    OUTBOX  \n\n",
    "size": 18,
    "steps": 16,
    "successRatio": 0.01,
    "type": "specific",
    "author": "Gimlao"
  },
  {
    "levelNumber": 9,
    "path": "09-Zero-Preservation-Initiative-5.25/5.25-nanashi-juanto.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 09-Zero-Preservation-Initiative - SIZE 5/5 - SPEED 25/25 --\n\n-- Skip outputting non-zero's by jumping back if the item in hand is non-zero.\n\n    JUMP     c\na:\n    OUTBOX  \nb:\nc:\n    INBOX   \n    JUMPZ    a\n    JUMP     b\n\n",
    "size": 5,
    "steps": 32,
    "successRatio": 1,
    "author": "nanashi-juanto"
  },
  {
    "levelNumber": 10,
    "path": "10-Octoplier-Suite-9.36/26.26.specific-meh2481.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 10-Octoplier-Suite - SIZE 26/9 - SPEED 26/36 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX  \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    INBOX  \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    INBOX  \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    INBOX  \n    OUTBOX\n\n",
    "size": 26,
    "steps": 24,
    "successRatio": 0.32,
    "type": "specific",
    "author": "meh2481"
  },
  {
    "levelNumber": 10,
    "path": "10-Octoplier-Suite-9.36/32.32.specific.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 10-Octoplier-Suite - SIZE 32/9 - SPEED 32/36 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n\n",
    "size": 32,
    "steps": 28,
    "successRatio": 0.38,
    "type": "specific"
  },
  {
    "levelNumber": 10,
    "path": "10-Octoplier-Suite-9.36/9.36.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 10-Octoplier-Suite - SIZE 9/9 - SPEED 36/36 --\n\n-- Multiply each inbox item by 8 by using copyto and add thrice, essentially\n-- finding the value of n * 2^3 in order of [n, 2n, 4n, 8n].\n\na:\n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 9,
    "steps": 41,
    "successRatio": 1
  },
  {
    "levelNumber": 11,
    "path": "11-Sub-Hallway-10.40/10.40.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 11-Sub-Hallway - SIZE 10/10 - SPEED 40/40 --\n\n-- The sub command is introduced and is used to subtract an item from memory\n-- from the item in hand.\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 10,
    "steps": 45,
    "successRatio": 1
  },
  {
    "levelNumber": 11,
    "path": "11-Sub-Hallway-10.40/35.35.specific-meh2481.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 11-Sub-Hallway - SIZE 35/10 - SPEED 35/40 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX  \n    COPYTO   0\n    INBOX  \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX  \n    INBOX  \n    COPYTO   0\n    INBOX  \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX  \n    INBOX  \n    INBOX  \n    COPYTO   0\n    SUB      0\n    COPYTO   0\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    INBOX  \n    COPYTO   0\n    INBOX  \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX\n\n",
    "size": 35,
    "steps": 35,
    "successRatio": 0.03,
    "type": "specific",
    "author": "meh2481"
  },
  {
    "levelNumber": 11,
    "path": "11-Sub-Hallway-10.40/36.36.specific.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 11-Sub-Hallway - SIZE 36/10 - SPEED 36/40 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    SUB      0\n    OUTBOX  \n    COPYFROM 0\n    SUB      1\n    OUTBOX  \n\n",
    "size": 36,
    "steps": 31,
    "successRatio": 0.41,
    "type": "specific"
  },
  {
    "levelNumber": 12,
    "path": "12-Tetracontiplier-14.56/14.56-nanashi-juanto.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 12-Tetracontiplier - SIZE 14/14 - SPEED 56/56 --\n\n-- This approach extends from 10-Octoplier-Suite by adding the value of 8n to\n-- itself four times. This solves for the value of (n * 2^3) * 5, or 40n, in the\n-- order of [n, 2n, 4n, 8n, 16n, 24n, 32, 40n].\n\na:\n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 14,
    "steps": 62,
    "successRatio": 1,
    "author": "nanashi-juanto"
  },
  {
    "levelNumber": 12,
    "path": "12-Tetracontiplier-14.56/14.56.alternative.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 12-Tetracontiplier - SIZE 14/14 - SPEED 56/56 --\n\n-- This approach solves for the value of 40n in the order of [n, 2n, 4n, 5n,\n-- 10n, 20n, 30n, 40n] and requires one extra memory slot.\n\na:\n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   1\n    ADD      1\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 14,
    "steps": 63,
    "successRatio": 1,
    "type": "alternative"
  },
  {
    "levelNumber": 12,
    "path": "12-Tetracontiplier-14.56/41.41.specific-meh2481.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 12-Tetracontiplier - SIZE 41/14 - SPEED 41/56 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX  \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX  \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX  \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    INBOX  \n    OUTBOX\n\n",
    "size": 41,
    "steps": 39,
    "successRatio": 0.25,
    "type": "specific",
    "author": "meh2481"
  },
  {
    "levelNumber": 13,
    "path": "13-Equalization-Room-9.27/13.26-Gimlao.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 13-Equalization-Room - SIZE 14/9 - SPEED 26/27 --\n\n    JUMP     c\na:\nb:\n    COPYFROM 0\n    OUTBOX  \nc:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPZ    a\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPZ    b\n\n",
    "size": 13,
    "steps": 12,
    "successRatio": 0.91,
    "author": "Gimlao"
  },
  {
    "levelNumber": 13,
    "path": "13-Equalization-Room-9.27/29.16.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 13-Equalization-Room - SIZE 29/9 - SPEED 16/27 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPZ    a\r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPZ    b\r\n    JUMP     c\r\na:\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPZ    b\r\n    JUMP     c\r\nb:\r\n    COPYFROM 0\r\n    OUTBOX  \r\nc:\r\n    INBOX   \r\n    OUTBOX  \r\n\r\n\r\n",
    "size": 29,
    "steps": 16,
    "successRatio": 0.01,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 13,
    "path": "13-Equalization-Room-9.27/9.27-unframework.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 13-Equalization-Room - SIZE 9/9 - SPEED 27/27 --\n\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX\nb:\nc:\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      0\n    JUMPZ    a\n    JUMP     c\n\n",
    "size": 9,
    "steps": 25,
    "successRatio": 1,
    "author": "unframework"
  },
  {
    "levelNumber": 14,
    "path": "14-Maximization-Room-10.34/10.31-cowboy.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 14-Maximization-Room - SIZE 10/10 - SPEED 31/34 --\n\n-- The jump if negative command is introduced. The concept for this level is the\n-- item in hand is larger than what it is subtracted by if it remains positive.\n\n    JUMP     c\na:\n    COPYFROM 0\nb:\n    OUTBOX  \nc:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    a\n    ADD      0\n    JUMP     b\n\n",
    "size": 10,
    "steps": 34,
    "successRatio": 1,
    "author": "cowboy"
  },
  {
    "levelNumber": 14,
    "path": "14-Maximization-Room-10.34/10.34.obsolete-unframework.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 14-Maximization-Room - SIZE 10/10 - SPEED 34/34 --\n\n-- This solution is superseded by 10.31-cowboy.asm being functionally same with\n-- further optimization.\n\na:\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      0\n    JUMPN    b\n    ADD      0\n    JUMP     c\nb:\n    COPYFROM 0\nc:\n    OUTBOX\n    JUMP     a\n\n",
    "size": 10,
    "steps": 39,
    "successRatio": 1,
    "type": "obsolete",
    "author": "unframework"
  },
  {
    "levelNumber": 14,
    "path": "14-Maximization-Room-10.34/36.30.specific.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 14-Maximization-Room - SIZE 36/10 - SPEED 30/34 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    a\n    ADD      0\n    JUMP     b\na:\n    COPYFROM 0\nb:\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    c\n    ADD      0\n    JUMP     d\nc:\n    COPYFROM 0\nd:\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    e\n    ADD      0\n    JUMP     f\ne:\n    COPYFROM 0\nf:\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    g\n    ADD      0\n    JUMP     h\ng:\n    COPYFROM 0\nh:\n    OUTBOX  \n\n",
    "size": 36,
    "steps": 26,
    "successRatio": 0.53,
    "type": "specific"
  },
  {
    "levelNumber": 14,
    "path": "14-Maximization-Room-10.34/41.27.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 14-Maximization-Room - SIZE 41/10 - SPEED 27/34 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    a\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    b\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\na:\nb:\nc:\nd:\ne:\n    COPYFROM 0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    c\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    d\n    ADD      0\n    OUTBOX  \n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    e\n    ADD      0\n    OUTBOX  \n\n",
    "size": 41,
    "steps": 30,
    "successRatio": 0.76,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 16,
    "path": "16-Absolute-Positivity-8.36/13.30-Gimlao.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 16-Absolute-Positivity - SIZE 13/8 - SPEED 30/36 --\n\n    JUMP     d\na:\nb:\nc:\n    COPYTO   0\n    SUB      0\n    SUB      0\n    OUTBOX  \nd:\n    INBOX   \n    JUMPN    a\n    OUTBOX  \n    INBOX   \n    JUMPN    b\n    OUTBOX  \n    INBOX   \n    JUMPN    c\n\n",
    "size": 13,
    "steps": 35,
    "successRatio": 0.67,
    "author": "Gimlao"
  },
  {
    "levelNumber": 16,
    "path": "16-Absolute-Positivity-8.36/30.25.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 16-Absolute-Positivity - SIZE 30/8 - SPEED 25/36 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- The input follows the pattern: +-?0-?+\r\n\r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   0\r\n    SUB      0\r\n    SUB      0\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPN    a\r\n    JUMP     b\r\na:\r\n    COPYTO   0\r\n    SUB      0\r\n    SUB      0\r\nb:\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   0\r\n    SUB      0\r\n    SUB      0\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPN    c\r\n    JUMP     d\r\nc:\r\n    COPYTO   0\r\n    SUB      0\r\n    SUB      0\r\nd:\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n\r\n\r\n",
    "size": 30,
    "steps": 27,
    "successRatio": 0.03,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 16,
    "path": "16-Absolute-Positivity-8.36/8.34-codejnki.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 16-Absolute-Positivity - SIZE 8/8 - SPEED 34/36 --\n\n    JUMP     c\na:\n    COPYTO   0\n    SUB      0\n    SUB      0\nb:\n    OUTBOX  \nc:\n    INBOX   \n    JUMPN    a\n    JUMP     b\n\n",
    "size": 8,
    "steps": 36,
    "successRatio": 1,
    "author": "codejnki"
  },
  {
    "levelNumber": 17,
    "path": "17-Exclusive-Lounge-12.28/11.29-cowboy.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 17-Exclusive-Lounge - SIZE 11/12 - SPEED 29/28 --\n\na:\n    INBOX   \n    JUMPN    c\n    INBOX   \n    JUMPN    d\nb:\n    COPYFROM 4\n    JUMP     e\nc:\n    INBOX   \n    JUMPN    b\nd:\n    COPYFROM 5\ne:\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 11,
    "steps": 30,
    "successRatio": 1,
    "author": "cowboy"
  },
  {
    "levelNumber": 17,
    "path": "17-Exclusive-Lounge-12.28/12.27-AaronKnowles.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 17-Exclusive-Lounge - SIZE 12/12 - SPEED 27/28 --\n\n    JUMP     d\na:\nb:\n    COPYFROM 5\nc:\n    OUTBOX  \nd:\n    INBOX   \n    JUMPN    f\n    INBOX   \n    JUMPN    a\ne:\n    COPYFROM 4\n    JUMP     c\nf:\n    INBOX   \n    JUMPN    e\n    JUMP     b\n\n",
    "size": 12,
    "steps": 28,
    "successRatio": 1,
    "author": "AaronKnowles"
  },
  {
    "levelNumber": 17,
    "path": "17-Exclusive-Lounge-12.28/12.28-chris18191.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 17-Exclusive-Lounge - SIZE 12/12 - SPEED 28/28 --\n\n    JUMP     d\na:\nb:\n    COPYFROM 4\nc:\n    OUTBOX  \nd:\n    INBOX   \n    JUMPN    e\n    INBOX   \n    JUMPN    f\n    JUMP     b\ne:\n    INBOX   \n    JUMPN    a\nf:\n    COPYFROM 5\n    JUMP     c\n\n",
    "size": 12,
    "steps": 28,
    "successRatio": 1,
    "author": "chris18191"
  },
  {
    "levelNumber": 17,
    "path": "17-Exclusive-Lounge-12.28/12.28-spenserhale.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 17-Exclusive-Lounge - SIZE 12/12 - SPEED 28/28 --\n\na:\nb:\n    INBOX   \n    JUMPN    d\n    COMMENT  2\n    INBOX   \n    JUMPN    e\n    COMMENT  0\nc:\n    COPYFROM 4\n    OUTBOX  \n    JUMP     b\nd:\n    COMMENT  3\n    INBOX   \n    JUMPN    c\n    COMMENT  1\ne:\n    COPYFROM 5\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE COMMENT 0\neJyLZmBg2OljZNbkuULP201RS8U2QfOL2XNdR6NC0w59a5s+3S53P91bQZ76RikNRiyFu0zaioKd24o4\n3btK93iH1Gz0n9+yPmBN7/oA6xlF/kfnl/sGLG/1kN0o6KK0RcX28ZZmQ61dQCsYUnJ4yl9lnisvTA+p\n+ZWc0Gqf9LrncELVdJeEk4v+Js1eb5Seum1FVubOq4WZO3lKn29nqZi/6X9lyKraqoNzGirNph4tf99/\ntXB+S1jh7MarhdPrZPIDKm/lX6t1rjCbur/SZ8mfqpBV7+uVtqQ2P98Oss+rV7DKq7dwYn93yCrfns+T\nXPuv1TZNmFy9Zerk6o3TRGvzp0s2rJuu2GYwvWluyuzZjfPmhtRMW3CpymfJ7EbPpSu62JdVTT+xNHUb\nyCyZbXWzsk7Uzbp9tmr6lAuFE4UvLmkXvXCvecmpkJqqQ5eqJuxa0TV1x4YJ17f/mDpj+6UVgrvmb+ra\n83z7n4Pv9xoce79X+pzadu4ramB3jYJRMNgAAOt8sJU;\n\nDEFINE COMMENT 1\neJwzZGBgcDR6b+xiKBvqqd9Vyq+7ouuCjvWMSE217TM0tXZN08rdY2dcuP+V1eMt9+1EV7N5PO884iHb\n7Ow5uZrZ83v6RWceTzn7Ors3lqUWhhalFkDjGGLCP09SDp28UjfQ/DCIrxD2OQVEp+TYn7xaWDWdvVwy\n6FDFJR/r6ks+hvURgfnTecpB8urZK7r8SjK7NZuqpoP40xYcPXt54eMtgYtCavoWy4be3zI/7NJOtWiQ\nnNbMuln2K//MENthNpVhFIyCUUA2AABBfUrq;\n\nDEFINE COMMENT 2\neJwLYmBgWK302Uxd5Xv6aqXCiUYKa3YXKuw9DhRmuOnw2mC+3Qq959Yr9L6YbTD5brrF3NKUw83M7Kzn\nK6vpAXPtY0KkHVKj5tpnxmZYb0n9ZF6V+ce4KhOkVyNYUSs92DprZRBLIYjv4HXSbWZEmwuILdaZazSn\nbX7Yk2a9/peNR+dvquO4UFobcBUkx9eTa7Rzsp6x7gwzy9vzBH1uzH8eHTnfKCV+Lkvhi5mTq6smP+90\nmrCml6NvTa9YZ+FEkJ5XG4wmbV5rNOnvyh9Tu5ecXBSycP6m2/N2Hrk97+CpG/O7L/ovDrlRt1L05tv1\ngtfub+G4ILn94KmwHeaHRXY+335lx7XVktuPzl+6acMEkFn69+a32N5MaG2/qtbpe1mrZ/p5s6lR5+pm\nXTt/acW5S4mbG6/n7rG/Ubjf/ob5Ye4rTaclzndfVD598gLDKBgFQxQAANVAmMQ;\n\nDEFINE COMMENT 3\neJyLZWBguCa0Qu+m4J9jQCYDl/50pUCd6UqJamq6qqq5Rk9VvlsqqbE4X9IO8GY3EPU/aiAZxG6QGduh\nn5sgov09XUltZwZIH5+rv2y/i6x6gMuKmIvOa+JBYprWRma/vT+bgdi9JYpa54ub8r1LTy7yLlXa0lui\ntt2vZMtBwWLnMyB571JJlf2VDA6WNTEhi1pEa2e16/ULdDPM4e4VXX2sL3FzS3/ZoYMTbq1rmvB50p5J\n12prJq2IqZpcamE76ZEWSD//4j8zeJfUzfq1qm7W1zVmUw3X5fblrb9Ulbe+rahwnX2uzSr73M6lHCXx\nc1d0LZxjNClmHseiiYseb/Fc+nqX/coN+7I3FO4HmRN08U9W1DnrrOUnm/INjglW/TxkP/vnIcEVFYdF\nVxsck934+FTi5ttnYzZMvBiw/NjVwonM15e0N15nyDt87Wgh83W9/n03Itba3vxx2PZmxG37G7mvnK4b\nvRO49OeL8umDP6oONf1sOFD3jWEUjIJBBAB8g6Xy;\n\n",
    "size": 12,
    "steps": 28,
    "successRatio": 1,
    "author": "spenserhale"
  },
  {
    "levelNumber": 17,
    "path": "17-Exclusive-Lounge-12.28/29.24-og01.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 17-Exclusive-Lounge - SIZE 29/12 - SPEED 24/28 --\n\n    INBOX   \n    JUMPN    i\na:\nb:\nc:\n    INBOX   \n    JUMPN    k\nd:\n    COPYFROM 4\n    OUTBOX  \n    INBOX   \n    JUMPN    g\n    JUMP     b\n    INBOX   \n    JUMPN    j\n    COPYFROM 4\n    OUTBOX  \n    INBOX   \n    JUMPN    e\n    JUMP     a\ne:\nf:\ng:\nh:\ni:\n    INBOX   \n    JUMPN    d\nj:\nk:\nl:\n    COPYFROM 5\n    OUTBOX  \n    INBOX   \n    JUMPN    h\n    INBOX   \n    JUMPN    l\n    COPYFROM 4\n    OUTBOX  \n    INBOX   \n    JUMPN    f\n    JUMP     c\n\n",
    "size": 29,
    "steps": 25,
    "successRatio": 1,
    "author": "og01"
  },
  {
    "levelNumber": 17,
    "path": "17-Exclusive-Lounge-12.28/36.23.specific.Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 17-Exclusive-Lounge - SIZE 36/12 - SPEED 23/28 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n\r\na:\r\n    INBOX   \r\n    JUMPN    c\r\n    INBOX   \r\n    JUMPN    d\r\nb:\r\n    COPYFROM 4\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPN    c\r\n    INBOX   \r\n    JUMPN    d\r\n    COPYFROM 4\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPN    c\r\n    INBOX   \r\n    JUMPN    d\r\n    COPYFROM 4\r\n    OUTBOX  \r\nc:\r\n    INBOX   \r\n    JUMPN    b\r\nd:\r\n    COPYFROM 5\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPN    c\r\n    INBOX   \r\n    JUMPN    d\r\n    COPYFROM 4\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPN    c\r\n    COPYFROM 5\r\n    OUTBOX  \r\n    INBOX\r\n    INBOX\r\n    COPYFROM 4\r\n    OUTBOX  \r\n",
    "size": 36,
    "steps": 24,
    "successRatio": 0.88,
    "type": "specific.Mygod"
  },
  {
    "levelNumber": 19,
    "path": "19-Countdown-10.82/10.111-jlmitch5.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 10/10 - SPEED 111/82 --\n\na:\n    INBOX\n    COPYTO   0\nb:\nc:\n    OUTBOX\n    COPYFROM 0\n    JUMPN    d\n    JUMPZ    a\n    BUMPDN   0\n    JUMP     c\nd:\n    BUMPUP   0\n    JUMP     b\n\n",
    "size": 10,
    "steps": 134,
    "successRatio": 1,
    "author": "jlmitch5"
  },
  {
    "levelNumber": 19,
    "path": "19-Countdown-10.82/10.114.obsolete-hermanprawiro.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 10/10 - SPEED 114/82 --\n\n-- This solution is superseded by 10.111-jlmitch5.asm being functionally same\n-- with further optimization.\n\na:\n    INBOX   \n    COPYTO   0\nb:\nc:\n    OUTBOX  \n    COPYFROM 0\n    JUMPZ    a\n    JUMPN    d\n    BUMPDN   0\n    JUMP     b\nd:\n    BUMPUP   0\n    JUMP     c\n    \n",
    "size": 10,
    "steps": 133,
    "successRatio": 1,
    "type": "obsolete",
    "author": "hermanprawiro"
  },
  {
    "levelNumber": 19,
    "path": "19-Countdown-10.82/11.80-AaronKnowles.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 11/10 - SPEED 80/82 --\n\n    COMMENT  0\na:\n    INBOX   \n    COPYTO   0\n    JUMPN    d\nb:\nc:\n    OUTBOX  \n    BUMPDN   0\n    JUMPN    a\n    JUMP     b\nd:\ne:\n    OUTBOX  \n    BUMPUP   0\n    JUMPN    e\n    JUMP     c\n    \n",
    "size": 11,
    "steps": 91,
    "successRatio": 1,
    "author": "AaronKnowles"
  },
  {
    "levelNumber": 19,
    "path": "19-Countdown-10.82/61.65.specific-Gimlao.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 61/10 - SPEED 65/82 --\n\n-- This solution is level-specific (quality-limited input) and assumes inbox\n-- items with value of no less than -9 or greater than 9.\n\n    JUMP     t\na:\nb:\nc:\nd:\ne:\nf:\ng:\nh:\ni:\nj:\nk:\nl:\nm:\nn:\no:\np:\nq:\nr:\ns:\n    OUTBOX  \nt:\n    INBOX   \n    JUMPN    u\n    JUMPZ    s\n    COPYTO   0\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    b\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    d\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    e\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    g\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    h\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    i\nu:\n    COPYTO   0\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    j\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    k\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    l\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    m\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    n\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    o\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    p\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    q\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    r\n\n",
    "size": 61,
    "steps": 75,
    "successRatio": 1,
    "type": "specific",
    "author": "Gimlao"
  },
  {
    "levelNumber": 19,
    "path": "19-Countdown-10.82/90.64.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 19-Countdown - SIZE 90/10 - SPEED 64/82 --\r\n\r\n-- This solution is level-specific (quality-limited input) and assumes inbox\r\n-- items with value of no less than -9 or greater than 9.\r\n\r\n    INBOX   \r\n    JUMPN    u\r\n    JUMPZ    a\r\n    COPYTO   0\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\nu:\r\n    COPYTO   0\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPUP   0\r\na:\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPN    u\r\n    JUMPZ    a\r\n    COPYTO   0\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    OUTBOX  \r\n    BUMPDN   0\r\n    JUMPZ    a\r\n",
    "size": 90,
    "steps": 73,
    "successRatio": 1,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 20,
    "path": "20-Multiplication-Workshop-15.109/15.135-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 15/15 - SPEED 135/109 --\n\n    JUMP     c\na:\n    COPYFROM 2\nb:\n    OUTBOX  \nc:\n    INBOX   \n    COPYTO   0\n    COPYTO   2\n    INBOX   \n    JUMPZ    b\n    COPYTO   1\nd:\n    BUMPDN   1\n    JUMPZ    a\n    COPYFROM 0\n    ADD      2\n    COPYTO   2\n    JUMP     d\n\n\nDEFINE LABEL 0\neJzjYWBgKEzvWvwq82jh7PxHWvsrU6MmdXUtBgozXOzyXgKi8zJOlniX2ufKtZWmMYyCUTAKhhUAAI6c\nEjk;\n\nDEFINE LABEL 1\neJyTY2Bg+Fm9WHt9fUzT+3rneYb1giuAQgxu5WsMHSvVdI3r7qnLtU1XYp4wXWnNjPkaqrNTdJTmaBko\nzSk0fTFzr+23KV3usW0xIa79MSGJc9SifZYUJncuLU1zX3Yw7/SS6XUTF6V2zJz/eZLWzLYFAt3XVhvX\nzd90qjRxM8MoGAWjYFAAAMSwNBE;\n\nDEFINE LABEL 2\neJzjZGBgsE/S2pWZlbnTuC53T9VkrV1AIYYDifeaj5bfarjZPruRAQ/YYVqXs8qqvyLaoWr6dUfepSAx\njeAdVrmBVZm5gdYzngU3ze2LOTiHI955HkSOpfBGRF0OiK0a8tnsXtgOq5Aoa5uvqdY2ILFFLV3u1wty\nEyQLNiRJFtTlXC+4VBVclNDqXbpl8t6qgOXba6avKaiP2RDa+XhLbJvWrjcNdSckC67dXJArehOk//WM\niMAHcxTbAhepbb+wSGsX75I1u1mXq21vXDF/k/3K6WuqV0XUb16rGAFSG7BL1N9vd2rUmd3eZRN2bTno\nvcf8cNaJH4fvndlyUPpc4X6QmtOXZUP/v5cNBbHf3nsUkf6wKf/pQ8GqxY/sT+ILl1EwCoYKAAAwH38F\n;\n\n",
    "size": 15,
    "steps": 154,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 20,
    "path": "20-Multiplication-Workshop-15.109/15.164.obsolete.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 15/15 - SPEED 164/109 --\n\n-- This solution is superseded by 15.135-skwasjer.asm being functionally same\n-- with further optimization.\n\na:\n    COPYFROM 9\n    COPYTO   4\n    INBOX   \n    COPYTO   1\n    INBOX   \n    COPYTO   0\nb:\n    JUMPZ    c\n    COPYFROM 4\n    ADD      1\n    COPYTO   4\n    BUMPDN   0\n    JUMP     b\nc:\n    COPYFROM 4\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE LABEL 0\neJxrYGBgaGD2LvvD0lW6iSOg8h1n3Sxjjv5lX9gj1hZxtC14wju7MVagv0JYRLCKW9xsKofEyUUcEpLr\nWCVTt7VLzN/kKtm2gEH6eedvmWu1X+UmVxcqhNSkqzzvTFF936+kVjV9gdr0NTM0c/cArWGYrH2tdrK2\nWucEnQ0T/hvNXl9sPnv9I9uA5fPt3Bcm2FnPuGO/MwOkjtP9sxmjV4B3rfeKmN/edTmf/cymbvR3nvcu\noGvx+gDJdSA198LUdP1jvMt6YiPqeWOXtHPEf57EmhCxFiSnGjK5+kZESA1X3MmSY/EcJfuSGPLMUw/m\ngeQUc6/VLsh93jm56NxSED8xNyEcRDdXnCxxK/dewliptt2uKnePXVXdCcuao2cta3gvg91UxlLYXOFc\nsKu6Lie2bW/2lU6GvItdbUWTunL7rnX8mJrd+GfG+vofUzfV7Zy2vaZ0CkjPzsnfLX9PcnbaMvVoocH0\n2etBYt1LOErsVxpNql7lvrBy9clF31dPXwMSd18m6g+iPfZKNhzaH9NkcTiivuBYU/7Ho3+yvh3emeGx\n90/WpZ2P2wR3FU702209g/GA+8Kfh47Of3OcY9G9M0fng/S2XGvKd7p+sqTlWtdihhsxG+xvhKw6fK1p\nbsu1+S22NzlKTO/szc65vzPjxrOdGdOe/8nyfAMJk1EwsgEAOoThbA;\n\nDEFINE LABEL 1\neJxbzMDA8IfFLN2Ywyxdgf9g3hLee82L+D5PUuY7uegh36119/gj6m8LCFZJCzblSwjtzLgsbJTiJa6X\neEzCKOWw5J+sw5JHCxmkJ1fXSyu27ZbR67eSVdqyU1Zt+w/ZkFVGCtYz9BXnt+gqTa97rNpVGqZ1sqRP\nN6CyzUCx7ZDhzmlMRizzjxrEbDhqkLkT6AyGL2Z7s9dazm5cZfW6Z5XVzmnPrd0XznKYvuaMa+LmIx6J\nm3f6zF5f6nd0vrH/kvadPkcLd/poxYH0xYSvMYyKcHedFilaeyOCZf60yIi1IPEfKSk6H9Lrcn6kyDab\np9rPLknzXrI5LWaDfobeXpB8T+y58s64kyX2SSyFibn2ueeL9RLPluglguQsa44WmtVKNnypDVkF4hvW\nt7m8bHR3BbGj2g/mXevI7D7X3TTXt0dvL3ev+WGQeGhnXU5Pz/f0gxO2pO6ZZJa+bcrJkt+TEloZJq7p\n7e8unQJSM3tertGN+TyeIQsTwkUXXqoKXzC/5cIihjn8iyevBMl/XcNSuHmtWufXNWt6v67ZMnnz2h9T\nQeLma6xtTNbutQWxtxxpyv9zsC6n4YB97vG9ITXH98o2NxyIWGt2ZMUOg2Ovdz08/XrX7bNau26ee74d\npP7wta5Sryvnyi9efN1z7lLdLO4rR+e7XvNeUn+Dd2nlLesZv29eq625eanq6+3XPSV3dk7beJdhztt7\ndbMWP+JYBNL/6NHJknlPYpqknvEunfGMIe/qc7P0Sy+2pAa+3Jnh83p+S/M7M7AbG96XWvz6eCuo4lNp\n2tbPTflbP4vW6n27t1Hn++Mtmj+Utqz4MXu99N9zS0FqG6+H+Kk/vOTD9P5eaN63RxH//8uGMhAJzD4r\nbQHRG+8ezEt/2JS/4DFDns1HSLyNAtIBAMUuOMA;\n\nDEFINE LABEL 4\neJxLY2BgKOCMuVfAaX64iCNmwxZ2wRUVbO4LrVmd51mzXqr6x2yWXsEmG1rKHhH4keOafy5XROAaLtnQ\ne/xN+bcFlrTHCmyYkMS3d6YaL8OcN1z2s4HGMbRI7pzGLNWU7yU+2Vdf8aADSOyq1s6MSE2GvFsak6vF\nte41X9JW63QzeN3zy+R1j4m5Vs9ay8dtr6zOlW8y35DUrfc6boKOUQpIn0EAi2huoLfU68AQBY3gFTFL\nQpryVwbp9a8M2jntXcC5pb+9vZc4eLHMb/Jc0u7gFVD5z+tkSamfddbKoNK0B6GlaSAzjsXvzDgWL9vM\nkKTVU5P8vr8y5XXP6ky9/rTs2Y2ZWd5l6zLqct5mfE5Znfk+EaT+SXNm7MvGzNj39e8Td1V/TnGsPFrI\nUjG7sbYqt6+01npGdqPzPKvJTXNTZpdOAakPXDRZPnDRIy3/xXrGExcJ+pxdfDCPa+nsxublGybsXWk0\n6euaDROebnrcNndrRP2M7dPrQHp+TJYNjZl3zf/5xsm+Hnu73H/csrdXerzFXORFpv7Rt1oGDKNgFNAJ\nAACvsa2M;\n\n",
    "size": 15,
    "steps": 183,
    "successRatio": 1,
    "type": "obsolete"
  },
  {
    "levelNumber": 20,
    "path": "20-Multiplication-Workshop-15.109/157.72.specific-mschordan.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 157/15 - SPEED 72/109 --\n\n-- This solution is level-specific (quality-limited input) and assumes input\n-- values of 0-9.\n\ne:\na:\n    INBOX   \n    JUMPZ    out1\n    COPYTO   0\n    INBOX   \n    JUMPZ    out2\n    COPYTO   1\n    SUB      0\n    JUMPN    neg\n\n    BUMPDN   0\n    JUMPZ      a1\n    BUMPDN   0\n    JUMPZ      a2\n    BUMPDN   0\n    JUMPZ      a3\n    BUMPDN   0\n    JUMPZ      a4\n    BUMPDN   0\n    JUMPZ      a5\n    BUMPDN   0\n    JUMPZ      a6\n    BUMPDN   0\n    JUMPZ      a7\n    BUMPDN   0\n    JUMPZ      a8\n    JUMP       a9\n\nneg:\n    BUMPDN   1\n    JUMPZ      b1\n    BUMPDN   1\n    JUMPZ      b2\n    BUMPDN   1\n    JUMPZ      b3\n    BUMPDN   1\n    JUMPZ      b4\n    BUMPDN   1\n    JUMPZ      b5\n    BUMPDN   1\n    JUMPZ      b6\n    BUMPDN   1\n    JUMPZ      b7\n    BUMPDN   1\n    JUMPZ      b8\n    JUMP       b9\n\nout1:\n    OUTBOX  \n    INBOX   \n    JUMP     a\n\na1:\n    COPYFROM 1\nout2:\n    OUTBOX\n    JUMP     e\na2:\n    COPYFROM 1\n    ADD      1\n    OUTBOX\n    JUMP     e\na3:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    OUTBOX\n    JUMP     e\na4:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    ADD      1\n    OUTBOX\n    JUMP     e\na5:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    ADD      1\n    ADD      1\n    OUTBOX\n    JUMP     e\na6:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\na7:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    ADD      1\n    OUTBOX\n    JUMP     e\na8:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\na9:\n    COPYFROM 1\n    ADD      1\n    ADD      1\n    COPYTO   3\n    ADD      3\n    ADD      3\n    OUTBOX\n    JUMP     e\n\nb1:\n    COPYFROM 0\n    OUTBOX\n    JUMP     e\nb2:\n    COPYFROM 0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb3:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    OUTBOX\n    JUMP     e\nb6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\nb7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    OUTBOX\n    JUMP     e\nb8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    OUTBOX\n    JUMP     e\nb9:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    OUTBOX\n    JUMP     e\n\n",
    "size": 157,
    "steps": 85,
    "successRatio": 1,
    "type": "specific",
    "author": "mschordan"
  },
  {
    "levelNumber": 20,
    "path": "20-Multiplication-Workshop-15.109/168.71.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 20-Multiplication-Workshop - SIZE 168/15 - SPEED 71/109 --\r\n\r\n-- This solution is level-specific (quality-limited input) and assumes input\r\n-- values of 0-9.\r\n-- Based on 157.72.specific-mschordan.asm.\r\n\r\n    INBOX   \r\n    JUMPZ    out1\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    out\r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    neg\r\n\r\n    BUMPDN   0\r\n    JUMPZ      a1\r\n    BUMPDN   0\r\n    JUMPZ      a2\r\n    BUMPDN   0\r\n    JUMPZ      a3\r\n    BUMPDN   0\r\n    JUMPZ      a4\r\n    BUMPDN   0\r\n    JUMPZ      a5\r\n    BUMPDN   0\r\n    JUMPZ      a6\r\n    BUMPDN   0\r\n    JUMPZ      a7\r\n    BUMPDN   0\r\n    JUMPZ      a8\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\nout:\r\n    OUTBOX\r\na:\r\n    INBOX   \r\n    JUMPZ    out1\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    out\r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    neg\r\n\r\n    BUMPDN   0\r\n    JUMPZ      a1\r\n    BUMPDN   0\r\n    JUMPZ      a2\r\n    BUMPDN   0\r\n    JUMPZ      a3\r\n    BUMPDN   0\r\n    JUMPZ      a4\r\n    BUMPDN   0\r\n    JUMPZ      a5\r\n    BUMPDN   0\r\n    JUMPZ      a6\r\n    BUMPDN   0\r\n    JUMPZ      a7\r\n    BUMPDN   0\r\n    JUMPZ      a8\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nneg:\r\n    BUMPDN   1\r\n    JUMPZ      b1\r\n    BUMPDN   1\r\n    JUMPZ      b2\r\n    BUMPDN   1\r\n    JUMPZ      b3\r\n    BUMPDN   1\r\n    JUMPZ      b4\r\n    BUMPDN   1\r\n    JUMPZ      b5\r\n    BUMPDN   1\r\n    JUMPZ      b6\r\n    BUMPDN   1\r\n    JUMPZ      b7\r\n    BUMPDN   1\r\n    JUMPZ      b8\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nout1:\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMP     a\r\n\r\na1:\r\n    COPYFROM 1\r\n    JUMP     out\r\na2:\r\n    COPYFROM 1\r\n    ADD      1\r\n    JUMP     out\r\na3:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na4:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na5:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na6:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\na7:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      1\r\n    JUMP     out\r\na8:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nb1:\r\n    COPYFROM 0\r\n    JUMP     out\r\nb2:\r\n    COPYFROM 0\r\n    ADD      0\r\n    JUMP     out\r\nb3:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb4:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb5:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb6:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\nb7:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      0\r\n    JUMP     out\r\nb8:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\n",
    "size": 168,
    "steps": 89,
    "successRatio": 1,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 20,
    "path": "20-Multiplication-Workshop-15.109/46.73-szubster.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 46/15 - SPEED 73/109 --\n\n    COMMENT  0\n    BUMPUP   9\n    BUMPUP   9\n    ADD      9\n    COPYTO   6\n    ADD      6\n    COPYTO   5\na:\nb:\n    COMMENT  1\n    INBOX   \n    JUMPZ    q\n    COPYTO   0\n    INBOX   \n    JUMPZ    p\n    SUB      5\n    JUMPN    c\n    JUMPZ    h\n    COPYFROM 0\n    JUMP     g\nc:\n    ADD      6\n    JUMPZ    l\n    JUMPN    e\n    SUB      9\n    JUMPZ    j\n    JUMPN    d\n    COPYFROM 0\n    JUMP     i\nd:\n    COPYFROM 0\n    JUMP     k\ne:\n    ADD      9\n    JUMPZ    n\n    JUMPN    f\n    COPYFROM 0\n    JUMP     m\nf:\n    COPYFROM 0\n    JUMP     o\n    COMMENT  2\ng:\nh:\n    ADD      0\n    ADD      0\ni:\nj:\n    ADD      0\n    ADD      0\nk:\nl:\n    ADD      0\n    ADD      0\nm:\nn:\n    ADD      0\n    ADD      0\no:\np:\n    OUTBOX  \n    JUMP     a\nq:\n    OUTBOX  \n    INBOX   \n    JUMP     b\n\n\nDEFINE COMMENT 0\neJwLZmBgmClYd+KcKMcFK9mTF25olh26pP1+b5+u0pY+XZb5ItqfJ8WpZ3anq6h1Okk97/QVW9I+Xeha\nbRa3Ucp6zkcR6zmnB6zh6nI3Uuhyf6101hNoHMN8O7Op98LMpsqGG01aEiLbnB/AUbLdt63Iwcu9WM8y\noXWT+eueT+ZV09dacixSsZVcd8f+8RZfV729H/23HFQI23JwXtiGfSBzPqWl6GxI32Gln3F0vlbW/E2K\nuXp7ZfI/H2CsZDj1s7ruxPca62Nba1/vAqnliC9M/pv0OeVV5p+su3l7s0FiCa3vE6PaL1W59rsvtJ00\neWXODMl1KbMj1j6Yw7Eocv7sRvEFG5JA6rauUYt+v66/Yu36yStfbSjcv3rD53cg8RUbnQvmbi1N49z7\nOq724Jp4i8NGKV+O1OUYHLvVYHDsx9Sio0fn7zkouIJnz/Q1Ohsk1zGMglEwBAEAr6uW2g;\n\nDEFINE COMMENT 1\neJwLZmBgmCn44/BEEY4L3OIBV+ulp9/KV5x9d4HarTtfzDguLLWxP6liW3X0iU3mzldW11YXWHAsOmBU\nNd1Hb8vkxaqfJzFLWc+YKPIHiJ938ortzHCXkAyyl66z2yn73XK10hZzHr1SCzvjvbZAaxj2ex10qPeq\nm1XrfW/jdt8N+9YHmB9WDak6Khu+84hUxJaDUhGZO0HqBF1OlqwP4CgBsT+l9VfMKGDI6y79k/Wnam+2\nZQ1D3vr6kJq1DUvaXzbWzXrZuGb30mbeyyC1W2tPLppcFLIqskByXWJu7p7EXIZT4oUnLwgW+1zKbjwH\nVuPav/PIkf57G0/2Ws/o6nUuAIk1Tfg8qWiaYNXj2dZZsvNK004v+Z4OElfZnKm/aLNef/S2a6sFd/05\ndmZ327lTezguHNnnfj7jZOH++DNq20Hqfq2a33J+160GhlEwCoYgAAB3QJVH;\n\nDEFINE COMMENT 2\neJwLYWBgENc66TZbY3qAuVxT/kGp6XW+YueW8orp7QVKMTzkmx0cJfg+cYqwddZBqZCaF8q5fTYm55bu\nML204ovZrXUgNXVJ0wMOJM4Pc0q0zjqccG8jSKzU75r/pzRBH/HCSz4gfm2Ve/GX2j9ZhvXWWW8arLMW\ntbAUSnR0LZboEF0Nkn/SrNdfUfNnxtFy7yUdZddWe5bdWne0fPb6Nw2z14PkmSewODNP8F7SNGH6GhC/\nfEpb0YdpdTkvZu7MiJ/7Pf32POssoUVdpfyLJ1efXSzbfHZxZjf/4tIp4gvcF8rPDVieNXP6GqNpt9bZ\nTpIEu9lk7Wez4rWfJ+mvh/An7dTqcdv3vPPNcbVOhTP3mrVPnCwxO1KX43CgKrN1358sj711OZd2nisX\n2XmrQWSn87xJOwVXTNh1ax3n3sTNzvsfb5lyYcnW/kvzNzGMglEwxAAAfMiWZQ;\n\nDEFINE LABEL 0\neJwTZmBgiIrgvewVd2udfVLhxLcZt4K0slicX2Sp6cblVfLeyncX5yy7F8pYaZ1lWRNQqdB6bfWZnoOn\ngNoYdiev6c3JNJp0tNxo0v/KDRMYhhgI3eu0c6DdMApGwUADAIlWIYA;\n\nDEFINE LABEL 4\neJyTY2Bg2JBufawsVXLdttQ+GSCXYVvqWWnBYkG5hkpRRe1GRa2lzZn6D1sKTRVa99qmNvN4rmoM8dte\nkxD+NsM6qzLlaOHXVPfin9UcJfdaQ2rEOm81BHXdaxboXtMb1GU9Q7rde0lCa8DyrbW31okUKW2RyVfb\nnpn1+QDDKBgFo2BQAAASGjJG;\n\nDEFINE LABEL 5\neJyTZWBgUKpWVrqVz61slGSg3Ra/TX9RnI1JUex2p32xh72zEtrDu9LDc8IK1Ru96tNmCzUKrljV+HZT\nVcOSrWoF3dvqksw2FMVqLl8VfXmBXtS0mf8iLvdOi1RvvBUjXeGXeLfgW1514qnSKr91Zbbu68pyjZ6V\nVGowjIJRMAoGDQAATFYyuQ;\n\nDEFINE LABEL 6\neJzjZ2BgeJW5Ui0qrc1lUopa9K9kqdRJKdIVUZXSFV71KaXfGpnS+praw/uaDOxWNdqYCDW2Ggo18sbs\na9baxTBIQOyke80PJ/D2PZzweO6/idPXTJ/is3vNDPPDO+bfO6GzZO/xo8vMDz9avmGf4wqjlWnLrGfM\nnida+2yWd5nwNO8yiykbKv9NvNc80H4YBaNgoAAA+Cc+Kg;\n\nDEFINE LABEL 9\neJyTYGBgUM9WjFicc9bzeoGZZUPlfI03DZIq1zrma3j0vTe2neTsZDWZx9Nq8qOII/32uVHtmd3JLZ8n\nOVecW+qU+HqXe/yGfe7x5odZE6yPNSban1yXwXL2WgfHBYeJvJeV5nRfZBhC4OWJP1naJ5ryB9INYc85\ndg6k/aNg5AEAZWYxnQ;\n\n",
    "size": 46,
    "steps": 90,
    "successRatio": 1,
    "author": "szubster"
  },
  {
    "levelNumber": 21,
    "path": "21-Zero-Terminated-Sum-10.72/10.68-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 10/10 - SPEED 68/72 --\n\n    JUMP     c\na:\n    COPYFROM 0\nb:\n    OUTBOX  \nc:\n    INBOX   \n    JUMPZ    b\nd:\n    COPYTO   0\n    INBOX   \n    JUMPZ    a\n    ADD      0\n    JUMP     d\n\n\nDEFINE LABEL 0\neJxjZ2Bg0Mrqcl+cExNyqvTHVMbKSyv+VMVsONPzKIKBTBBctOUgiPbqfR7d3ncwr71Pq4e7N2KtV2/I\nKr6equkSHd/TJTpWxFzpPOvJ13PQwauXweHfxGv+FlPWxFtMqcuxnXSu3HbS5GqLKZINkfM3TPi6hmV+\n9gaORWvXs8wn102jYBSMAuwAAPDcNx0;\n\n",
    "size": 10,
    "steps": 44,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 21,
    "path": "21-Zero-Terminated-Sum-10.72/10.72.obsolete-Resnox.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 10/10 - SPEED 72/72 --\n\n-- This solution is superseded by 10.68-skwasjer.asm being funcitonally same\n-- with further optimization.\n\na:\n    INBOX   \n    JUMPZ    d\nb:\n    COPYTO   0\n    INBOX   \n    JUMPZ    c\n    ADD      0\n    JUMP     b\nc:\n    COPYFROM 0\nd:\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE LABEL 0\neJyzZGBgMLSosr5lstdWxTDVWcVwsu8jw5iQvcbuMVOdtEoz3KsanngotjF6BUxg9Ho8V82jdDWn+5/1\nko5Ht2Vbcew8asCxk0nNftNXOaOVQKMY1lrmGs21F7X4GilqAeLXJbV1yicJrohMObotLTt3z4Ti/r0s\nFRw751Ylbp5ae27pl9qI+us1GypBapUnXKpqmsDQmtr/Yypbf+6epgnXpsROMqu7OZmj5NuUJQVF05ry\ns2Y25S+efbTw17zc8k8Lqxq6l/D2vVqyZfKrJbIb/68wq6te5V1WvJajZNNOs7pVe7ZMztj7fDvDKBgF\nowAnAACaFWVA;\n\n",
    "size": 10,
    "steps": 46,
    "successRatio": 1,
    "type": "obsolete",
    "author": "Resnox"
  },
  {
    "levelNumber": 21,
    "path": "21-Zero-Terminated-Sum-10.72/26.56.specific-AaronKnowles.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM\n-- 21-Zero-Terminated-Sum - SIZE 26/10 - SPEED 56/72 --\n\n-- This solution is level-specific (quantity-limited input) and assumes a run of\n-- 6 or less digits. Two commands may be added to allow quantity-unlimited\n-- input; uncomment the three commented lines below to do so.\n-- See 29.60-AaronKnowles.asm for non-level-specific solution.\n\n    JUMP     g\na:\nb:\nc:\nd:\ne:\n    COPYFROM 0\nf:\n    OUTBOX  \ng:\n-- h:\n    INBOX   \n    JUMPZ    f\n    COPYTO   0\n    INBOX   \n    JUMPZ    e\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    d\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    c\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    b\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    a\n    ADD      0\n    OUTBOX  \n--    INBOX   \n--    JUMP     h\n\n",
    "size": 26,
    "steps": 41,
    "successRatio": 1,
    "type": "specific",
    "author": "AaronKnowles"
  },
  {
    "levelNumber": 21,
    "path": "21-Zero-Terminated-Sum-10.72/29.60-AaronKnowles.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 29/10 - SPEED 60/72 --\n\n    JUMP     h\na:\nb:\nc:\nd:\ne:\nf:\n    COPYFROM 0\ng:\n    OUTBOX  \nh:\n    INBOX   \n    JUMPZ    g\n    COPYTO   0\n    INBOX   \n    JUMPZ    f\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    e\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    d\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    c\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    b\ni:\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    a\n    JUMP     i\n\n",
    "size": 29,
    "steps": 39,
    "successRatio": 1,
    "author": "AaronKnowles"
  },
  {
    "levelNumber": 21,
    "path": "21-Zero-Terminated-Sum-10.72/31.52.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM\r\n-- 21-Zero-Terminated-Sum - SIZE 31/10 - SPEED 52/72 --\r\n\r\n-- This solution is level-specific (quantity-limited input) and assumes\r\n-- all runs of less than 6 digits, the first one of 3 and the last one of 6.\r\n-- Based on 26.56.specific-AaronKnowles.asm.\r\n-- See 29.60-AaronKnowles.asm for non-level-specific solution.\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\na:\r\n    COPYFROM 0\r\nb:\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    b\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    OUTBOX  \r\n",
    "size": 31,
    "steps": 33,
    "successRatio": 0.25,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 21,
    "path": "21-Zero-Terminated-Sum-10.72/35.61.obsolete-Halling69.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 35/10 - SPEED 61/72 --\n\n-- This solution is superseded by 26.56.specific-AaronKnowles.asm being\n-- functionally same with further optimization.\n\n    JUMP     h\na:\nb:\nc:\nd:\ne:\nf:\ng:\n    COPYFROM 4\n    OUTBOX  \nh:\n    INBOX   \n    JUMPZ    j\ni:\n    COPYTO   4\n    INBOX   \n    JUMPZ    b\n    ADD      4\n    COPYTO   4\n    INBOX   \n    JUMPZ    g\n    ADD      4\n    COPYTO   4\n    INBOX   \n    JUMPZ    d\n    ADD      4\n    COPYTO   4\n    INBOX   \n    JUMPZ    f\n    ADD      4\n    COPYTO   4\n    INBOX   \n    JUMPZ    e\n    ADD      4\n    COPYTO   4\n    INBOX   \n    JUMPZ    c\n    ADD      4\n    COPYTO   4\n    JUMP     a\nj:\nk:\n    OUTBOX  \n    INBOX   \n    JUMPZ    k\n    JUMP     i\n\n\nDEFINE LABEL 4\neJyzZmBgqNAoDfiqvthjvkqkNYeihOlOuQCTt0ISpjf5N9qG8Yf4PhDYFvZW6HvMDMnKzC+yn/LOKspU\nPle9392qtXVNq9aJXb81Zh7arL7r6C3lWyfWyNw6cUxs5iE94RO7pAXero4R+DQTaAVDhPkKM1kLGb9U\nS//4tVZpG79Zm+90tXuxd5bjxYNbXRMP73abeYjL8/9Oce+pK+94S5iC9OhEfDyiE2G8ICFMpnJ26BO/\n2aG33V+FF5hLxE8Nlk94F5qe+C70R7JaqHuabeDiEgnTVaX6hhvLvhuWlVtYNFe2xzVXxtb/LH85aXHJ\ntfUKJY4HGEbBKBgFGAAAnKFndQ;\n\n",
    "size": 35,
    "steps": 41,
    "successRatio": 1,
    "type": "obsolete",
    "author": "Halling69"
  },
  {
    "levelNumber": 21,
    "path": "21-Zero-Terminated-Sum-10.72/9.92-albertferras.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 9/10 - SPEED 92/72 --\n\na:\n    COPYFROM 5\nb:\n    COPYTO   0\n    INBOX   \n    JUMPZ    c\n    ADD      0\n    JUMP     b\nc:\n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 9,
    "steps": 63,
    "successRatio": 1,
    "author": "albertferras"
  },
  {
    "levelNumber": 22,
    "path": "22-Fibonacci-Visitor-19.156/149.51.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 22-Fibonacci-Visitor - SIZE 149/19 - SPEED 51/156 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- This solution assumes that there are 2 inputs and\r\n--   both of them are between [5, 35).\r\n-- This solution = Patrick-Jakubowski's solution + binary search (-1 speed) +\r\n--   better JUMP labels + optimizations in size\r\n\r\n    BUMPUP   9\r\n    COPYTO   8\r\n    BUMPUP   8\r\n    ADD      9\r\n    COPYTO   7\r\n    ADD      8\r\n    COPYTO   6\r\n    ADD      7\r\n    COPYTO   5\r\n    ADD      6\r\n    COPYTO   4\r\n    ADD      5\r\n    COPYTO   3\r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13a\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21a\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl13a:\r\n    ADD      4\r\n    SUB      5\r\n    JUMPN    l8a\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\n    \r\nl8a:\r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl21a:\r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl13b:\r\n    ADD      4\r\n    SUB      5\r\n    JUMPN    l8b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl21b:\r\n    ADD      4\r\n    SUB      5\r\n    JUMPN    l8b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n\r\nl8b:\r\n\r\n",
    "size": 149,
    "steps": 53,
    "successRatio": 0.91,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 22,
    "path": "22-Fibonacci-Visitor-19.156/16.126-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 22-Fibonacci-Visitor - SIZE 16/19 - SPEED 126/156 --\n\n    BUMPUP   9\na:\n    INBOX   \n    COPYTO   4\n    COPYFROM 9\n    COPYTO   0\n    COPYTO   1\nb:\n    OUTBOX  \n    COPYFROM 4\n    SUB      1\n    JUMPN    a\n    COPYFROM 0\n    ADD      1\n    COPYTO   1\n    SUB      0\n    COPYTO   0\n    JUMP     b\n\n\nDEFINE LABEL 0\neJzjYWBgqEwJWK6f8SgiM8vZ6VHOe2P5vM9m0fl7bZ0rvMsUWrccBCphME993Pa9xruMYRSMglEwrAAA\nhg4Sww;\n\nDEFINE LABEL 1\neJxTZGBgOBHn7toWz+Npn2SdtTs5psk89da6Hykb9gGlGFgTZEP3JU0PeJtxyedW/vSAU6VacYyVf7Ia\nKo8WHqo4V+5ZNr1OvPBeM0NSaseUqCXtZampHbuqjSY9aWaY87CFZf7DFsEVT5pnr1/V+Hz71trPB1rL\n9x5Xz3Y+8zfp4Cne2L3HL0f9OMwwCkbBKBgwAABDNkBj;\n\nDEFINE LABEL 4\neJxTZ2BgCInS2wukGK5FFu6fFsnizBV3yWdHSlN+Ss6jiO5Sd1fGyoMO1dWi/ma1e7NLa0Vrt9dMXwNS\nf3UBj+ezWe/7v01Zs/vH5ML9RtPUtr+Y+XnSiaUszopb6k7IbWU5G7f1x2GQWqNpqR1pmy5VgdiFdwO8\nK28VJh+8frRQ9MKGCQbHZDeCxGsPyoYevC64QuZp90Whl9duMoyCUTAKaA4A3RFEcQ;\n\nDEFINE LABEL 9\neJzjZmBg+F7T5a7X4O56s32DSURHqcWsdtlQzaZb64BSDCo5qdteNqpt15j1eAsDAZAyOzchf/r0gC1T\nA7wPTjjqzNHn7kpIzygYBaNgYAEA4YAahA;\n\n",
    "size": 16,
    "steps": 131,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 22,
    "path": "22-Fibonacci-Visitor-19.156/17.148.obsolete-tuxuin.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 22-Fibonacci-Visitor - SIZE 17/19 - SPEED 148/156 --\n\n-- This solution is superseded by 16.126-skwasjer.asm being funcitonally same\n-- with further optimization.\n\na:\n    INBOX   \n    COPYTO   2\n    COPYFROM 9\n    COPYTO   0\n    COPYTO   1\n    BUMPUP   1\nb:\n    OUTBOX  \n    COPYFROM 0\n    ADD      1\n    COPYTO   1\n    SUB      0\n    COPYTO   0\n    COPYFROM 2\n    SUB      1\n    JUMPN    a\n    COPYFROM 1\n    JUMP     b\n\n\nDEFINE LABEL 2\neJwzZ2BgmKwtWqulLFq7WT6maaesWmelbN2sbXInF+kqTV55SXv2+hP6MRuAyhgW2Uo26Fi5L1xl9XnS\nUhvFtvl20+v4XEVrj3jMbnTwet3j4PVnRpPn0flNngxzTP2WtGsHSTbMCZ9eNyVqdiNv7Ioun1jrGRei\neZeCzHqRNb/lRZbRpJxMwRUf0pdstUphOWuTzHFhX1LT6b9JmTutUqav2ZbKMn91pl7//dznndcLnnd2\nlOn1O1eYTW2u6Fp8vOzaau/SW+smF8VseJQjuW5ZtujqFVkQs1826u1d2rxhH8MoGAWjgCAAANC3YSk;\n\n",
    "size": 17,
    "steps": 157,
    "successRatio": 1,
    "type": "obsolete",
    "author": "tuxuin"
  },
  {
    "levelNumber": 22,
    "path": "22-Fibonacci-Visitor-19.156/175.52-Patrick-Jakubowski.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 22-Fibonacci-Visitor - SIZE 175/19 - SPEED 52/156 --\n\n    COMMENT  0\n    BUMPUP   9\n    COPYTO   8\n    BUMPUP   8\n    ADD      9\n    COPYTO   7\n    ADD      8\n    COPYTO   6\n    ADD      7\n    COPYTO   5\n    ADD      6\n    COPYTO   4\n    ADD      5\n    COPYTO   3\n    COMMENT  1\n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    INBOX   \n    SUB      3\n    JUMPN    a\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    INBOX   \n    SUB      3\n    JUMPN    d\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    INBOX   \na:\n    ADD      3\n    SUB      4\n    JUMPN    b\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    INBOX   \n    SUB      3\n    JUMPN    g\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    INBOX   \nb:\n    ADD      4\n    SUB      5\n    JUMPN    c\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    INBOX   \n    SUB      3\n    JUMPN    f\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    INBOX   \nc:\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    INBOX   \n    SUB      3\n    JUMPN    e\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    INBOX   \nd:\ne:\nf:\ng:\n    ADD      3\n    SUB      4\n    JUMPN    h\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    INBOX   \nh:\n    ADD      4\n    SUB      5\n    JUMPN    i\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    INBOX   \ni:\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n    INBOX   \n\n\nDEFINE COMMENT 0\neJzzZWBgWMKbEL6ElyFvEd/0ukV89rPnCDDkiQp/T+8X/ZzSIvk+8a90YfJvme/pP2S7SsvltHqAWhhS\nVEP84tQv+diYXPIB8R+r/snaa/wnC8SWdCxMnuVQlTnLwWyqmNPsRj5XlsIut6b8Wu+m/G++XaWf/SZX\n5wYenANSmxqSuu1GROJmENs93myqfdLnAyC2YHFEoGBxVebUQtlmEH9F1p8s+bzv6ROKS9Oqq0vTQGJX\nOp9HX+msy4no0OoJ6uIo8egrTD444XWc7aTXcRZTCpONpjXlr5u+pB2k1nTqtdXrpl9brTTn3kYQn3fJ\n0fndS3ZOY1+2ZfLflVsml62xn128NmB58drMnd9X/zj8dyXDqbZlbefalpUdalxRuL96VeH+vPVt515t\n4LjAMApGwTACAAWaggk;\n\nDEFINE COMMENT 1\neJwrZGBgMOaYfsuYI3Xbch4tgyW8kipLeJuEG6X6ZAJ1Zqtams5WBSphWMNVmlYvXZV5S6OrFMR/oPb5\nwA3Nwv07THdOW2oj28zs2V/B6NVf0e4uWqtprdVjaLFlspnZ0flmZrfWbTW7t3G+XeLm6Y4Ra3tdj87n\ndN8wgdNdsgGktt09dw/IPP8Ytc7LUUvak0LVOt8FGE2KCT84JzzSe8m1yJBV4ZGvdz0Oeb8XpE4+T894\nQe65pSD25rS6nMlF39NB7O4lK/TEF2gZ7Jnk7BTQHRMS0fE67mZ7aZr83L0zxRd4L5Gaf231vLn3NhpN\n+3zAtf/PsYTWuhMgfde3W8+I3mY2tXjtzmnVq9wX1q08t7Ru5bXVZWtSt+Wtz9wJUuOx9/1ej73Ptx/Z\nd2+j2ZFzS5ecsp+95vjBOVuOeC/ZdejWOutDqdt2HSrcv/1w2aH1x8oOrTpRuF/5dOLmhaed580/k7pt\n/pmqoyBzGq/vnNZ4PXXbh7s7p+XcN5r04sGGCY8eGU269fTkorDnkHA4ecVDa+K1b/kgduxZw0DZS4zB\nd69JBt18GOoGEpvz7qBQw/sXwSB2zXMVU45vn5QZRsEooAAAAMEEzlY;\n\n",
    "size": 175,
    "steps": 53,
    "successRatio": 1,
    "author": "Patrick-Jakubowski"
  },
  {
    "levelNumber": 22,
    "path": "22-Fibonacci-Visitor-19.156/18.154.obsolete-cowboy.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 22-Fibonacci-Visitor - SIZE 18/19 - SPEED 154/156 --\n\n-- This solution is superseded by 17.148-tuxuin.asm being functionally same with\n-- further optimization.\n\na:\n    INBOX   \n    COPYTO   0\n    COPYFROM 9\n    COPYTO   1\n    COPYTO   2\n    BUMPUP   2\nb:\n    OUTBOX  \n    COPYFROM 1\n    ADD      2\n    COPYTO   3\n    COPYFROM 0\n    SUB      3\n    JUMPN    a\n    COPYFROM 2\n    COPYTO   1\n    COPYFROM 3\n    COPYTO   2\n    JUMP     b\n\n\nDEFINE LABEL 0\neJyzZmBg2O4bYXXc3dvwvAuH/n07Dv1kW2/DCRaKjjNMt/hVm2TGVpvI5hhaaJU+t84tv28nWrvJuaph\nlZti2xW/x3M/+nctDgi4ta7Wu39vhrv5YU1r88N7jZu2AI1lkE/yNpRPMqubnXzvBIj/K7k0rSxVLZo9\ne4Vrc06qc3V+hJVbOYd+b4OWwf7WFa61bd8DQOpE1u61DVvz2Uxlubch/2IOffm5HPpMc7wNt0wN8Jae\nXJoWO0m0NnaS0UrpybIbi6b57O6f7rM7cc7sY3fnzj42e969E4GLnM+kLXM+s2DFvROWqz8fMFzXtMVv\nvftChlEwCkYBBgAA/lVhcA;\n\nDEFINE LABEL 1\neJwTYWBgkE7iCepMEih4kvhqiW6y4bGLyc5L9qf2tbOn91T4ZxfFrco9HetX6FkqVtI6Q6P0+0agFoYl\nTZwTpBeZdoDYe1ef9Fu1NqGhaPOOMwxUAELNjlOFmqtmLWninv+uYeLS91UrN3zJXnDwYtrjI9QwfxSM\nglGAAAATcTAt;\n\nDEFINE LABEL 2\neJzjZ2BgmJmp67MqN7e3qOD3+U+F6xqti7cXWJXVxuwsnxemVl3gr1q3Jaih4WFkffPq5Ned2XU1/VdX\nGE00PMYwCkbBKBjyAAAuYhxO;\n\nDEFINE LABEL 3\neJyTZmBgmC8yL6xbMqk/WEZl52XZr4uklY7UXlCzyZDQ5kucocOX+FA3KIXV4FCer0lF93KztuXqFror\ngNoYXIIOxMuFnZj9K6x2B4j/1+tYz7xw0w7dZIe29ow/TSAxoQb96NtNhauFmruOMpAASlaZdkiuvthl\nu2rWlDXLnZc8WRi9/ur0a9tdJl3bToo5o2AUjAL8AAA49zff;\n\nDEFINE LABEL 9\neJxzZGBgWKuYnmCvUhtTqq4fbW0wOcLHfHJEs/mB+DOm9dk6agwLS9W/Ltph2z8NqJShxv9Q3oLAQ3kV\n0T9TKqIPxP+MdA03DLnv5er/1e2Gt7NHtsdJvxMuKrFRLmuKclwbq9w9Z7T2BfhMTosSm/ssWmzuwRjF\n2SBz1qQXxe3N1pnZln2+WitHOk8i70D89Hz96LNF30O9q76HvmvoiLpTXxsDUvtiqkrs78nXojMnqsSa\ndDMnL+qYmr61rST3RMutyoktnBNyOr4uWtitvKp60pvNodM6ts2Ze237nAUPt35bFLCxbEnh6o6lXxfp\nLGud8XXpxS77JQkNT+cdyls/2yaDd2pMUlZfegLDKBgFIxgAALaUdxc;\n\n",
    "size": 18,
    "steps": 164,
    "successRatio": 1,
    "type": "obsolete",
    "author": "cowboy"
  },
  {
    "levelNumber": 23,
    "path": "23-The-Littlest-Number-13.75/12.71-peterfreese.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 23-The-Littlest-Number - SIZE 12/13 - SPEED 71/75 --\n\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX  \nb:\n    INBOX   \n    JUMP     d\nc:\n    ADD      0\nd:\n    COPYTO   0\ne:\n    INBOX   \n    JUMPZ    a\n    SUB      0\n    JUMPN    c\n    JUMP     e\n\n\nDEFINE LABEL 0\neJxTY2BgYDE8t9TNoCoTyGQ4aiDbvMm8MPm9RW7CUpsVMYtsteKkHdqKpjvWzRJ2tp7B7RbT5OHeVerh\n3pR/0PN5dLnvzoz8AJ7yrKDHbRrB9rNBZuxL6lpsn5QQDmK7xxuZgWiRIud5gsWFE88Xv44D8XtLukp3\nVS+JLK6LCUlovRU0q90oZVb70cJ7rfNb5NrMpjKMglEwCugCABWdN2I;\n\nDEFINE LABEL 1\neJyzZWBg0LPMTcizfN+/yoplfoY1xyIVW96lEY4By/d7BSwHSjMwGYXUbLCYXH3HPqIexJ8Trtg2Jepx\nG29sQitrQkzTgUTRWoaktiKO+NK0C9Fr4m+HP49WDXke/TpwTfz6gNK0/ID+iqwgtc7HIaVT7oXVzQqP\ndJ73I+Xo/JI0lvmf0uxng8ycnd+2YHa+dRaIfb1ArfN4GUPe3qrv6T+rv6dvrf2TVVB/rtyw/sfU3IbZ\njU+azdJDO7V6zvQwzAGpz5rJcjZnhlk6iL1mxtFC+blGKTfmb0iavNAopW/xzoy2ZV2lnkuv1YounN/y\nYmZmN8MoGAWjAA4AIN5nNA;\n\n",
    "size": 12,
    "steps": 70,
    "successRatio": 1,
    "author": "peterfreese"
  },
  {
    "levelNumber": 23,
    "path": "23-The-Littlest-Number-13.75/24.67.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 23-The-Littlest-Number - SIZE 24/13 - SPEED 67/75 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n\r\n    JUMP     b\r\na:\r\n    COPYFROM 0\r\n    OUTBOX  \r\nb:\r\n    INBOX   \r\n    JUMP     d\r\nc:\r\n    ADD      0\r\nd:\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    SUB      0\r\n    JUMPN    c\r\n    INBOX   \r\n    JUMPZ    a\r\n    SUB      0\r\n    JUMPN    c\r\n    INBOX   \r\n    JUMPZ    a\r\n    SUB      0\r\n    JUMPN    c\r\n    INBOX   \r\n    JUMPZ    a\r\n    SUB      0\r\n    JUMPN    c\r\n    JUMP     a\r\n\r\n\r\nDEFINE LABEL 0\r\neJzTYmBg2G45PTXYoqPd1mzCzC5Tk22GpkW7bpg4b2cAy23vOmwV2eJpv67ivHN/2S0X6YZbLknTNFyy\r\nVoDkb7kc6/Z0t2oS8npb0+u7r/Jo0LqKppC3Nc9DK9q8w6+vB6l5kbqvsj/VefvdlBmrQfy7KRY2INqv\r\nvKDEr3zDPgg7aGpBlXbj69p9lYwN+yoLm3jqrzZXtK1s11lS1CW6hWEUjIJRQBMAAL6oQ9M;\r\n\r\n",
    "size": 24,
    "steps": 66,
    "successRatio": 0.89,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 23,
    "path": "23-The-Littlest-Number-13.75/39.32.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 23-The-Littlest-Number - SIZE 39/13 - SPEED 32/75 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- The input SHALL follow the pattern: 3 4 ?\r\n-- The number indicates the smallest number's index.\r\n\r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a1\r\n    JUMP     b1\r\na1:\r\n    ADD      0\r\n    COPYTO   0\r\nb1:\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a2\r\n    JUMP     b2\r\na2:\r\n    ADD      0\r\n    COPYTO   0\r\nb2:\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a3\r\n    JUMP     b3\r\na3:\r\n    ADD      0\r\n    COPYTO   0\r\nb3:\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a4\r\n    JUMP     b4\r\na4:\r\n    ADD      0\r\n    COPYTO   0\r\nb4:\r\n    COPYFROM 0\r\n    OUTBOX\r\n\r\n",
    "size": 39,
    "steps": 33,
    "successRatio": 0.02,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 24,
    "path": "24-Mod-Module-12.57/11.53-nanashi-juanto.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 24-Mod-Module - SIZE 11/12 - SPEED 53/57 --\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    COPYFROM 0\nb:\n    SUB      1\n    JUMPN    c\n    JUMP     b\nc:\n    ADD      1\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 11,
    "steps": 54,
    "successRatio": 1,
    "author": "nanashi-juanto"
  },
  {
    "levelNumber": 24,
    "path": "24-Mod-Module-12.57/17.48-og01.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 24-Mod-Module - SIZE 17/12 - SPEED 48/57 --\r\n\r\na:\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    e\r\n    SUB      1\r\n    JUMPN    c\r\n    SUB      1\r\n    JUMPN    d\r\n    SUB      1\r\n    JUMPN    b\r\n    JUMP     f\r\nb:\r\nc:\r\nd:\r\ne:\r\n    ADD      1\r\nf:\r\n    OUTBOX  \r\n    JUMP     a\r\n\r\n",
    "size": 17,
    "steps": 47,
    "successRatio": 0.8,
    "author": "og01"
  },
  {
    "levelNumber": 24,
    "path": "24-Mod-Module-12.57/35.29.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 24-Mod-Module - SIZE 35/12 - SPEED 29/57 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    COPYFROM 0\r\n    SUB      1\r\n    SUB      1\r\n    JUMPN    a\r\n    SUB      1\r\n    JUMPN    a\r\n    SUB      1\r\n    JUMPN    a\r\n    SUB      1\r\na:\r\n    ADD      1\r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    COPYFROM 0\r\n    SUB      1\r\n    SUB      1\r\n    JUMPN    b\r\n    SUB      1\r\n    JUMPN    b\r\n    SUB      1\r\n    JUMPN    b\r\n    SUB      1\r\nb:\r\n    ADD      1\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    OUTBOX  \r\n\r\n\r\n",
    "size": 35,
    "steps": 27,
    "successRatio": 0.07,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 25,
    "path": "25-Cumulative-Countdown-12.82/10.95-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 25-Cumulative-Countdown - SIZE 10/12 - SPEED 95/82 --\n\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX  \nb:\n    INBOX   \n    COPYTO   1\nc:\n    COPYTO   0\n    BUMPDN   1\n    JUMPN    a\n    ADD      0\n    JUMP     c\n\n",
    "size": 10,
    "steps": 119,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 25,
    "path": "25-Cumulative-Countdown-12.82/11.79-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 25-Cumulative-Countdown - SIZE 11/12 - SPEED 79/82 --\n\n    JUMP     c\na:\n    COPYFROM 0\nb:\n    OUTBOX  \nc:\n    INBOX   \n    JUMPZ    b\n    COPYTO   1\nd:\n    COPYTO   0\n    BUMPDN   1\n    JUMPZ    a\n    ADD      0\n    JUMP     d\n\n",
    "size": 11,
    "steps": 102,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 25,
    "path": "25-Cumulative-Countdown-12.82/11.82.obsolete-pyaehtetaung.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 25-Cumulative-Countdown - SIZE 11/12 - SPEED 82/82 --\n\n-- This solution is superseded by 11.79-skwasjer.asm being functionally same\n-- with further optimization.\n\na:\n    INBOX   \n    JUMPZ    d\n    COPYTO   1\nb:\n    COPYTO   0\n    BUMPDN   1\n    JUMPZ    c\n    ADD      0\n    JUMP     b\nc:\n    COPYFROM 0\nd:\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE LABEL 0\neJxLYGBg2CyvFl2s0h5+Wa09vF5TLdpezz53vsHOammj1I7zhtNmKut3LdbW+bGiXvPEqnDVByu/K0Ut\ndVY+Pr1YJXJStvrUtsfGR+LiTdWiZ1vnRwCNY9juu7ZofUBK6aNI77KwOL78rIQFmUZJdlHPEhmD2+JV\nPW7FtLl0h7S51Puv9gn35o357rG26LuH4+Ttvizzd4V2LT4W1bW4LmnaTJBZWW2TfdtaVT3UmvNcg2ra\nXLqqQt2iKr94JpWtif9VtiCTr/Jb/qualFKr1pTSdy3qjX1NGlM21aXNVqqWmcdUIjNvUeH6GW1FGlNA\nZoVN9wpQm3a34NuUS1XfprzuKZo2babVDJb5WTMvL1g6/838ymX3p91csai/dbV6Y+aauwWZa/IjLq7e\nEdq6OqJedg1zz9O1P6aKrr8/zXazwNTOzYUTQWbePRwvdvfw/WmlR+pmLT2aNtvxXNpskPjKByuEHR9G\nTrr5UGBqyGOBqSIvZLojXvt0guQCb7eHr3xgGDjn3WFvhlEwCgYYAABa86zc;\n\nDEFINE LABEL 1\neJxjZ2Bg+FT53AFIMRyqSCktq1iyNarSaeenSv9DDKNgFIyCYQ8AcC4LPg;\n\n",
    "size": 11,
    "steps": 104,
    "successRatio": 1,
    "type": "obsolete",
    "author": "pyaehtetaung"
  },
  {
    "levelNumber": 25,
    "path": "25-Cumulative-Countdown-12.82/12.79.obsolete-Multirez.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 25-Cumulative-Countdown - SIZE 12/12 - SPEED 79/82 --\n\n-- This solution is superseded by 11.79-skwasjer.asm being functionally same\n-- with further optimization.\n\n    JUMP     c\na:\n    COPYFROM 1\nb:\n    OUTBOX  \nc:\n    INBOX   \n    JUMPZ    b\n    COPYTO   0\n    COPYTO   1\nd:\n    BUMPDN   0\n    JUMPZ    a\n    ADD      1\n    COPYTO   1\n    JUMP     d\n\n\nDEFINE LABEL 0\neJxLY2BgWMYg3QCkGAL/8dSD6DhLIe9MK0PfX+YB/o91A/xjNX9HxWp6JripOxW6qe+fE6hhvVRK+/r6\nqXrPNsQaHl9306Zwuq2d8WRP+4o2kH47tzeRH9zOVsl6/12g6WO9dLH/ijW7Ao+vC4u4vv5Y1Io1prHe\nyxzjzs39F1/RtjReOC8p8mz4R7+EAJDeE1mGvieyIluc8hpnMBScm3ulWGeJX7n3sm913sskmnSW8HYu\nmKXfIzJxcm9ky9ve+eWTe9scQfq2zRDyjp1RuRLEjp0BdPOMOxH1s50Kty/IbP21TGax4Mqo5edWbe9q\nWP07qmdNX/CidQH+ILUf9yr5hO2/mrl+/7eNYP7WvuCKU/VBIPbxiwH+Cpd0lkRcX7Em8v6OtSCxWWfn\nlytcml8OYuddZM6NuO5UOOeuUyGIr335itvye0LeIPbct1td5r6dXx79XmZx9HuVrSCx6PdHXPU/R9gd\n+BFhd+3XY/e3f/aGvf3TnvL967qKwo9va1R+be/68dd48v//SXMYRsEooBMAACM2sxw;\n\nDEFINE LABEL 1\neJzzY2Bg2Mtk1QSkGFb9294ForOcyh0EnYp2gdhsjo/d2RzbHG+5WNiUeVvYzPCLsLsQLORtGtoXbBr6\nJEszJLE4MfBslb0fT/10t8iWdR7HuncF3pv3KWzFGpD+S8kRdkmJf2rDE5Z3Lo3PWpGUOGP1iawVa2bn\nHV8Hkr+bot34Je1PbXLm2xoIf6lzauVSZxBbv+eIa3vLVpctDUxer2vzA69Ueya01xzNcKkTzvvRd6z7\n+uT1s69Ptl6qOjlrBd/EGav1WmaslmiqXAnSyzLjihvLjPYUqVnajTdmH+ueOldk4vYFhdPrFzfO8FiW\nNC1r5dPenjVnq56ucfQDqb+1+Yjrrc3LOzU2/12wbrvOErlDOktA4hdPPXbXOm29FMTOOfjZw/vYFbeT\nD6+4MYyCUTBMAACDE4Uc;\n\n",
    "size": 12,
    "steps": 107,
    "successRatio": 1,
    "type": "obsolete",
    "author": "Multirez"
  },
  {
    "levelNumber": 25,
    "path": "25-Cumulative-Countdown-12.82/77.68.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 25-Cumulative-Countdown - SIZE 77/12 - SPEED 68/82 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n\r\n    JUMP     c\r\na:\r\n    COPYFROM 1\r\nb:\r\n    OUTBOX  \r\nc:\r\n    INBOX   \r\n    JUMPZ    b\r\n    COPYTO   0\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    b\r\n    COPYTO   0\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    OUTBOX  \r\n\r\n\r\nDEFINE LABEL 0\r\neJxjZ2BguGGSkXTDZHvXIaPzBw4ZdZ0FCjHEWSpqMoyCUTAKhj0AABHoCdo;\r\n\r\nDEFINE LABEL 1\r\neJzTY2BgqNOZXz5FbXrqdZX2lANK7Smu8tvSC6WNCgqlvZr1ZUUmblXMWhGjyLq5XTT79D6h6FNALQzT\r\nzOaX25o92/DebOKeheb3D7Jayh5b6xB96rCTzQk7tw37EjxXrDnidW9etldBCUj9zLDs032hG/b1hX7t\r\ncwiTbhCJepJ1MXpZ2ue4L9miScs7FZKjT+UlTdwzO+3vAt90kYlcmdqNrTnK+ZEFVzP3Fn7Jnlha0Tan\r\n7NzczRUm2zZXbNjHMApGwSigCgAAEp9R0Q;\r\n\r\n",
    "size": 77,
    "steps": 84,
    "successRatio": 0.77,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 25,
    "path": "25-Cumulative-Countdown-12.82/88.59.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 25-Cumulative-Countdown - SIZE 88/12 - SPEED 59/82 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- Pattern: [34][1-9]0[1-9]\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    ADD      1\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    a\r\n    COPYTO   0\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    a\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    ADD      1\r\n    COPYTO   1\r\na:\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    INBOX\r\n    OUTBOX\r\n    INBOX   \r\n    COPYTO   0\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\n    BUMPDN   0\r\n    JUMPZ    b\r\n    ADD      1\r\n    COPYTO   1\r\nb:\r\n    COPYFROM 1\r\n    OUTBOX  \r\n\r\n\r\nDEFINE LABEL 0\r\neJxjZ2BguGGSkXTDZHvXIaPzBw4ZdZ0FCjHEWSpqMoyCUTAKhj0AABHoCdo;\r\n\r\nDEFINE LABEL 1\r\neJzTY2BgqNOZXz5FbXrqdZX2lANK7Smu8tvSC6WNCgqlvZr1ZUUmblXMWhGjyLq5XTT79D6h6FNALQzT\r\nzOaX25o92/DebOKeheb3D7Jayh5b6xB96rCTzQk7tw37EjxXrDnidW9etldBCUj9zLDs032hG/b1hX7t\r\ncwiTbhCJepJ1MXpZ2ue4L9miScs7FZKjT+UlTdwzO+3vAt90kYlcmdqNrTnK+ZEFVzP3Fn7Jnlha0Tan\r\n7NzczRUm2zZXbNjHMApGwSigCgAAEp9R0Q;\r\n\r\n",
    "size": 88,
    "steps": 68,
    "successRatio": 0.02,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 26,
    "path": "26-Small-Divide-15.76/15.71-ekx.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 26-Small-Divide - SIZE 15/15 - SPEED 71/76 --\n\n-- For each pair of inbox items, floor divide (discard remainder) the first by\n-- the second by counting how many times the second can subtract the first until\n-- further subtraction returns a negative value.\n\n    JUMP     b\n    COMMENT  2\na:\n    COPYFROM 8\n    OUTBOX  \n    COMMENT  1\nb:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    COPYFROM 9\n    COPYTO   8\n    COMMENT  0\nc:\n    COPYFROM 0\n    SUB      1\n    JUMPN    a\n    COPYTO   0\n    BUMPUP   8\n    JUMP     c\n\n\nDEFINE COMMENT 0\neJxzY2Bg+CCypMBIhKPkgwjDqQ8iWybniCm2NUpxlFTKJuStVrqVyaR2K3O2xtFCca3c8rO6ktO79XL3\nxBlfqqo24SjRtBZMTrYVTL7uaJ/b6pHaUet9cM5PH/tNP31y92z3vbQfaDzDqdINlWtLNlSGFTbl782z\nz/2UlpA3O/lo4dP4/orCaMU2qQjJ6THha5bsDrff1Bfjszsw/dL+tOxL+2/la+0yLJbdmFwRM1Oxsr9i\nafmfrOdlz4uel73uWVp+cI5dVf/eP1WihypqNuwD2ZPb8ycrt0f0EIgd0F1lDaLr5ibkJc6JqE+cM/vY\ngTn2m+7OZZk/eaFZ3YqlSwoWrLiVabl6evrWNTsz3DZ9rt61bfKkLzt2ri3YlXqWYRSMghECAEmNgR0;\n\nDEFINE COMMENT 1\neJyLZ2BgOGX1KOKUVV3oe4vJvrdMFB0dje7ZndW9Zxeow+AwW4PHc7ZGTIiJdmnaf6PcchHze82GFm2d\n7y0KJ7636FpsaHFuaZiZ4Ap2A6OVdeprlnApz58tpFA4EWgsw3H33HI5b44S5VCOkhNxCXnq8TszTsSt\nif8aWeizO5zH80HoSbczgSfd5Lytg509H0X0utrnnnfJLT/vsqLL223L5OPu1jMWeR6cY+3DMv9GxME5\nJ+K2TAaZa1jcJSlSFKIgUqS2IKywdPXWQrUFIPEN6Vv8ehu2+IHYy/tYovh6bmUGdM9u7OqdPOlI/+O5\nVZPPLX03XXDF4tmZi3bMl5yet9i53XNpbjn7Mtkc9mXvEz2XPorwXGqUorI8YMKCFWuWxK3MXBS38vFc\nkHm7tn0P2LVN8K3kdsk7u7Zdm3J9+73mgl1N+Yv2q0VHHI4JyT1uHbz85Pyw+We64rZceF5kcGl2Y/8l\nyemhFzIXzT+zc+3yk7fWTTq6c+2TfYIrvPesWRK9zXoGwygYBYMAAADHUaxi;\n\nDEFINE COMMENT 2\neJzTZ2Bg0LTOLXezmd241EZy+lKbydeX2mjtUrQzWjnVSa//vAtDq7fb7MbcwA2VR0I2VEpFXKqKTGFo\nBWpj2JuXuehJM8v8pglqC2InzZ+9Z5L1jD2TAib8m9jW6dF3qepKJ0fJopYlBckVTfkiRf0VC3IZWo9m\nF05kzz63tDmnaUt1/qX974udz9yvDLh6vWby9TttvJfZ+p3PbJkacQRk/tY172W2ruHt+75a7SmIrzGL\no4R/sX3ujNW3Mp3338pkGAWjYBRQDAB3E1Vp;\n\nDEFINE LABEL 0\neJyzZ2Bg0BIPSXWXaOt0l8jdA6JZJTdUNko15VfKGqW4qFoHl2lN9mU3KPSJM97id8m8LtTN5mwCUBvD\nR/8VXbmBJ7tv5bd1yuSL1npmnU3YkD4/bEfKNf/C6C1+f8Osg88EdsWJ+cnm7PcSrWX0Otm934tlvrWP\n0cpSP/tNL4Ny94RERRzxia06Kp4accQxN3cPyNzjTTEhnE1dcZxNIauON6WeZWzl7att+1yd25MZ2zTh\ne8CeSZN9hacV+vjO+B7gOjsz1mYeR0nk/MmTxBcwnCpboNf/aeHzohVLWaKal1sH7115zX/rmmv+DVvO\nJpjt4CgR3KXYxrnXftPxva8vMoyCUTAKGADCWmtJ;\n\nDEFINE LABEL 1\neJwzY2BgKPU72f3EY2+Tnb1ZHY9VRL2lqXO7imHMzBX675d56t87kWbAe/m/Ucy9YvPuF36W515FO5x7\nNcsn5l5uYOE188hL+zdHNW3ZHBWy6kbEwTldQSu6Zvnca3b2vNcMNJrBPLJJyzzSPWZzVNfizVFKpy9E\nL3jwNsb67tuYrTdA8u+LGVr9StQWTCjeudaweOsNw2K1p++LIXKGxY8i/EoeRYDYP9tXdEV0BEzw6JPd\neHNy4bWL02LuGUw/+NB3Rt39rJlbb8jP3bDv6oLS1d1LAiYsWCFayzAKRsEoIAoAAGpxZlk;\n\nDEFINE LABEL 8\neJwLZ2BgmK3xuTpSc0PlbA3vMhfVJQV9ikcLD0t+rl4nytBqJfhjqjPf+2WtvEe37eOPOFIizHv5gZT1\n3UQ167ue+pOvLzDivQw0guFGxIbKGxHeZfPCnhfxBSbkOXsm5L1xPVq4ydm77I/97MalNoUTeazeL1tr\neWsdj5XP7qU2e49LOvJe3uRceM3Zs/CafVjbuQvR9064JGzYdyBRa1dkSulq8dTMRTtSfkxdnHCv+W1M\nf4VURFM+yK7ioqqG7wUruiwLJKfPKFiy9X3xyQuaZZOv21VJ3jGrtb6b0SR5p7ST9/LL3nsn/k08uq1q\nstHKm5PVFlRNnt1oMeXWui1TL+3XmFV333W29V2QeY4rRGsfLWeZ77jixy3L1TvXTlg3eRLL5tmNf7aK\n1q7aI1rrvL+q4c7BFV0fj65Zcub4kq3aJ1LPvjyhdwWkd+etUkWJ29dugthHTj0v0r3/vMjymXeZ5pvn\nRQyjYBQMAQAAvMep6g;\n\nDEFINE LABEL 9\neJxzZWBgyBGrC12tFBMyWftRhKPRmnhL0zXx303fJ8qrT55UqLBz7WFJ88ONUlVHIzV9dlc49u8FamEI\nCHBunxe2t8myYG/Trfw/WY65XXErsuaHLU6wDt4cNT/MPsw9Znnw+8Qzgbcyjf0/V5f6pXaU+tXN+uh/\nbilbyJ/1f8OatoinLtnqmBuyCmTe9Rr3GCBeGFyXu0ewnmW+d+OlqtbmW5mTuq75s/W/dt8z6bX7u+lb\n/CLnd8WB1GufeBSRezwm5ONR6+Bd2wp9sjdM9p2xOibk0fL3iTpLcssDFwVMCFx0cI7OEqOVe1cmbn6/\nTmvXoc0+uzP2au2qPZi42fhoyCq2U3Wz5p+Z3Tj/TFP+yxNdcVeOWAdbH7rmzzAKRsEIAgAoHIOV;\n\n",
    "size": 15,
    "steps": 75,
    "successRatio": 1,
    "author": "ekx"
  },
  {
    "levelNumber": 26,
    "path": "26-Small-Divide-15.76/15.76.obsolete-FireGoblin.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 26-Small-Divide - SIZE 15/15 - 76/76 --\n\n-- This solution is superseded by 15.71-ekx.asm being functionally same with\n-- further optimization.\n\na:\n    COPYFROM 9\n    COPYTO   7\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\nb:\n    COPYFROM 0\n    SUB      1\n    JUMPN    c\n    COPYTO   0\n    BUMPUP   7\n    JUMP     b\nc:\n    COPYFROM 7\n    OUTBOX  \n    JUMP     a\n\n",
    "size": 15,
    "steps": 81,
    "successRatio": 1,
    "type": "obsolete",
    "author": "FireGoblin"
  },
  {
    "levelNumber": 26,
    "path": "26-Small-Divide-15.76/60.47.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 26-Small-Divide - SIZE 60/15 - SPEED 47/76 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    COPYFROM 9\r\n    COPYTO   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    a\r\n    COPYTO   0\r\n    BUMPUP   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    a\r\n    COPYTO   0\r\n    BUMPUP   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    a\r\n    COPYTO   0\r\n    BUMPUP   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    a\r\n    COPYTO   0\r\n    BUMPUP   2\r\na:\r\n    COPYFROM 2\r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    COPYFROM 9\r\n    COPYTO   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    b\r\n    COPYTO   0\r\n    BUMPUP   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    b\r\n    COPYTO   0\r\n    BUMPUP   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    b\r\n    COPYTO   0\r\n    BUMPUP   2\r\n    COPYFROM 0\r\n    SUB      1\r\n    JUMPN    b\r\n    COPYTO   0\r\n    BUMPUP   2\r\nb:\r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n\r\n\r\nDEFINE LABEL 0\r\neJwTZmBgyDT6U2ujF1gkpZ1Y/EP9bvVp5WPdB5SSpkkqv52voqKzRFVHZau7vsrW7YYr1mQa6SyRNs5s\r\nVTOZ0aFmIjLRw/z4umCLbxszrUS3MIyCUTAKhhwAABpVHUU;\r\n\r\nDEFINE LABEL 1\r\neJwTZGBgEIlaa5QU+SQrKXLFmrCIGavlo2d09Meuq/gcV1DCmRhYlJcUWFSZXFDyIlW78Uvase7ZaRNm\r\ntqT8XSCa5L1MK+btfIZRMApGwZAFAHlqHpY;\r\n\r\nDEFINE LABEL 2\r\neJzTYmBgeKzLuvmxrsziGyZPsrZbvol8YpsQwO651aXJZ6sLUJqhKaSiLSmxoi05U7txQm5/2Zc8o4KX\r\nuVKxitkB/v2phr5/wzOSZoYtSzMNjWwxDVWexBF5b55pbNaKvKRvG2enqWzVyVHZeiLr20aQWTETuGMm\r\n9+YH1nY7+l1tdvRjbOgL/lb3JnJF/dXM6A7txtruY90dPSITH/YsmLWlQ2dJTXPUct0a72UMo2AUjAKa\r\nAADnT0ip;\r\n\r\nDEFINE LABEL 9\r\neJwzZ2Bg+KGeEBBnGeBfap0fGGcpFVtiHFgkqXxvHrOi9VJmxawVtmadq4DKGJ75SjeYhvLUy0efrfoc\r\nl1i8IeFJVlKiZTxn4pvI5hghby9/Ie/F7lpxdm7CeU9drZqOeIlM/OO/frZ3eNTy5hjRLRsSWDdfSj6+\r\nTjtlxmqQeQwFlSuX5xtPViyeX+5XLhVbXf0msqZZyQckZTjH0PfnvISA+sW/o54s8UzwWKac/2sZT/2v\r\nZefm3lzsvcxmbtTyjJnWS39OezvfemrjjLrJx7pVJ88vD5r+Oyp2xt6wjJl7wxhGwSgYBQQBANe1W/Y;\r\n\r\n",
    "size": 60,
    "steps": 36,
    "successRatio": 0.19,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 28,
    "path": "28-Three-Sort-34.78/31.123-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 28-Three-Sort - SIZE 31/34 - SPEED 123/78 --\n\n-- albertferras's solution - a redundant JUMPZ + swap without tmp.\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    INBOX   \n    COPYTO   2\n    COMMENT  0\nb:\n    COMMENT  4\n    SUB      1\n    JUMPN    c\n    COMMENT  3\n    COMMENT  2\n    COPYTO   2\n    ADD      1\n    COPYTO   1\n    SUB      2\n    COPYTO   2\nc:\n    COMMENT  1\n    COPYFROM 1\n    SUB      0\n    JUMPZ    e\n    JUMPN    d\n    COMMENT  5\n    COMMENT  7\n    COPYTO   1\n    ADD      0\n    COPYTO   0\n    SUB      1\n    COPYTO   1\n    COPYFROM 2\n    JUMP     b\nd:\ne:\n    COMMENT  6\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE COMMENT 0\neJyLZmBgCFbcFs2krxCb7Jsdkz63IjzyYEX47vs+US8+28cDpRlmWf1fMN3cdukTM8EVesazVt81cNrI\npH9nN5N+6v6FBoeOcprqHI825z162Jpj5y1bg1XH7V5u03aQOlDrdOjoD9dpJ0BmHIx4dwhEzwhfvswr\nwmvB0egH8zISmmc8TnboWJ4sW8WRFFa0Lf5sXkqsRJ55pHnB8uB/5SD1FTWyVUlV87ZL1OWte9DwdNX+\n1uqVhzturP/XkbhZpPvObpFuqQMbOnWOK7fbnZNvOX5xc43hZctKoYsCFVmnQfq/zM+/DqJ3zPdf47bI\nf03CcsEV/1d0LJm/6sG8W6vqejauVGxrXXq0fvLCqobKOV87QGoLDh9bwbHfYJXmrt4NxduCd8zYYnlo\nxpbjF8235V/327H2dsbe0IeRB0MfgtQy5mR/Odv45fuyBSt/tG59/mfX+cB/Ky6k7v92Xnvet/M/s0Fq\nxPO+xJfnbPvMMApGwSAEADF9rTc;\n\nDEFINE COMMENT 1\neJwLZgCBDp7VnMv5CiRteW/qenFMdtFm2xQzlb2/j0XUc6mT5L5Ls4SLPj8V+v8/XRSk+ona0foHyh9r\nXsvY1JhKLqs9KejQ0cb9YN4zzsTNsVx3drdxSx2Yw7v48DYh3qOWMibbNsvPWv1J6WT3UuXMRblqHDvN\nNDfse2gsdQBk1n/vd4dAdKtHXc86z9zWL0FVDedDbGpiwt8UHIwITFsX+SjCPHKyr1OQs9NsL1a7SntW\nO5D6SY1tQWcbldc3NHUs4W1NmTarfc+Eu70i3bxTjXvjpxdOfDOTZ86bmTHLBWcor185WXTL5/r6rSB9\nKssl8v6vyKi8tSq6bs72uX3PNsstFltdtKtspSXYHfIPk3Mz7ybnXr2SUVlw+WPNigvxXZPOPZhXf375\nsosXldf/vWqybeGtedt/PTq1BaQ+bB/L2t7dRbsWr73wkmEUjIIhCAAzD5TQ;\n\nDEFINE COMMENT 2\neJwrYWBguKMQl3hF6mosi9DV2L/cX+KVuOakFnDKVq3mVGzTFHjRGyayZ0Kf4u1J0iq/pqxQ+79AXn3n\n2gbVNZsY5VP3swh5n+Tm2HrqI9O0E/ZMh45Ksbw7BDSSocaoIGOhwdH6uwYvencYzVq91Pj7xskmolue\nmIlueWHZu6HUpnrlB/u5fSGOslUTHLcsrHViWbvM+fvGdZ6Jm+f7flrKHvSvHGROU+rmiomJl6o0Y/Ub\n/aIdOooj1Sa1Rhyc8yoyb11K7J3d9vG/94Ymuu2VSwneMSP901KLzCeNwtmCKzbnrNkUlCe6BWTG+xqH\njqSqP89Y63NblzZUNXxr+ljj09Fenda7o+Vu78luwY7lyzxa/dcE1+WtA6l321Ss9H/FFZONM6/Grpxc\nWhI+0aFj6YTw2eETldfzTp195fCM0Ifpc1/fB6kt3na/9N7aS1XWK4/Wr1uW22q+7GuHyvL1U5nX+K+R\n3Qgxz+Sw3GL3Q983GhyQOgDiM97UjSi5lrr/9bW9O21v5q1jvfNpqdEDrwWCT/8vePOsY8nN59Urk54r\nr/92/92hz3emnWC86X0y6Xr5MZBeppePIu6++hJf82ZdjtEHt71GH8TvNry3eq3/NvKt9qv3rxlGwSgg\nEQAAymnhAw;\n\nDEFINE COMMENT 3\neJzTYWBg8IvOtz8f0ujW6V3ireCeHpDtXBGu7VCbnGyrVdphXddjZXN7Uo9d+Gx95/8LrnktX6YYfmwF\nUBsDR9Fr9+bStqD9re3VDycUTuzunjo/rt12qUh16n6QfMRCd1XFJWVz1y372rFxpUD9l/VTypo2eZYz\n7MxtFds9t+/EbsnpJ3ZvWbhgl/+aozvWbGrd+nKb7MZ52z+uqd+asPzGepAZj6Zs2Mfb2XV2f2PynSvV\n758yjIJRMAqoCgCaNFM3;\n\nDEFINE COMMENT 4\neJxTYWBg0Ix97e4XnR2zLpJ9wrrILQuBQgxC3hXhy4N3p2+Lr+spSGueARL74Wox83asT9TXpKhQEH9f\nqWqmSHVBRnd3ci6IX1AW1D+v6/YkEHvV5m3R81ddjTVftjLh/MLnKXZzknN9Z3iWx0+f2RQ/3bi3Y4bk\ndNHZmYuc5s9a/XvpqS1f1q/Z1Lv76SqGUTAKRgFdAQC6Lz1C;\n\nDEFINE COMMENT 5\neJwzYWBgCHFcYb7M+dz0h87nDzx0Nlj11O32JHPPVZ1vffQb2YMyKhXDPcs7o/+Vn4izqbmQYjGzKTVz\n0dSU6pWhiWs2acbu3WkSJnWg0TXiCAMI7LwaW7ZyYWHjoqP1IfP2TNCeGz67cg7L2vS5JtsmL1Tf3blC\nfTf7+vqtjzZ83zhjy/JlvbuP1uvuXViYsbc/S2rfzKZd+3nmLD/waenMI3t3vjq2YV/m2cWHmy8tPgwy\nmqc0PeBQRVccY82c1C09zC36E7rbt/S86E3q+jXFqDlxc1f1tBMMo2AUjAKSAAA2e2fP;\n\nDEFINE COMMENT 6\neJwLZWBguMC+T/EGr7vqIek09ROrJ6nEXWnR/P//gAlQikFe/WT3ZnmRbhfRCZNvC4TPZuSfOr+Lr2OJ\nH1/91s38bnvFBS0PRYlHHFkjGXEkSTZ1f41S4uZvqq5Tvqk+XeWh8e7QP+1pJ7r1vE8qmB86CjKPyV44\nSdLxVuYBj80VX4IU215F1vUohhdOPOK9c+1TN9EtbE7nD9x1aDkIUqsZ27uhOPLO7sbQiCNV/vnX3/qs\nvQ0SP1RxJKy9wrwgrtyh43Fx0a41ZXnrXlfaLu2r+7/Apclrwa/WjiXtHXnrNnRy7NzQmbo/umXaCb0G\n75N9eW57lxRw7ASZMX2KVun/Gctqd65vnpG+dur8H4vqtzLNsTykMOXKGZA896Y1m6ZsnLf9zLrU/ZVz\nLrwEiUVd3NGy+eTcvqkHtyx03q+8vm6/1IELB1ectzimcmPSucZ7ltde39e7m3SHYRSMgiEEABxin8Y;\n\nDEFINE COMMENT 7\neJwrZWBg+KVR4r1ZXtPnueRfPw7RtiAHIZ+oiSKBae4STflqsn7NInJ7JpTIpExrluCZ48f3fwEDQ+xc\noDYGS52m/KtaYUVmmjObzDTXT43Tylzko718WalOzPJK/cuL9Yx/Tckz02+cbi6Rt9Jsbp+Cufa8Fgu5\nxSpWtks32tgu3WpfNrfWac+Eh87mBSDzYsLfFHCHchd/9NdvTPY17t3os2VhoN/yZexB1SunhFSv/BFq\nu3RG+KJZxZGrOtdFLqstjmw5CNLXlKpV+jPVuNc9dfmyXUktBxcnhD7kz7BdejT7X7lmrnnBkgKXbJci\nibyLJVPK3EsF6t1LHTp2Ff2a4pDvtaArO2a5SVrMcpA5DZM4FXf0/1Hd0qOjL9jxw+lJ88oEvQa/5r66\nWauD66ad2F7v/gyk7s3MKWVrp2mVrpx8qaphkkA9W/+vKSF9Xgv6+/zXPJzwcpvn1Hnb46ebbMtesGjW\n5IV+zQ8XdLfLLmye8WNR3jqQ/j9bU6YFro69AGLPPLLL7uehD8Hch/qzlh94umrmEcnpR08E9YedE+n+\ndl6k+/GFoH73S14LMs/mrQs6/XIb40n13euPue1tOzpxz+rDL7eBzNC6xWC0/Y5slcRt8bupt96/ZhgF\no4AEAAB+bdDb;\n\nDEFINE LABEL 0\neJwTYWBguJElnOScZJRiHmlecD5EoD47+FpbXVBQ/5cgnjmPgqfObwzdslAoesvCBbFeC6QSw2fLpbBP\n4M8oLVmfWZssnrdnwpKCsrm7iv4v+FvxfwHDKBgFo2BIAQDYniOb;\n\nDEFINE LABEL 1\neJwTZGBg2JzDancyz2AVS/656dvy5/ZNLOxudy9lbkmt3dFytlGk26wtZZpZW/jsaS1yix80zFptW9O7\noaDMaeO3ohvrOYp2rmUYBaNgFAxZAAA/ZR+R;\n\nDEFINE LABEL 2\neJzjZ2BgOFXH5WVZucnfO8Mn6nZsbfKqsLN5X4I+1uwM+trRGCo5nSFGbrFJ2qzVHEXK6/UabqyX6FNe\nf226/xoGJGCRuTv9aHZ8F4jtUH8kLLjOrxnElpk4PbJhkmrm90l+zb4zapNvzXoU8WHOh+DsBdbBbot0\nIxSX1CYnLGdumb18bh/DKBgFo4DuAAB3ojb/;\n\n",
    "size": 31,
    "steps": 126,
    "successRatio": 0.17,
    "author": "Mygod"
  },
  {
    "levelNumber": 28,
    "path": "28-Three-Sort-34.78/32.128-albertferras.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 28-Three-Sort - SIZE 32/34 - SPEED 128/78 --\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    INBOX   \n    COPYTO   2\n    COMMENT  0\nb:\n    COMMENT  4\n    SUB      1\n    JUMPZ    d\n    JUMPN    c\n    COMMENT  3\n    COMMENT  2\n    COPYTO   7\n    ADD      1\n    COPYTO   1\n    SUB      7\n    COPYTO   2\nc:\nd:\n    COMMENT  1\n    COPYFROM 1\n    SUB      0\n    JUMPZ    f\n    JUMPN    e\n    COMMENT  5\n    COMMENT  7\n    COPYTO   7\n    ADD      0\n    COPYTO   0\n    SUB      7\n    COPYTO   1\n    COPYFROM 2\n    JUMP     b\ne:\nf:\n    COMMENT  6\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE COMMENT 0\neJyLZmBgCFbcFs2krxCb7Jsdkz63IjzyYEX47vs+US8+28cDpRlmWf1fMN3cdukTM8EVesazVt81cNrI\npH9nN5N+6v6FBoeOcprqHI825z162Jpj5y1bg1XH7V5u03aQOlDrdOjoD9dpJ0BmHIx4dwhEzwhfvswr\nwmvB0egH8zISmmc8TnboWJ4sW8WRFFa0Lf5sXkqsRJ55pHnB8uB/5SD1FTWyVUlV87ZL1OWte9DwdNX+\n1uqVhzturP/XkbhZpPvObpFuqQMbOnWOK7fbnZNvOX5xc43hZctKoYsCFVmnQfq/zM+/DqJ3zPdf47bI\nf03CcsEV/1d0LJm/6sG8W6vqejauVGxrXXq0fvLCqobKOV87QGoLDh9bwbHfYJXmrt4NxduCd8zYYnlo\nxpbjF8235V/327H2dsbe0IeRB0MfgtQy5mR/Odv45fuyBSt/tG59/mfX+cB/Ky6k7v92Xnvet/M/s0Fq\nxPO+xJfnbPvMMApGwSAEADF9rTc;\n\nDEFINE COMMENT 1\neJwLZgCBDp7VnMv5CiRteW/qenFMdtFm2xQzlb2/j0XUc6mT5L5Ls4SLPj8V+v8/XRSk+ona0foHyh9r\nXsvY1JhKLqs9KejQ0cb9YN4zzsTNsVx3drdxSx2Yw7v48DYh3qOWMibbNsvPWv1J6WT3UuXMRblqHDvN\nNDfse2gsdQBk1n/vd4dAdKtHXc86z9zWL0FVDedDbGpiwt8UHIwITFsX+SjCPHKyr1OQs9NsL1a7SntW\nO5D6SY1tQWcbldc3NHUs4W1NmTarfc+Eu70i3bxTjXvjpxdOfDOTZ86bmTHLBWcor185WXTL5/r6rSB9\nKssl8v6vyKi8tSq6bs72uX3PNsstFltdtKtspSXYHfIPk3Mz7ybnXr2SUVlw+WPNigvxXZPOPZhXf375\nsosXldf/vWqybeGtedt/PTq1BaQ+bB/L2t7dRbsWr73wkmEUjIIhCAAzD5TQ;\n\nDEFINE COMMENT 2\neJwrYWBguKMQl3hF6mosi9DV2L/cX+KVuOakFnDKVq3mVGzTFHjRGyayZ0Kf4u1J0iq/pqxQ+79AXn3n\n2gbVNZsY5VP3swh5n+Tm2HrqI9O0E/ZMh45Ksbw7BDSSocaoIGOhwdH6uwYvencYzVq91Pj7xskmolue\nmIlueWHZu6HUpnrlB/u5fSGOslUTHLcsrHViWbvM+fvGdZ6Jm+f7flrKHvSvHGROU+rmiomJl6o0Y/Ub\n/aIdOooj1Sa1Rhyc8yoyb11K7J3d9vG/94Ymuu2VSwneMSP901KLzCeNwtmCKzbnrNkUlCe6BWTG+xqH\njqSqP89Y63NblzZUNXxr+ljj09Fenda7o+Vu78luwY7lyzxa/dcE1+WtA6l321Ss9H/FFZONM6/Grpxc\nWhI+0aFj6YTw2eETldfzTp195fCM0Ifpc1/fB6kt3na/9N7aS1XWK4/Wr1uW22q+7GuHyvL1U5nX+K+R\n3Qgxz+Sw3GL3Q983GhyQOgDiM97UjSi5lrr/9bW9O21v5q1jvfNpqdEDrwWCT/8vePOsY8nN59Urk54r\nr/92/92hz3emnWC86X0y6Xr5MZBeppePIu6++hJf82ZdjtEHt71GH8TvNry3eq3/NvKt9qv3rxlGwSgg\nEQAAymnhAw;\n\nDEFINE COMMENT 3\neJxTZ2Bg8IvOtz8f0ujW6V3ireCeHpDtXBGu7VCbnGyrVdphXddjZXN7Uo9d+Gx95/8LrnktX6YYfmwF\nUBsDR9Fr9+bStqD9re3VDycUTuzunjo/rt12qUh16n6QfMRCd1XFJWVz1y372rFxpUD9l/VTypo2eZYz\n7MxtFds9t+/EbsnpJ3ZvWbhgl/+aozvWbGrd+nKb7MZ52z+uqd+asPzGeoZRMApGAc0BAGiMSL8;\n\nDEFINE COMMENT 4\neJxTYWBg0Ix97e4XnR2zLpJ9wrrILQuBQgxC3hXhy4N3p2+Lr+spSGueARL74Wox83asT9TXpKhQEH9f\nqWqmSHVBRnd3ci6IX1AW1D+v6/YkEHvV5m3R81ddjTVftjLh/MLnKXZzknN9Z3iWx0+f2RQ/3bi3Y4bk\ndNHZmYuc5s9a/XvpqS1f1q/Z1Lv76SqGUTAKRgFdAQC6Lz1C;\n\nDEFINE COMMENT 5\neJwzYWBgCHFcYb7M+dz0h87nDzx0Nlj11O32JHPPVZ1vffQb2YMyKhXDPcs7o/+Vn4izqbmQYjGzKTVz\n0dSU6pWhiWs2acbu3WkSJnWg0TXiCAMI7LwaW7ZyYWHjoqP1IfP2TNCeGz67cg7L2vS5JtsmL1Tf3blC\nfTf7+vqtjzZ83zhjy/JlvbuP1uvuXViYsbc/S2rfzKZd+3nmLD/waenMI3t3vjq2YV/m2cWHmy8tPgwy\nmqc0PeBQRVccY82c1C09zC36E7rbt/S86E3q+jXFqDlxc1f1tBMMo2AUjAKSAAA2e2fP;\n\nDEFINE COMMENT 6\neJwLZWBguMC+T/EGr7vqIek09ROrJ6nEXWnR/P//gAlQikFe/WT3ZnmRbhfRCZNvC4TPZuSfOr+Lr2OJ\nH1/91s38bnvFBS0PRYlHHFkjGXEkSTZ1f41S4uZvqq5Tvqk+XeWh8e7QP+1pJ7r1vE8qmB86CjKPyV44\nSdLxVuYBj80VX4IU215F1vUohhdOPOK9c+1TN9EtbE7nD9x1aDkIUqsZ27uhOPLO7sbQiCNV/vnX3/qs\nvQ0SP1RxJKy9wrwgrtyh43Fx0a41ZXnrXlfaLu2r+7/Apclrwa/WjiXtHXnrNnRy7NzQmbo/umXaCb0G\n75N9eW57lxRw7ASZMX2KVun/Gctqd65vnpG+dur8H4vqtzLNsTykMOXKGZA896Y1m6ZsnLf9zLrU/ZVz\nLrwEiUVd3NGy+eTcvqkHtyx03q+8vm6/1IELB1ectzimcmPSucZ7ltde39e7m3SHYRSMgiEEABxin8Y;\n\nDEFINE COMMENT 7\neJwrZWBg+KVR4r1ZXtPnueRfPw7RtiAHIZ+oiSKBae4STflqsn7NInJ7JpTIpExrluCZ48f3fwEDQ+xc\noDYGS52m/KtaYUVmmjObzDTXT43Tylzko718WalOzPJK/cuL9Yx/Tckz02+cbi6Rt9Jsbp+Cufa8Fgu5\nxSpWtks32tgu3WpfNrfWac+Eh87mBSDzYsLfFHCHchd/9NdvTPY17t3os2VhoN/yZexB1SunhFSv/BFq\nu3RG+KJZxZGrOtdFLqstjmw5CNLXlKpV+jPVuNc9dfmyXUktBxcnhD7kz7BdejT7X7lmrnnBkgKXbJci\nibyLJVPK3EsF6t1LHTp2Ff2a4pDvtaArO2a5SVrMcpA5DZM4FXf0/1Hd0qOjL9jxw+lJ88oEvQa/5r66\nWauD66ad2F7v/gyk7s3MKWVrp2mVrpx8qaphkkA9W/+vKSF9Xgv6+/zXPJzwcpvn1Hnb46ebbMtesGjW\n5IV+zQ8XdLfLLmye8WNR3jqQ/j9bU6YFro69AGLPPLLL7uehD8Hch/qzlh94umrmEcnpR08E9YedE+n+\ndl6k+/GFoH73S14LMs/mrQs6/XIb40n13euPue1tOzpxz+rDL7eBzNC6xWC0/Y5slcRt8bupt96/ZhgF\no4AEAAB+bdDb;\n\nDEFINE LABEL 0\neJwTYWBguJElnOScZJRiHmlecD5EoD47+FpbXVBQ/5cgnjmPgqfObwzdslAoesvCBbFeC6QSw2fLpbBP\n4M8oLVmfWZssnrdnwpKCsrm7iv4v+FvxfwHDKBgFo2BIAQDYniOb;\n\nDEFINE LABEL 1\neJwTZGBg2JzDancyz2AVS/656dvy5/ZNLOxudy9lbkmt3dFytlGk26wtZZpZW/jsaS1yix80zFptW9O7\noaDMaeO3ohvrOYp2rmUYBaNgFAxZAAA/ZR+R;\n\nDEFINE LABEL 2\neJzjZ2BgOFXH5WVZucnfO8Mn6nZsbfKqsLN5X4I+1uwM+trRGCo5nSFGbrFJ2qzVHEXK6/UabqyX6FNe\nf226/xoGJGCRuTv9aHZ8F4jtUH8kLLjOrxnElpk4PbJhkmrm90l+zb4zapNvzXoU8WHOh+DsBdbBbot0\nIxSX1CYnLGdumb18bh/DKBgFo4DuAAB3ojb/;\n\nDEFINE LABEL 7\neJwzYGBg2OovZPnR/0iYmJ/BKiCXYZ4tW7qx28qEZF/7+OXB9vEx4XGJftGBaSC5ptTNFRdStizcl3p7\n0pX0a21zsmxqUnPvl/blaZWGFcpWyZfktq4ps5j5vExu8fOytzPbK0S6GWsyKoPrltVmNuS2TmsJn72/\nVXAFyKysCaUl3yctX2Y02fJQw6TGe1yTTLYZTZ7bd2lKdF3RtCllVjPfFLDNP5vntqi9+sDSRbMOLN2y\n8PKST0sbFxmsEp39dJXClE9LGUbBKBgFFAEA3eRXIA;\n\n",
    "size": 32,
    "steps": 138,
    "successRatio": 0.09,
    "author": "albertferras"
  },
  {
    "levelNumber": 28,
    "path": "28-Three-Sort-34.78/62.73-AlanDeSmet.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 28-Three-Sort - SIZE 62/34 - SPEED 73/78 --\n\n    COMMENT  11\na:\nb:\nc:\nd:\ne:\nf:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    SUB      0\n    JUMPN    i\n    COMMENT  1\n    INBOX   \n    SUB      0\n    JUMPN    h\n    COMMENT  8\n    ADD      0\n    COPYTO   2\n    SUB      1\n    JUMPN    g\n    COMMENT  10\n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 2\n    OUTBOX  \n    JUMP     b\ng:\n    COMMENT  9\n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    JUMP     c\nh:\n    COMMENT  7\n    ADD      0\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    JUMP     f\n    COMMENT  2\ni:\n    COMMENT  0\n    INBOX   \n    SUB      1\n    JUMPN    k\n    COMMENT  4\n    ADD      1\n    COPYTO   2\n    SUB      0\n    JUMPN    j\n    COMMENT  5\n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 2\n    OUTBOX  \n    JUMP     d\nj:\n    COMMENT  6\n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\nk:\n    COMMENT  3\n    ADD      1\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     e\n\n\nDEFINE COMMENT 0\neJzTYWBgWM6jGJHBE+L3hNfaZj5/rtFNwT4ZAdFSLm7x79zHJPby/5aZrVoul6mfozQ/DKic4SW3kdlu\nGSMzELtD/6TEASNvKRXbFJ1HtloGi2z1jB2NpgeA5D76t4kphDmL9MWwiDIl+ssyJd5TvxD92uBdgLXN\ns+Amx3lhPJ73wqYH6AY+imh335B03bEwGaQvP8Bd3CDAX3anz3vjf15tLq4es4NB4rP+qkUzjIJRMAqo\nCgAAGzfW;\n\nDEFINE COMMENT 1\neJzTYGBg2MNiL5jBYy8Yz39UVFaARzpWYLrSEt7F2mbsz3WFRTL1z4kWmvKKfbcUEG1yfMg32VePSzKo\nlF0yCKiVwYLtrLQFm7MTiL1S2V82RVVQ7o+xmWWD0V7bEO2zniDxaVqTfUH0fbsQP2bPDWy23t+5rX04\nJKx91HT3eOsZ7/FucrT2aXMBqeF2s7Zx8DKzBLGn/tczZhgFo2AU0BQAAD5LJ8g;\n\nDEFINE COMMENT 2\neJz7x8DAYGbmL8ulr6g1W+O75TKVPq9lKpN9b2mE+B016PP67KeoxZD0nbst3ozbxuSoc6OUddYT3sdt\nS3jNpl4U2TnNRy+zOyZctNaw3r147tZHEZN23gqasT0icMfqW0Gb07pKJSKXtIdHFk48Wn50ft3Ko/NN\n79TNev81t+/5j8dted+m172+fzBvx+rn0XfzIgIX2cqGPrLVirP15ig5Xzy52mW5ZEPQxdmNE172VzS/\nY8jrfv09ffGjFTFZJ/q8Eue0uUTnx4RwxMs2H4tfspWx0v2va/X//0DvMOgt+v//xNKmnyZrI24Xrsvc\neXbx5OpjfWc98zLcxc/bMkDBpt27WD8f0A0sO2SSdm3102zneU+zf0zVz3je6ZIwu/FZ8OO2/IAtk18G\nnVwEUi2fpxihGiLok2B30u2qFo/nZvnpAfukFSO+yq2IaTPIjJV2SAjf4tfntSSkzm5e2GJt5VBJlfUB\n7uKuHpW8XuYwO/tVzdhLuRgYJqhA+DbyzkxNwieZIbwmJhDOZMyH8s3YGRiqWPfyMzAEaUNEJE3VeO0F\nZQVyWViYGBwYGHa6QMTP2+xnztR35oPwlIH0P2ZRRQaGi1B9H6X/sLxndWA+KsrA8FoDIsbvoselqCUg\nWsq1RhwishRITxFuE8vlsrZhYNBMhIjuC1rPqaZ7AKpmliQDgwVblzsDw+doiMjxJF6xXKMpehCeiykD\nA4+et1S/aG4CA0NPH0TUZMIbrqb8HKU+mS1QF3EB1Ydp7eX/LJ9rxMi8osuZ6X3/NzbZ5lUGEPlOIP1D\ndj7QrdXJEJGoSBkxCGuZFANDAeclHwYG4UKISGveZeH3xi2Sl+SCRIzM3nDNDr4pWGd3Uny26kU5iIoN\nwND4KndSIkXViu+MFkSsEUi7Sp6Vvim4WFuDZ6/tF/bpAX9YPqfsZ+4q/cPSVTpF+KQbq+QaQyep57ot\nknrG6zmNUhgY1ldCdMeUf2HfkOQukWt0VA0i8hYYq6fFPpsp880OZmD4VAUR3dHZLxoTwm4P4Yn7MzDc\nsY9RE9eaH8bAsG0ZRDS1RUZjvsZFawiPCegzVw8z7jKzz2brFD8D7fw2GyIT3rhM5bXBFkcIzxsYC9Md\nGYSaDc0sbwuE1DAwcM6EyFi2P+MpTWOQPul2S2OxtqPRWekNFpW8e40lVSI1OdwapY4WMiABALUlMoE;\n\nDEFINE COMMENT 3\neJwzZWBgKOCcH/aMx8xSVPio6EQRd/HdMvb22+S04oBSDIv4WJw3KrA4g9gTdK4pbrB4pPXG8rXBUYNb\nQX66atEg8X4XDokpUe7iHPEnJdriz0onheYaffPdYbXTh8FBNpzBISSqzi4kisdTIUw2dKP/6zhb7w1J\noU6laSC9rR6zVQ96LtZm9Fpj6Ow5PQAkdr1gupJZ7Xtj+bxHESB+1WQe6X8Tz0pHtafoKLeUWjxpdnZK\nbvH2iG2b7CvQPTu4ZlJMyLYpEYEgtWL/n+syjIJRMAqIBgB9TETo;\n\nDEFINE COMMENT 4\neJwLZGBgMObg8TTg1DNeznNS4poAAxi8EmRgaJdQ1GqR3GCyW+asJ0hsE8di7ZPij7RA7GlaR0Un6BwV\ndTE8K21p6i8baz9bdb5dguYXMz3jP8Zmlv+N9tqC1OUHFLK3JGxgY0gy47ZPOijUksAhMS1SVNE9PkLZ\nJllW3SpFy6AmudCUKbHS+l6Yt4d2EA/YrpVBVnyqISclFMI+m4H4u2VOlkwRPlnykC+kZjlPTNNL7tIp\nGTx1s57wui8UFb60ol0iZJWRwuSVILV1xk35epbOBfVe/RW23pOr/3lNr9tgwbEI7O7IDUn7ktbEb0hf\nE78ia0PSi6y92TmZ7sWNibMbP6SndrzKXNP7KrNw4of0PzPsk9wXdsZ5L0kP5l0K0hseuSVVNGpnxuWo\nkyWXo35MBYnd/GttwzAKRsEQBgDb4XFe;\n\nDEFINE COMMENT 5\neJyzY2BguCzsLv6Et00sl6tLsoAzRKGAc42hHlednTZ3m0sq71nPcCFRf27xa/6NUiF+QOUMT1XcxWU0\n3MX/GEuqFFjEqH0yV9SqM8416tC3t+/Wc3ft0z3pBlJ3xSkhPMCly73VY7F2kf9BodzAkxK3w3dYXY66\nFwqSZ/Y86BAfdtBhWmSdHYi/L8ld/EcKh8St/AjlQxXzNQ5VPNc9Wq5nrJjb5wWS12zayx/UtYPHaYIV\n387JB4VKpp6UMJp2TbF8ymLtSV0r9Dz6MvV/TzIy+zG5zm7fRA63iI57odqNCeEgvanNDELKLUdFF7Vc\nU1za7O3BMApGwSgAAwDua1T3;\n\nDEFINE COMMENT 6\neJwzYWBg+MNyK6iAM0FzEd9BoVgBd/HLwvfUe8Tq7P5Kv44DSjMYc7i7+oq5u4LYSmohCvy61xTv2+Ua\nHTKUDQWJTYsMUXgWfE1xi5+iloXvCr0qn/fGVT57bdcEzg6eFpmb4JS4IQmkLifznnpt1WJtvYbXBvsr\n+7y8S+eHBRaviZ9auCYeJC/c5SyybvpBofAFbWITF3lLCS2SVBFfoKilNXOLufgCa5urC+rsri5ocxFf\nwOMpP1cyyGKKWvSxvsJkkN5jfYJytpNE/RlGwSgYBSQBALG9RkE;\n\nDEFINE COMMENT 7\neJyzZ2BguMf/nZtZ6g/fZ/km4dVK7uIvlHmkl6lcklumMl/jhbKarqn8BhNmqUJTU/k/NkYKbS6FCn1e\n2+RmB1fKzg/jkNCKy+XSSwQawzBTsE1sPv9e2/n8Ad4zBZdEgsRYJV8bXBQpNAWxLU39ZVVsZdUDXPSM\nLzobmRlatLkcNbjmD5Kr8tGKexC6xXxa5HQloeijov4xHBKb0yIC12VsSALJPw456SYQc9azLonHE8RP\ny76l4l36SMu4Ts/Yuvq7ZVwexJzfk9rEjvXxSF/rkFW/05ZrJNfm7HSnjcczoHuy75H+Sz4WU066gdTN\n+ptrxDAKRsEoYAAAkjRR4A;\n\nDEFINE COMMENT 8\neJxzY2BgWM/JI80tflKiUcpbap90n8xf6Qhle+kUHV6xDSYzBT+bMUvtsKqX/mNjK+PuWi8d4H1ONCZk\nOc+90O1sjyKA2hlWcQvKveQ+6gxiT9CZLM+lH6G8yVxR671Fio6epZbBJvPPZt9Nd1hN1u7zAqnhdnse\n7eF+1rPKR1Llp0+fzBa/JuGP/oXs7wLes2YF8UgvD+5yB6lz8LK3L/K3tgGxT4qbTfUXLZwYK1A48Qmv\n2dR3nCGrDDhX7FjPqbf3GU/ZIS9x+5P20nUnQGrZDTZMWGXFMEfNpm1Bg5HsRpAYn2vVUVvvtgW5gTFN\nWUGzG58Fp3bEhx2cMy8sdw9I/qeP95LUEO8lIPb1fzEhDKNgFIwQAAACWl2E;\n\nDEFINE COMMENT 9\neJxzYGBgyOBpE4sSZBD6oFAnkKPEIKSlzCKqpSwot1Fhvoa5XKb+X+lco5PiG0x2ym4wMZU3MiuRZ3He\nJnfW86DUvVBhkczYAs4VMUBjGJT5TkrE83NIxAp0SUoIyYaCxPx0/WUdjQTlsq0kVVZYx6ip2Shqqdmo\n6WZYZ+rbGTM4NBu6u4LU5QayiJ5xlVQJcFmsLejy3viM615bW+9r/gYBCeGqIQnh8WEQ83hjb6kci7+n\nnpadoqOY+9ogMfe98ae0Pzb2SRxuIPmzJSF+hyoy9f9Xhij8qRKUW9tQaf28qc/rTltqFEj+aHmf16Y6\nHk8Q+/o/M0uGUTAKRjgAAIuVS/8;\n\nDEFINE COMMENT 10\neJyzZmBgOCnuLXVRhEf6I8d8jW9smfrb2TaYFHHU2WVx83jOERD1Z5CeHgBUxnBX/Z56pOY99TpjPeMV\n1t8tV1gzOPw3CvEDyXG6n5Vu9fCWUg7lkQ6J8pcVip4sHxQ9W/VxSK7RxGhrG5/YJscTcSF+XnEJ4f4x\nK2JmRuQmFPm/TwTptfZJ0Nzuq2WgGzjZVyP4UQRI7G3GYu1l2Sk6X2r/2HyvaXK8VBQTAhKXa8uMndNm\nby/RMV9DuOukRH+3uzh3L4cERx+P9IdpQDfPFPRZNkstGqR2SieDw7YpBx1A7Dt/jMwYRsEoGAUYAABe\neU13;\n\nDEFINE COMMENT 11\neJyzYWBgyFFydvqgwOJ8UOqav7/ohiQJoZMlMwWfd94U1Os/Lea9BCi++rO87Ma3irIbn6pcW52o1r9M\nRsN53mwN6xkL1N73aylr9eyWyeyOEtwyGWgcw3+jNpcNFnV20Q5/bC46H3TgdnN3bfWICDzoGVDJ7Lmk\n/Yyr9YwrTm0LbjqcXFRgwbHol8nemTYmpVPKzDK7V1k9bku2fdz2zdd+Nsgsvt3fLSsObzG/ee67Zf8l\nI7N7Z7w9Ph4tTTu/S2kLSP7D3T827G+/Wzq+32tr98HZye4Dj2fb29nBmQ9K0zrefE+v/vi4zeaj0aQD\n761nvL03fQ3DKBgFowAFAAAbNG4+;\n\nDEFINE LABEL 0\neJzjZ2BgeJRz7nJkgd5entKd0wrqSy3eNOy1vdeqlzirfWdGT8/zzn0Tzy3Nn+58Rmtm/xWgcgb2cud5\nfD1NcxlGwSgYBUMeAACrzxtW;\n\nDEFINE LABEL 1\neJyTZ2BgWJZdaR2dv8X8fb2R2ZkeBgeHid4eFlNuBZVMTY36PLUpf8tUjpKdk6fXHetb0j6nbcOE9fWf\nJwkWf570v/LzJL0Gs6m+PV2LW/qnr9k3ccWOfxML9zNPsD8p3HXyQkaTz6W0bN7LP1LczwOtYbhU5Owk\nWPxj6tVCte2RBQdPMYyCUTAKBhwAAK7aPPU;\n\nDEFINE LABEL 2\neJyTYGBg4OirtO7qNTIL6E7ReV9/UqKipk3saHmb2Ox8f1nz1EdabfGFptMijzo/C34UsTLoc8rKII4S\nici2BQxJDKc2p/FejsubfJ2xcvJ1w/pzlx+2OJ/h6NPadaR/ydZ/E0NWMYyCUTAKBjUAAI5fKy4;\n\nDEFINE LABEL 3\neJwzZWBgyA08V17lw1Pu6ypYJeYUUS/pmNox3XFNr6CL9QwHL5b5L4O6FiuEXVoxJ/zeRtnwx1t++mw5\nyOy580isfdXRDGv7k0AjGLziBKva4kVrGxM/T9LPYDiVlq20JSWnavrcvNQO8cINEyYX2c/2K1HawlJR\nddSx8s+x6mq9vZpNEfUgvfsmyjY7TDw6/0i/+WG2fudf7X0rnrn2919p6V+y9d/EulnfpqzoejZLtDZm\nXkjNjfnXaicvnN3ov1itk3dJ4cTuJZdWzJw/f5PujCVbQWZtm5K5k2EUjIJRQDQAALLoYCY;\n\n",
    "size": 62,
    "steps": 75,
    "successRatio": 0.1,
    "author": "AlanDeSmet"
  },
  {
    "levelNumber": 28,
    "path": "28-Three-Sort-34.78/96.52.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 28-Three-Sort - SIZE 96/34 - SPEED 52/78 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- The input SHALL consists of 4 tuples, and the first 3 should be in reverse\r\n-- order, the 2nd should be in order.\r\n-- Heavily based on 62.73-AlanDeSmet.asm.\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n    OUTBOX\r\n    INBOX\r\n    OUTBOX\r\n    INBOX\r\n    OUTBOX\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    i\r\n    COMMENT  1\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    h\r\n    COMMENT  7\r\n    ADD      0\r\n    COPYTO   2\r\n    SUB      1\r\n    JUMPN    g\r\n    COMMENT  9\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    JUMP     a\r\ng:\r\n    COMMENT  8\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    JUMP     a\r\nh:\r\n    COMMENT  6\r\n    ADD      0\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    JUMP     a\r\ni:\r\n    COMMENT  0\r\n    INBOX   \r\n    SUB      1\r\n    JUMPN    k\r\n    COMMENT  3\r\n    ADD      1\r\n    COPYTO   2\r\n    SUB      0\r\n    JUMPN    j\r\n    COMMENT  4\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    JUMP     a\r\nj:\r\n    COMMENT  5\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    JUMP     a\r\nk:\r\n    COMMENT  2\r\n    ADD      1\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\na:\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    i\r\n    COMMENT  1\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    h\r\n    COMMENT  7\r\n    ADD      0\r\n    COPYTO   2\r\n    SUB      1\r\n    JUMPN    g\r\n    COMMENT  9\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n\r\n\r\nDEFINE COMMENT 0\r\neJzTYmBgWM6jGJHBE+L3hNfaZj5/rtFNwT4ZAdFSLm7x79zHJPby/5aZrVoul6mfozQ/DKic4SW3kdlu\r\nGSMzELtD/6TEASNvKRXbFJ1HtloGi2z1jB2NpgeA5D76t4kphDmL9MWwiDIl+ssyJd5TvxD92uBdgLXN\r\ns+Amx3lhPJ73wqYH6AY+imh335B03bEwGaQvP8Bd3CDAX3anz3vjf15tLq4es4MZRsEoGAU0AQD5tTW8\r\n;\r\n\r\nDEFINE COMMENT 1\r\neJxTY2Bg2MNiL5jBYy8Yz39UVFaARzpWYLrSEt7F2mbsz3WFRTL1z4kWmvKKfbcUEG1yfMg32VePSzKo\r\nlF0yCKiVwYLtrLQFm7MTiL1S2V82RVVQ7o+xmWWD0V7bEO2zniDxaVqTfUH0fbsQP2bPDWy23t+5rX04\r\nJKx91HT3eOsZ7/FucrT2aXMBqeF2s7Zx8DKzZBgFo2AU0AUAAI1GJdE;\r\n\r\nDEFINE COMMENT 2\r\neJwzZmBgKOCcH/aMx8xSVPio6EQRd/HdMvb22+S04oBSDIv4WJw3KrA4g9gTdK4pbrB4pPXG8rXBUYNb\r\nQX66atEg8X4XDokpUe7iHPEnJdriz0onheYaffPdYbXTh8FBNpzBISSqzi4kisdTIUw2dKP/6zhb7w1J\r\noU6laSC9rR6zVQ96LtZm9Fpj6Ow5PQAkdr1gupJZ7Xtj+bxHESB+1WQe6X8Tz0pHtafoKLeUWjxpdnZK\r\nbvH2iG2b7CvQPTu4ZlJMyLYpEYEMo2AUjAKSAQCM20K9;\r\n\r\nDEFINE COMMENT 3\r\neJzzZ2BgMObg8TTg1DNeznNS4poAAxi8EmRgaJdQ1GqR3GCyW+asJ0hsE8di7ZPij7RA7GlaR0Un6BwV\r\ndTE8K21p6i8baz9bdb5dguYXMz3jP8Zmlv+N9tqC1OUHFLK3JGxgY0gy47ZPOijUksAhMS1SVNE9PkLZ\r\nJllW3SpFy6AmudCUKbHS+l6Yt4d2EA/YrpVBVnyqISclFMI+m4H4u2VOlkwRPlnykC+kZjlPTNNL7tIp\r\nGTx1s57wui8UFb60ol0iZJWRwuSVILV1xk35epbOBfVe/RW23pOr/3lNr9tgwbEI7O7IDUn7ktbEb0hf\r\nE78ia0PSi6y92TmZ7sWNibMbP6SndrzKXNP7KrNw4of0PzPsk9wXdsZ5L0kP5l0K0hseuSVVNGpnxuWo\r\nkyWXo35MZRgFo2AYAAB4sm8P;\r\n\r\nDEFINE COMMENT 4\r\neJyzY2BguCzsLv6Et00sl6tLsoAzRKGAc42hHlednTZ3m0sq71nPcCFRf27xa/6NUiF+QOUMT1XcxWU0\r\n3MX/GEuqFFjEqH0yV9SqM8416tC3t+/Wc3ft0z3pBlJ3xSkhPMCly73VY7F2kf9BodzAkxK3w3dYXY66\r\nFwqSZ/Y86BAfdtBhWmSdHYi/L8ld/EcKh8St/AjlQxXzNQ5VPNc9Wq5nrJjb5wWS12zayx/UtYPHaYIV\r\n387JB4VKpp6UMJp2TbF8ymLtSV0r9Dz6MvV/TzIy+zG5zm7fRA63iI57odqNCeEgvanNDELKLUdFF7Vc\r\nU1za7O3BMApGwSgAAwDua1T3;\r\n\r\nDEFINE COMMENT 5\r\neJwzYWBg+MNyK6iAM0FzEd9BoVgBd/HLwvfUe8Tq7P5Kv44DSjMYc7i7+oq5u4LYSmohCvy61xTv2+Ua\r\nHTKUDQWJTYsMUXgWfE1xi5+iloXvCr0qn/fGVT57bdcEzg6eFpmb4JS4IQmkLifznnpt1WJtvYbXBvsr\r\n+7y8S+eHBRaviZ9auCYeJC/c5SyybvpBofAFbWITF3lLCS2SVBFfoKilNXOLufgCa5urC+rsri5ocxFf\r\nwOMpP1cyyGKKWvSxvsJkkN5jfYJytpNE/RlGwSgYBSQBALG9RkE;\r\n\r\nDEFINE COMMENT 6\r\neJyzZWBguMf/nZtZ6g/fZ/km4dVK7uIvlHmkl6lcklumMl/jhbKarqn8BhNmqUJTU/k/NkYKbS6FCn1e\r\n2+RmB1fKzg/jkNCKy+XSSwQawzBTsE1sPv9e2/n8Ad4zBZdEgsRYJV8bXBQpNAWxLU39ZVVsZdUDXPSM\r\nLzobmRlatLkcNbjmD5Kr8tGKexC6xXxa5HQloeijov4xHBKb0yIC12VsSALJPw456SYQc9azLonHE8RP\r\ny76l4l36SMu4Ts/Yuvq7ZVwexJzfk9rEjvXxSF/rkFW/05ZrJNfm7HSnjcczoHuy75H+Sz4WU066MYyC\r\nUTAK4AAAz6hPqA;\r\n\r\nDEFINE COMMENT 7\r\neJxzYWBgWM/JI80tflKiUcpbap90n8xf6Qhle+kUHV6xDSYzBT+bMUvtsKqX/mNjK+PuWi8d4H1ONCZk\r\nOc+90O1sjyKA2hlWcQvKveQ+6gxiT9CZLM+lH6G8yVxR671Fio6epZbBJvPPZt9Nd1hN1u7zAqnhdnse\r\n7eF+1rPKR1Llp0+fzBa/JuGP/oXs7wLes2YF8UgvD+5yB6lz8LK3L/K3tgGxT4qbTfUXLZwYK1A48Qmv\r\n2dR3nCGrDDhX7FjPqbf3GU/ZIS9x+5P20nUnQGrZDTZMWGXFMEfNpm1Bg5HsRpAYn2vVUVvvtgW5gTFN\r\nWUGzG58Fp3bEhx2cMy8sdw9I/qeP95LUEO8lDKNgFIwwAACV3Fr9;\r\n\r\nDEFINE COMMENT 8\r\neJyzY2BgyOBpE4sSZBD6oFAnkKPEIKSlzCKqpSwot1Fhvoa5XKb+X+lco5PiG0x2ym4wMZU3MiuRZ3He\r\nJnfW86DUvVBhkczYAs4VMUBjGJT5TkrE83NIxAp0SUoIyYaCxPx0/WUdjQTlsq0kVVZYx6ip2Shqqdmo\r\n6WZYZ+rbGTM4NBu6u4LU5QayiJ5xlVQJcFmsLejy3viM615bW+9r/gYBCeGqIQnh8WEQ83hjb6kci7+n\r\nnpadoqOY+9ogMfe98ae0Pzb2SRxuIPmzJSF+hyoy9f9Xhij8qRKUW9tQaf28qc/rTltqFEj+aHmf16Y6\r\nHk+GUTAKRgEYAACnGUm5;\r\n\r\nDEFINE COMMENT 9\r\neJyzZGBgOCnuLXVRhEf6I8d8jW9smfrb2TaYFHHU2WVx83jOERD1Z5CeHgBUxnBX/Z56pOY99TpjPeMV\r\n1t8tV1gzOPw3CvEDyXG6n5Vu9fCWUg7lkQ6J8pcVip4sHxQ9W/VxSK7RxGhrG5/YJscTcSF+XnEJ4f4x\r\nK2JmRuQmFPm/TwTptfZJ0Nzuq2WgGzjZVyP4UQRI7G3GYu1l2Sk6X2r/2HyvaXK8VBQTAhKXa8uMndNm\r\nby/RMV9DuOukRH+3uzh3L4cERx+P9IdpQDfPFPRZNkstGqR2SieDw7YpBx0YRsEoGAU4AQBZCks1;\r\n\r\nDEFINE LABEL 0\r\neJzjZ2BgeJRz7nJkgd5entKd0wrqSy3eNOy1vdeqlzirfWdGT8/zzn0Tzy3Nn+58Rmtm/xWgcgb2cud5\r\nfD1NcxlGwSgYBUMeAACrzxtW;\r\n\r\nDEFINE LABEL 1\r\neJyTZ2BgWJZdaR2dv8X8fb2R2ZkeBgeHid4eFlNuBZVMTY36PLUpf8tUjpKdk6fXHetb0j6nbcOE9fWf\r\nJwkWf570v/LzJL0Gs6m+PV2LW/qnr9k3ccWOfxML9zNPsD8p3HXyQkaTz6W0bN7LP1LczwOtYbhU5Owk\r\nWPxj6tVCte2RBQdPMYyCUTAKBhwAAK7aPPU;\r\n\r\nDEFINE LABEL 2\r\neJyTYGBg4OirtO7qNTIL6E7ReV9/UqKipk3saHmb2Ox8f1nz1EdabfGFptMijzo/C34UsTLoc8rKII4S\r\nici2BQxJDKc2p/FejsubfJ2xcvJ1w/pzlx+2OJ/h6NPadaR/ydZ/E0NWMYyCUTAKBjUAAI5fKy4;\r\n\r\n",
    "size": 96,
    "steps": 52,
    "successRatio": 0.03,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 29,
    "path": "29-Storage-Floor-5.25/20.20.specific-AlanDeSmet.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 29-Storage-Floor - SIZE 20/5 - SPEED 20/25 --\n\n-- This solution is level-specific (quantity-limited input).\n\n    COMMENT  0\n    INBOX   \n    COPYTO   10\n    COPYFROM [10]\n    OUTBOX  \n    INBOX   \n    COPYTO   10\n    COPYFROM [10]\n    OUTBOX  \n    INBOX   \n    COPYTO   10\n    COPYFROM [10]\n    OUTBOX  \n    INBOX   \n    COPYTO   10\n    COPYFROM [10]\n    OUTBOX  \n    INBOX   \n    COPYTO   10\n    COPYFROM [10]\n    OUTBOX  \n\n\nDEFINE COMMENT 0\neJzzYGBgeMN1UChW4A9fi6QVn6k8g1CIdoQyv66i1lldBofJ2hGBszXWxL9Qrsp0l6jK7Bc1S78o8jml\nX3RN/GHJ1KjN8ksi3Qzsc4HGMLh6iCp2uYkq9rvcUrnuaGQm6TjZd6qTWnS/i1m6qwdDXpVPU/5Gf/tc\n7aDv6cqhK2Liw6YHzAuztlEOVdPVCL6m+NG/S9LW+6REvRePNMg8+blnpfsW80gfXXZJ7u/KTH2bVdY2\n/1cEeLsvWxFzdnFh8o351lkL59TlpM/am/16hlGKxqzchKsLlkR2Ll0SuWHdhiSQGXsOCsqx7L8k17Vn\ntmrv7tcGZ3afdGvavyRy++EtqQpnmvInXqzLcb9amHzw+q0ghht1dl5X7qmLXjgrveRUk/DHo3UCDKNg\nFAxzAABBuHRe;\n\nDEFINE LABEL 10\neJzTZGBgyAp63LYm8Pn29QEcF0r93r8u9fvxsdy36vNOnxXPdvqUHfrsl9mdH3CrYUkIR8nE6LqcY/HW\nWU6J1lnbUjlKjNIj6o3Sn3dWpuycZpO8d+accNHVqiERa4HGMjRXHHSYXNRfIVlwchGI/yLrXihLxa2g\nNw0hftLtIX4gsWsdkg1XOp93Xus4uWh6x85pF7vuNbf3HczbN9Eo5dsUvUTV2X+yGEbBKBgFNAMAfANM\nsQ;\n\n",
    "size": 20,
    "steps": 18,
    "successRatio": 0.42,
    "type": "specific",
    "author": "AlanDeSmet"
  },
  {
    "levelNumber": 29,
    "path": "29-Storage-Floor-5.25/5.25.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 29-Storage-Floor - SIZE 5/5 - SPEED 25/25 --\n\na:\n    INBOX   \n    COPYTO   10\n    COPYFROM [10]\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE LABEL 10\neJxzYWBgENKxz52nvjMjRfVPlpaydZa+Yl3OZvm2ohJ5waoPCmt6tZTtZ6eoei8J0e5fdkrv5KKjBk1z\nDxlaz2AyKpzIpd+U36F/smSvcULrBoud01RsTy6aax+w3Nvt0gqg0QxrAhdrvwyqtF4YGuAdFfE5ZWaE\n0SSpiD8zYsIPzkkNOTrf2N9+9h5vs6n7vQonNnnOb2nynF5n6sdS+DikLgek/2j5Iy32cj1jt/I/No6V\nqVGOld5lu6q3TK6uPjp/b5X3kuaKSyv8Si6tiCxwnnc3r3Di7PwVXVcLZZsbKqfXmdUGVILM4OiryjzT\ns3cmd6/3kva+2euP9VVNP9kb09Q0QbBq5UyWwrOLnQtA6vLWByxnGAWjYIQBANVtc+g;\n\n",
    "size": 5,
    "steps": 32,
    "successRatio": 1
  },
  {
    "levelNumber": 30,
    "path": "30-String-Storage-Floor-7.203/169.85.exploit-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 30-String-Storage-Floor - Size 169/7 - Speed 85/203 --\r\n\r\n-- This solution is an exploit discovered by Otto42;\r\n-- the message is known in advance.\r\n-- There are random numbers of X's in the places in the message they occur, so\r\n-- it fast forwards the message to them and uses three jumps to output the\r\n-- correct number of X's.\r\n\r\n    COPYFROM 12\r\n    SUB      8\r\n    COPYTO   24\r\n    BUMPDN   24\r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    a3\r\n    JUMPZ    a2\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    COPYFROM 11\r\n    OUTBOX  \r\n    COPYFROM 12\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    b3\r\n    JUMPZ    b2\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX  \r\n    SUB      24\r\n    JUMPN    c3\r\n    JUMPZ    c2\r\n    JUMP     c1\r\na3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\na2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    COPYFROM 11\r\n    OUTBOX  \r\n    COPYFROM 12\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    b3\r\n    JUMPZ    b2\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX  \r\n    SUB      24\r\n    JUMPN    c3\r\n    JUMPZ    c2\r\n    JUMP     c1\r\nb3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nb2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX  \r\n    SUB      24\r\n    JUMPN    c3\r\n    JUMPZ    c2\r\n    JUMP     c1\r\nc3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nc2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nc1:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n\r\n\r\n",
    "size": 169,
    "steps": 84,
    "successRatio": 1,
    "type": "exploit",
    "author": "Mygod"
  },
  {
    "levelNumber": 30,
    "path": "30-String-Storage-Floor-7.203/7.203.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 30-String-Storage-Floor - SIZE 7/7 - SPEED 203/203 --\n\na:\n    INBOX   \n    COPYTO   24\nb:\n    COPYFROM [24]\n    JUMPZ    a\n    OUTBOX  \n    BUMPUP   24\n    JUMP     b\n\n\nDEFINE LABEL 24\neJxzZ2BguKqlFRej8TouU/l7+gcF+1wjhaOFRgqCVesUjSatVrKesUzl6PwQ7aPz+XXdF/roHZ3PbvB5\nUoe+Vs9Z3fktZ3UnV3Pp/8k6oX8wr0Ofo4TFMKTG0eh5Z4FF/7ICi2urgcYzfPYTVTT2/2z2LoDFOT3Y\nOis1JKTmWbBss0HAyUVb/LyXeLh3LeZ2a1twxtV+trdbQiubh2CVsf/JkjWB3mUg/Y9yQhQUc61t7uYt\niQwrdC8WKcrsnlGwd+ajnJOL0rK7Fmdm7Z1plL5hwrbUmKa3GQx56tnf0xfn7MwA6V3VaJSS0VSVubwp\npim78cfUl41tC940iNauajxa+LBFL/FOm2TQzfbJvlc6A7y7er09HCbyeIL08S7J7GYYBaNgBAAAysV1\ntw;\n\n",
    "size": 7,
    "steps": 197,
    "successRatio": 1
  },
  {
    "levelNumber": 30,
    "path": "30-String-Storage-Floor-7.203/79.101.exploit-Otto42.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 30-String-Storage-Floor - Size 79/7 - Speed 101/203 --\n\n-- This solution is an exploit; the message is known in advance.\n-- There are random numbers of X's in the places in the message they occur, so\n-- it fast forwards the message to them and uses three loops to output the\n-- correct number of X's.\n\n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    COPYTO   24\n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 15\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 2\n    OUTBOX  \na:\n    COPYFROM [24]\n    JUMPZ    b\n    OUTBOX  \n    BUMPUP   24\n    JUMP     a\nb:\n    INBOX   \n    INBOX   \n    INBOX   \n    COPYTO   24\n    COPYFROM 17\n    OUTBOX  \n    COPYFROM 18\n    OUTBOX  \n    COPYFROM 11\n    OUTBOX  \n    COPYFROM 12\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 14\n    OUTBOX  \n    COPYFROM 15\n    OUTBOX  \nc:\n    COPYFROM [24]\n    JUMPZ    d\n    OUTBOX  \n    BUMPUP   24\n    JUMP     c\nd:\n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    COPYTO   24\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 14\n    OUTBOX  \n    COPYFROM 15\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 17\n    OUTBOX  \n    COPYFROM 18\n    OUTBOX  \ne:\n    COPYFROM [24]\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   24\n    JUMP     e\nf:\n\n",
    "size": 79,
    "steps": 95,
    "successRatio": 1,
    "type": "exploit",
    "author": "Otto42"
  },
  {
    "levelNumber": 30,
    "path": "30-String-Storage-Floor-7.203/8.177-andrewboudreau.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 30-String-Storage-Floor - SIZE 8/7 - SPEED 177/203 --\n\na:\n    INBOX   \n    COPYTO   24\n    COPYFROM [24]\nb:\n    OUTBOX  \n    BUMPUP   24\n    COPYFROM [24]\n    JUMPZ    a\n    JUMP     b\n\n",
    "size": 8,
    "steps": 171,
    "successRatio": 1,
    "author": "andrewboudreau"
  },
  {
    "levelNumber": 30,
    "path": "30-String-Storage-Floor-7.203/95.86.exploit-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 30-String-Storage-Floor - Size 95/7 - Speed 86/203 --\r\n\r\n-- This solution is an exploit discovered by Otto42;\r\n-- the message is known in advance.\r\n-- There are random numbers of X's in the places in the message they occur, so\r\n-- it fast forwards the message to them and uses three jumps to output the\r\n-- correct number of X's.\r\n\r\n    COPYFROM 12\r\n    SUB      8\r\n    COPYTO   24\r\n    BUMPDN   24\r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    a3\r\n    JUMPZ    a2\r\n    JUMP     a1\r\na3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\na2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\na1:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    COPYFROM 11\r\n    OUTBOX  \r\n    COPYFROM 12\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    b3\r\n    JUMPZ    b2\r\n    JUMP     b1\r\nb3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nb2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nb1:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX  \r\n    SUB      24\r\n    JUMPN    c3\r\n    JUMPZ    c2\r\n    JUMP     c1\r\nc3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nc2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nc1:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n\r\n\r\n",
    "size": 95,
    "steps": 85,
    "successRatio": 1,
    "type": "exploit",
    "author": "Mygod"
  },
  {
    "levelNumber": 31,
    "path": "31-String-Reverse-11.122/10.121-FireGoblin.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 10/11 - SPEED 121/122 --\n\na:\nb:\n    COMMENT  0\n    BUMPUP   14\n    INBOX   \n    JUMPZ    c\n    COPYTO   [14]\n    JUMP     b\nc:\nd:\n    COMMENT  1\n    BUMPDN   14\n    JUMPZ    a\n    COPYFROM [14]\n    OUTBOX  \n    JUMP     d\n\n\nDEFINE COMMENT 0\neJyTZ2Bg6HB8p3Y8wFP7VN5eHSCX4U24s3VR+Aaf7lCPjOkhMrOnh1y/IBtifBUk980pa/89F8ujJh5T\nTwqGfjgrn/Hh7M3GqSdBcre6i4pudbfU53Rx9Ym1K5741Jm1//w0xwrJ2d35X+Z25xstbqn/uvzgtIur\nCtdfXAXRMwpGwSgYWAAAMBw45Q;\n\nDEFINE COMMENT 1\neJwzZmBgqAsrMb3sb6jn4O5sLeVw0rPaYlXMEaPu/Cq9nKZ52r5TVbRn76zSqzlzxIjpNqOFzlNvm9+v\ndrmHv4/0X/CsKNz4ak88/+6TKZcWy2fU9c/MOFcmnzExfm/qUn3/FHnFt4kZEnuiGUyA1jA863Ks+NSp\nWd3SYd3B1VE+/1/H37UJ3d/2GvRznP4/af/l0GnGV7fPSDnfNufeAbtFlxarLTk4jW9Z/KKOZfcOgPR/\n37gnc9GOxTmNN8XzQHytM21OG04fitQ6E9xqdlp9B8MoGAWjgGQAACGLXR0;\n\nDEFINE LABEL 14\neJxzZGBg+OZ0Jc3YLiF1u3FC6h2DK2keGufKxJXWd+orHJy2VX7LtpUKQYfElaae/Kxy/cI2zesXeHRr\nzoQZHj380nLXsovWJjO8baw71to5VtxzSUi95HppsYO7+g6gsQy/s4qKhDO78/1TxPM2xAS3+kV9nPAg\nonx+UfjsnW/C1x57EDH15IkoxRN7U/+u3VSwvvNMRWWSZVV90OYqLbu48pb6rDLmeU/KOteAzJo8Wzzv\n+ZQfDeIT6/o9evVWePRu2WbTp77DoH/Lts+TO9fMn8U878KCaT0Lljwrrln+wqxm+V6d/BUCdS9X1PXf\nXSkz++5K0dUgc37sjiqt262+w//kubKYS2bRsXeOtzGMglEwggEAaN19hg;\n\n",
    "size": 10,
    "steps": 105,
    "successRatio": 1,
    "author": "FireGoblin"
  },
  {
    "levelNumber": 31,
    "path": "31-String-Reverse-11.122/108.51.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 31-String-Reverse - SIZE 108/11 - SPEED 51/122 --\r\n\r\n-- This solution is level-specific (quantity-limited input).\r\n-- There SHALL only be 3 words whose length SHALL be between 2-5.\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n    \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n    \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    JUMP end\r\nw14:\r\n    COPYFROM 3\r\n    OUTBOX\r\nw13:\r\n    COPYFROM 2\r\n    OUTBOX\r\nw12:\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\nend:\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    \r\n",
    "size": 108,
    "steps": 51,
    "successRatio": 0.51,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 31,
    "path": "31-String-Reverse-11.122/11.118-johanatan.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 11/11 - SPEED 118/122 --\n\na:\nb:\n    INBOX\n    JUMPZ    c\n    COPYTO   [14]\n    BUMPUP   14\n    JUMP     a\nc:\nd:\n    BUMPDN   14\n    COPYFROM [14]\n    OUTBOX\n    COPYFROM 14\n    JUMPZ    b\n    JUMP     d\n\n",
    "size": 11,
    "steps": 103,
    "successRatio": 1,
    "author": "johanatan"
  },
  {
    "levelNumber": 31,
    "path": "31-String-Reverse-11.122/14.103-FireGoblin.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 14/11 - SPEED 103/122 --\n\n    JUMP     c\n    COMMENT  2\na:\n    COPYFROM [14]\n    OUTBOX  \n    COMMENT  0\nb:\nc:\n    INBOX   \n    JUMPZ    d\n    COPYTO   [14]\n    BUMPUP   14\n    JUMP     b\n    COMMENT  1\nd:\n    BUMPDN   14\ne:\n    COPYFROM [14]\n    OUTBOX  \n    BUMPDN   14\n    JUMPZ    a\n    JUMP     e\n\n\nDEFINE COMMENT 0\neJyTZ2Bg6HB8p3Y8wFP7VN5eHSCX4U24s3VR+Aaf7lCPjOkhMrOnh1y/IBtifBUk980pa/89F8ujJh5T\nTwqGfjgrn/Hh7M3GqSdBcre6i4pudbfU53Rx9Ym1K5741Jm1//w0xwrJ2d35X+Z25xstbqn/uvzgtIur\nCtdfXAXRMwpGwSgYWAAAMBw45Q;\n\nDEFINE COMMENT 1\neJwzZmBgqAsrMb3sb6jn4O5sLeVw0rPaYlXMEaPu/Cq9nKZ52r5TVbRn76zSqzlzxIjpNqOFzlNvm9+v\ndrmHv4/0X/CsKNz4ak88/+6TKZcWy2fU9c/MOFcmnzExfm/qUn3/FHnFt4kZEnuiGUyA1jA863Ks+NSp\nWd3SYd3B1VE+/1/H37UJ3d/2GvRznP4/af/l0GnGV7fPSDnfNufeAbtFlxarLTk4jW9Z/KKOZfcOgPR/\n37gnc9GOxTmNN8XzQHytM21OG04fitQ6E9xqdlp9B8MoGAWjgGQAACGLXR0;\n\nDEFINE COMMENT 2\neJzTYmBgsLetD7K3rUyqtkidxGu+aGW49dZKKQez6Hsuua4O7kKOU73m2X/3EXK87H/SE6icYVaRdcfZ\npu58pbYraRPaJ8ZzdXAHKrXZeJ9tOun5sd7Gmz1rT2ZJ4o+GnvhpPULx5fPZEnYti0522Gqe9m3v+2zF\nEy75U0/eKFc8ATLr9tRVMW1z3iZfWJCQ6rDtShpILH/FecspSyfGv5iXOqlq7t+1VXP5dzOMglEwCmgC\nABq7R90;\n\nDEFINE LABEL 14\neJxzZGBg+OZ0Jc3YLiF1u3FC6h2DK2keGufKxJXWd+orHJy2VX7LtpUKQYfElaae/Kxy/cI2zesXeHRr\nzoQZHj380nLXsovWJjO8baw71to5VtxzSUi95HppsYO7+g6gsQy/s4qKhDO78/1TxPM2xAS3+kV9nPAg\nonx+UfjsnW/C1x57EDH15IkoxRN7U/+u3VSwvvNMRWWSZVV90OYqLbu48pb6rDLmeU/KOteAzJo8Wzzv\n+ZQfDeIT6/o9evVWePRu2WbTp77DoH/Lts+TO9fMn8U878KCaT0Lljwrrln+wqxm+V6d/BUCdS9X1PXf\nXSkz++5K0dUgc37sjiqt262+w//kubKYS2bRsXeOtzGMglEwggEAaN19hg;\n\n",
    "size": 14,
    "steps": 105,
    "successRatio": 0.5,
    "author": "FireGoblin"
  },
  {
    "levelNumber": 31,
    "path": "31-String-Reverse-11.122/32.54.specific-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 31-String-Reverse - SIZE 32/11 - SPEED 54/122 --\r\n\r\n-- This solution is level-specific (quantity-limited input).\r\n-- The word length SHALL be between 2-5.\r\n\r\nw2:\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n    JUMP     w2\r\nw14:\r\n    COPYFROM 3\r\n    OUTBOX\r\nw13:\r\n    COPYFROM 2\r\n    OUTBOX\r\nw12:\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    JUMP     w2\r\n\r\n",
    "size": 32,
    "steps": 55,
    "successRatio": 0.54,
    "type": "specific",
    "author": "Mygod"
  },
  {
    "levelNumber": 32,
    "path": "32-Inventory-Report-16.393/13.53.exploit-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 13/16 - SPEED 53/393 --\n\n-- Relies on a fixed floor where occurrences are: A=4, B=5, C=2, X=3\n\n    BUMPUP   14\n    BUMPUP   14\n    ADD      14\n    COPYTO   19\na:\n    INBOX   \n    SUB      4\nb:\n    JUMPN    c\n    SUB      19\n    JUMP     b\nc:\n    ADD      19\n    ADD      14\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE LABEL 14\neJwTYWBgiCw46ylYvMPqbImRmVu5nnFt1Xtj47pSi1WN9vbKLd4eCq2SQYtatOKWN+3N3lQXUClYXDU9\nLq9/2a38SyvsqgKW76qevHJrbcyG3IbHWxhGwSgYBUMKAAC1dCLO;\n\nDEFINE LABEL 19\neJwTYGBg2JFy1NkqZUmkfZJgFUNSaod9UumUmmTnedtSeZe+zZi8ckHupRXBRd5Laqt+TAUqZ/hTtTPD\nrPbPjLUNDKcYRsEoGAVDGgAAU3Ybpw;\n\n",
    "size": 13,
    "steps": 53,
    "successRatio": 1,
    "type": "exploit",
    "author": "skwasjer"
  },
  {
    "levelNumber": 32,
    "path": "32-Inventory-Report-16.393/16.31.exploit-LRFLEW.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 16/16 - SPEED 31/393 --\n\n-- Relies on a fixed floor where occurrences are: A=4, B=5, C=2, X=3\n\n    BUMPUP   14\n    BUMPUP   14\n    COPYTO   13\n    BUMPUP   13\n    JUMP     d\na:\n    ADD      13\n    ADD      13\nb:\nc:\n    OUTBOX  \nd:\n    INBOX   \n    SUB      10\n    JUMPN    a\n    JUMPZ    e\n    COPYFROM 13\n    JUMP     c\ne:\n    COPYFROM 14\n    JUMP     b\n\n",
    "size": 16,
    "steps": 31,
    "successRatio": 1,
    "type": "exploit",
    "author": "LRFLEW"
  },
  {
    "levelNumber": 32,
    "path": "32-Inventory-Report-16.393/16.377-cowboy.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 16/16 - SPEED 377/393 --\n\n    JUMP     b\na:\n    COPYFROM 15\n    OUTBOX  \nb:\n    INBOX   \n    COPYTO   16\n    COPYFROM 14\n    COPYTO   15\n    COPYTO   17\n    JUMP     e\nc:\n    BUMPUP   15\nd:\n    BUMPUP   17\ne:\n    COPYFROM [17]\n    JUMPZ    a\n    SUB      16\n    JUMPZ    c\n    JUMP     d\n\n\nDEFINE LABEL 14\neJxzZmBg+CxkmB+qeiSlzup53Bsr2RQzy9+ZbXovOq8pT1n2V955i4Bc+P6FCksPeJkf3+XgprgLqIVB\nIPJLO1uGa9XdvDOF7/MN89UK1mZMzZ0Z+zCDK7IzmSvySKxDnGnE78wdwdX16oE9M9UDrZdbBqWtyw09\nvut69KeDKSkXjq/MvnC8IK/pWFP+88MgMzdWr824UtvftbrF4XBJy58pD9pDMuM7LySJdvfFL5nwL6py\nlmg4SN26nf+itmy4kJS/sivv7NLqevElLT0PF3NMfriYdVHrktpVLMvmbP6wvHW7x9rkvVmbNuy7upVz\nn+PO47se77m/jeXQ6dVTj/TMZD56t1vs8JuqVfun5XTuupB0devzOIZRMApGIAAAdXmFYQ;\n\nDEFINE LABEL 15\neJzzYWBg2KunE3xAozXIVdEn5r+MUNpb6YVZjFJvqhilvrRHy9ya5S7HuqhGUX9lqGrRmg7t2lUTrBtm\nA7UxaPpZBBb76ATP8shOXe9c0VfpLDMvxMV9qa7HlvWrfJy3MAVN3Do5xHnLzYj9ayOirJdnRR+a5xpj\n1u0aE1O2ILorzy2yPJkhdEMkyCy2jKXRnzO/tN/PPjRved7+te/zGTeqFH/bpFTGuLG38u3SqmrjWT9r\nvrSvr8sLe9LYXvu5dcESkL6lvTrBuROYy49PmrIse/LsjldTMkquTQvJ7JlRniw973lc8nyTBI4F5clf\nFh4sbl3ycZrmUt71IH1HtuzScd28NsNw67F+ue0y8/R3bF9QtmfBkpL9QYvdz/yZ0n82cRLf+dkdILVx\nKywCD+zi9RI59s6BYRSMgmEGAIXThmM;\n\nDEFINE LABEL 16\neJwLZmBgSBAutSgS6crTEFs/+b5I2QmgEIOCEuuiRP3SuRZmM6ZvtRKe+Nfat32CtXiTh1V77R0z5vIz\nRjFlWvpvqr5qc7fYa93tvqL2c3GaWt7uCnWTo1+1hU4vNYs/k+7Euc/JWXEXyLzmgE7nHcG3ZkWF3z5q\nHB1/Zl6c0OnHqf/2f007vutrmvMWkJpZHptasqJdqwzjYspA/JXZKm6+OWmejIX710YXfzq4uETzeE3F\n73NyNQvPG9SynV3dorI6sa1hNkhtQJp4U1U1c/mBeqliEP/GZN/2g7O5WwIWtte2L+QrLV1gm7tu7toM\np1lrM9ym8JWaTfjSPqk/d0J0v/vSrRMnbt04feahOXP6jiQucjgsvmTpAc2lx8Hu3rSZr1R+y/YFv7Zs\nWZ+xVfbk5R0tPQd2uVaV7TlTyLb/fXbM8SMpkWcvJB25sDONYRSMgiEIADByk2s;\n\nDEFINE LABEL 17\neJzTZ2BgULRzd7jqFNna4f7/FZDLsMjmlf9DnzRPpiBeryWh33zfhFWFuEU+yV0UMa8yKlyvLjc0pXmF\nf0tPsU9F33pn+X6QHrYMAWu2jDdVCVmPlhdl+2/SyFXclVfocPh/8e2jRlW3jzo0Xt7xtWnFxuRmmXkg\n9euSXnSyZIs3KVQGVoD4aj3lye/6Tq/2mHjh+KT+iVu9+m7NEu67ke/VJ5QW3b802mzCnnCTyVUh6+a2\nBgUsVAz9tMQhjmEUjIJRQDEAABlzUCM;\n\n",
    "size": 16,
    "steps": 377,
    "successRatio": 1,
    "author": "cowboy"
  },
  {
    "levelNumber": 32,
    "path": "32-Inventory-Report-16.393/20.44.obsolete-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 20/16 - SPEED 44/393 --\n\n-- This solution is superseded by 18.32.exploit-LRFLEW.asm, which further\n-- optimizes by removing the lookup.\n\n-- Relies on a fixed floor where occurrences are: A=4, B=5, C=2, X=3\n\n    COPYFROM 4\n    SUB      1\n    COPYTO   2\n    COPYTO   3\n    BUMPUP   3\n    COPYTO   0\n    BUMPUP   0\n    COPYTO   1\n    BUMPUP   1\na:\n    INBOX   \n    SUB      6\n    SUB      1\n    JUMPN    b\n    COPYFROM 3\n    JUMP     c\nb:\n    ADD      1\n    COPYTO   4\n    COPYFROM [4]\nc:\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE LABEL 0\neJzjYWBg6C1ZY/g19V6zULTadiCXobt0hd6fqsm+QV231oH4H9LtcxNz/2TNaduZwTAKRsEoGFYAAEy8\nEvo;\n\nDEFINE LABEL 1\neJyTZWBgaItP0TmQaJbOkLSm929SyCqgEINLwntjo3Q947t5W8x5Shkc2MtPurmVX/PnLEsIFyzWilPM\n/ZzyKc0sXSXHKOV88Yak7MbC5DltW1Kj2u1zY9t4ypVbZJu1G/X6zWrrZjlXcCy6VNS/TCsrYLlJmvcS\nhlEwCkbBoAEAov8sYA;\n\nDEFINE LABEL 2\neJwTZmBgkGvTMthVvcZwdn6pxbLsvbYb0k+6maRd8qlMWRHzK9ksvTJlet3mtB9T12VwLJLJV9s+ofj9\nXruqH4eN634cTmjN3SPRobb9YlfEWoZRMApGwZADADRWI9g;\n\nDEFINE LABEL 3\neJzjYWBgEO6yt5drU4xoqDSaJF44f9OHdPfzQGEGxVxvD/6Sg3lfaqumP2yRXLdx2r37DKNgFIyCYQUA\najQSzQ;\n\nDEFINE LABEL 4\neJxjZ2Bg6C4N8O4o25DEWXarobckYDlQiEG8cLoSwygYBaNg2AMAwLgIxQ;\n\n",
    "size": 20,
    "steps": 44,
    "successRatio": 1,
    "type": "obsolete",
    "author": "skwasjer"
  },
  {
    "levelNumber": 32,
    "path": "32-Inventory-Report-16.393/30.45.obsolete-AlanDeSmet.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 30/16 - SPEED 45/393 --\n\n-- This solution is superseded by 20.44.exploit-skwasjer.asm being functionally\n-- same with further optimization.\n\n    COMMENT  5\n    COPYFROM 14\n    COPYTO   19\n    BUMPUP   19\n    ADD      19\n    COPYTO   17\n    ADD      19\n    COPYTO   18\n    ADD      19\n    COPYTO   15\n    ADD      19\n    COPYTO   16\n    COMMENT  4\na:\nb:\nc:\nd:\n    INBOX   \n    SUB      1\n    JUMPZ    g\n    SUB      19\n    JUMPZ    f\n    SUB      19\n    JUMPZ    e\n    COMMENT  3\n    COPYFROM 18\n    OUTBOX  \n    JUMP     a\ne:\n    COMMENT  2\n    COPYFROM 17\n    OUTBOX  \n    JUMP     d\nf:\n    COMMENT  1\n    COPYFROM 16\n    OUTBOX  \n    JUMP     c\ng:\n    COMMENT  0\n    COPYFROM 15\n    OUTBOX  \n    JUMP     b\n\n\nDEFINE COMMENT 0\neJzjYQCCpPd7u0sLTZ0r+mT2Vs3XWNswPyyig3epQLfSFpD0jIKQGpaKgMrsxoBKhlEwCkbBsAIAGwER\nGw;\n\nDEFINE COMMENT 1\neJyTYWBg4I3dYHIsPlO/JnmxtkjRYu3sRj1jhdbPZnJtldb3Wlmck1sCvN/X5ybsqj6Y51beVTq1MKBy\nV7VorVxbZvf0jvf9QV1/ZoR2nlyU3CK6mrFSaUtexprdQGMZFudsMJHPa3OZm8dTLlnwvv96wfQ1DKNg\nFIyCQQUA/kUvRA;\n\nDEFINE COMMENT 2\neJwTZmBgEO6a7GtX1eU+o4DHMyczIfxHiln64YSAytOxWj09sT+mesU5z2NKvLWuLPX93pQc+5Pni09e\ncK44d/lhy7nLAd0cF7p6D57y6Ks6yjAKRsEoGHIAAFTnJLY;\n\nDEFINE COMMENT 3\neJzjYmBgCI/cYPIj5aSbYPGW1MBFZYeAQgyfp95TF+ssTftfeWnF+eI/xxhGwSgYBcMSAADr+xHP;\n\nDEFINE COMMENT 4\neJwzY2BgmBaZonM7PLP7dvifY1ERbecCi93PA4UZTvYqtgV0l06Z0im44krnvY09PSt2tPTr7TWdumGf\n6uwlW+Xnzl5/d67girtz2xYsnv2+/930Ww2fp06uBunN3qDYpr9+SXvxWrOpn9Z2Lc5bL7hCZXPE2lnb\nZq+/suPWuoBdgis492r1dO153Ca2I6RmwRYQnt0I0it9Tq8/6bTzmdRTW98/PhVzL+rcloMcV3mXbr6j\n1ZNzP6F12vNLVYEvbzXwv3rcxv+qcGLgy53TxJ8zzDG6672E+8rs9bfPym5kGAWjYBQQBQCG2G/d;\n\nDEFINE COMMENT 5\neJyzY2BgUObjkc5XPCnxWqlPRktZVDFHKUVnm5y1jb20s5ORAodbuoqgT4qqqL+SWkK4klpqlKqqVlyh\nwvd0K9m6nJmC3mVAIxiYPU9KtLtzSPS6eksl2z7XfWVVaZ1tddYz22p6gJpNZqy0Q1Wmt9vJEkavkyWv\nA6syXwYZpTwLTghfEvLdUjVEz3ijv6TKTp/J8syegnIg8/wX80gHLnquG7iIxZl/MYcb7xJvj8YVAd6P\nNgd4g+RXbxBVzNx4SyVzY25C3vpLVSCxlycmy+85eEtlyxF314yT7q6pp7rcFc6E+CmcWRKpdup7+prj\nRwt/HuqvcNsXUMkwCkbBKAADAGZfV8s;\n\nDEFINE LABEL 14\neJxTZGBgCO20tkluYXDYWsvjeb0gNyEzi6PkQ7pa54b0PzPyMniXquQ83hKX93pXbdXJC0ubQ24c67t0\nbdsUlrPrplcdXTlzw755c/uXRc4vnTJz/uTqyPneZQ/mfE/fOG12MFt/l3tug5kl0AqGb1PWGB7p7/O6\n0vk+saKma3FDZeo271KGU+KFz58yjIJRMAoGDAAAJ1lBGw;\n\nDEFINE LABEL 15\neJwTYGBgSLP5cTja4d7Gfpe9My1818SvCeTxVAgzs4wJ32ElFcHg0JLwY+qrTNn7QKUMjF5bJm/0N5ok\nEfljakla1XQGKoLrBfeab+XzlCvmfk9XzDVKkc/bkCST/zw6sqAwWaQopMavJLePp/TofJDapc2Z+k+a\nd1gtamFweNhyrVauTa9frg3inobKk27KLW0uPyZzuIH47MvWxE9clJtwe55RSvzc7+mvZ/RXrJv+vDNn\nxppepTmlU64u2DvzxNKmuWVrDs4BqY/YnqkvtsPITGTnNX+RnXU5E3ZxLLqztb8ibqtRytyta+Ilt6dG\ndeydHWxxeHbwx6MJ4don9BIzTlZlPjy9cxo1w2MUjAJ6AABFI3H9;\n\nDEFINE LABEL 16\neJyTYmBg6Il1d83ManPJbeDxzG4M8F7VGOKX3Zga9aV2bzZLRUDl5KLZjdH5ss3ni5e0L2p53y/XtnPa\nvVaW+cot55bmNsxe/79Sa9fVwh+H32Y0neaKO3oWaCTD3Dxvj7l5kkErssymrs4sO8RARbC/cm92dXVX\n6dbawolfal/vKq4zPwwSN6yf3WhYf602t+FSlXT7wbyLXXU5J3vtc4/1NeX/mxhSUzTtx9R1088t1Z2x\nYse66YX7QXq4lkoGtS17n8i6PKbJcjVEzHTqihjL1StiQOy9K5dELtiyJJKa7h8Fo2AwAQBENGU7;\n\nDEFINE LABEL 17\neJwTZ2BgmNX+3XJps5FZbZWRmUhRqcWrzL22dUnurjHhihHaQUYpP30CKm29n3f+89o5zdrHe8kWv1vr\nkkJ3HmlJCLmxI+XWnZzMe/f5SxY8aK6QvFNa63NpVWPZoSfN8zcxjIJRMAoGPQAAkHEr5g;\n\nDEFINE LABEL 18\neJzjYWBgOBH3xyawOKJ+bcPjLdLtDKeAQgx32v7Y5Db0ebmVb0gSL+Qp35EyeeXEaIjcKBgFo2D4AABh\n8hN9;\n\nDEFINE LABEL 19\neJxjZWBgyG78bvm+PjO2oL5wombT4y0Mo2AUjIIRAwDlnQiJ;\n\n",
    "size": 30,
    "steps": 45,
    "successRatio": 1,
    "type": "obsolete",
    "author": "AlanDeSmet"
  },
  {
    "levelNumber": 32,
    "path": "32-Inventory-Report-16.393/40.27.exploit-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 32-Inventory-Report - SIZE 40/16 - SPEED 27/393 --\r\n\r\n-- Relies on a fixed floor where occurrences are: A=4, B=5, C=2, X=3\r\n\r\n    BUMPUP   14\r\n    BUMPUP   14\r\n    COPYTO   13\r\n    BUMPUP   13\r\n    INBOX   \r\n    SUB      10\r\n    JUMPN    a\r\n    JUMPZ    e\r\n    COPYFROM 13\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      10\r\n    JUMPN    a\r\n    JUMPZ    e\r\n    COPYFROM 13\r\n    OUTBOX  \r\n    INBOX   \r\na:\r\n    ADD      13\r\n    ADD      13\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      10\r\n    JUMPN    a\r\n    JUMPZ    e\r\n    COPYFROM 13\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      10\r\n    JUMPN    a\r\ne:\r\n    COPYFROM 14\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      10\r\n    JUMPN    a\r\n    JUMPZ    e\r\n    COPYFROM 13\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      10\r\n    JUMPN    a\r\n\r\n",
    "size": 40,
    "steps": 28,
    "successRatio": 1,
    "type": "exploit",
    "author": "Mygod"
  },
  {
    "levelNumber": 34,
    "path": "34-Vowel-Incinerator-13.323/13.316-FireGoblin.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 34-Vowel-Incinerator - SIZE 13/13 - SPEED 316/323 --\n\n    JUMP     c\na:\n    COMMENT  2\n    COPYFROM 7\n    OUTBOX  \n    COMMENT  0\nb:\nc:\n    INBOX   \n    COPYTO   7\n    COPYFROM 5\n    COPYTO   6\n    COMMENT  1\nd:\n    COPYFROM [6]\n    JUMPZ    a\n    SUB      7\n    JUMPZ    b\n    BUMPUP   6\n    JUMP     d\n\n\nDEFINE COMMENT 0\neJzzY2Bg8NG7FzpNSy06Uc0oZZnK0cJlKoJVSmqyzTEaK7p+mfAu/WI2fc0Xs5gNu0yWbJ2h+X4vUAvD\nP6/+iilR3mUn4tqK7JOss+qSPqccSFwT7x6fGnUhOiF8ZsSjiAeha+Kzgg7mffabXlflk9v325tlfpXP\ntdVb/BI3awc93jIvTHYjyCzPMhZnEL21tt9rUcv0gPqJkkEgvnBXlbV0+8E8ubbSKXPaOBbdbBdccaXz\n0gqQXPUq5wLL1YUTzdeYTf20duc0/fVmU6O3idZe2cGQx7d7SWTv7tK0Szv3zry0s2ku3+69M0F6gi4u\nibx2Xq1zztmj89VOLdm66SjDKcYDojcdDnRfNDgmuW75SbOpCmdCaiTOl6ZNvKgV13N5RYztTa0489t6\niV9vl6Z9vb03e/dNnvJzlxTbGEbBKBgmAAC6PI1K;\n\nDEFINE COMMENT 1\neJzzYGBgkNG4Fzpbwyw9RkNv7wK17ovdek1zK0xDatRsvqdHOL6Om+r0Oq7fZWdGr2tCK5+r+8Lrjlq7\nIhz/HANqZdjp8yer1G9LqkFAYfK9sNdx52K04k7EvU9kTdiZ4ZS4pN0lwfwwSN2ZHvvc0E6zdM2mzyml\ntVtSD1Uw5J0qFayaUPy8M7jIfvbkomurz5aobW+u0Nu7q1pv7/r659sftlxb7TTheefOyQmtPyZ/nsQw\n8f1ehon2J/dNbDr9e5L9SZC51atEax1XvO7hXfJ4C+8S0dUgMaYV9vYgev+B553/Dszf1HBgxQ67gycX\nVR3aMnnLEdnmNcc5SpacqsuZc/ZP1pQL9rncV9yLD16PqK+8ldltesd6xuc78zeV3NHb++MWwymGUTAK\nhjkAAAJnihg;\n\nDEFINE COMMENT 2\neJwzY2Bg4DV/6MZoMTGe1zyq1NCkrt/QxHeqqunNyQXOE+Onep30jPTXskuL2KszIy5JIz0pSWNmhoTh\n++xoi4A8Lbt9+Q/dgEYweE5PSJ0/SzaOYe7n4Kq5Nt5Vc9ucJs8+b2k744WZyoQ2p/L6yqT9ld35H0oF\n6vqKp/X0FZvMaCq5tHh/pcPWg82KJ8Taa84c6v1wlnvS1JMg81RnXUlrnSSeZ9DfnZ/d8Kx4eXVREUj8\n5YqTnkdXh3osvRbqcfpuritIbMPpIzJaZ96pbTh90jP9+K5l6cdrzjCMglEwCogCAI55XNE;\n\nDEFINE LABEL 6\neJwLYGBgWGUV4M1iONn3kvb0gHnqsqHb5ErTGKS9y1glFds4JHZOc5c4t9RV8tY6BmmlLTUyj7d8lbu3\n8YFa3ayrWpndBRa5CZrWsqFrLfX6daxCVmla31r3xCZmw1z7mA3BzhFrgcYzRBZEBG5Oi2k6kHhuKVOi\n7MYDiYmbv6Ymbl6XIbvxamHbgtZyo0nfayLqlzcVJs9vPekm3f5c905bm5hC6xbO1GYtpuVNf/iWNwn6\nvGwsTF7afLIkoqNwIsjcxhXeZSeWMuRdXbAlNXL+llTV2Qx5OycbTfo3kWU+w8T5m+onLtn6e1LqtsQ5\nJxfxLnne2bycp3z3Kq24Has53Has1jOuXhWiULbmefTXNU1zQeaJ7ajLCdvxvPP6dvvZYTuc5z0+VZp2\n7Xxq1Mkr90J/3JoflnP/efTiR0Yp857U5cQ85SlXeTS9jmEUjIIhDgDshpMZ;\n\nDEFINE LABEL 7\neJxzYWBg6NC/pdJm4O3RZvA6jt3gVoOPXtNcoDDDRedbDYxetxo++12rzQrqr3gZdLTwXQBDnq13XQ6b\nR1N+r+u58knOMU3XHXP7rjv+mXHRmWORh/u5pbbe3ktA+vMyPqeIF5amVdR8TgHxZxSE+EUWXKu9m3dt\ndXT+/E2RBUpbQOJinWviBbrXxIPYDBPXxG+ctiFJY9b7RBB3z6TpAV69DHO4e72XePSdXAQSmz3vdU/n\nUq2eupXzW8zXXKoqW+Nc0LjiXLnQoued4QuMJkXOPzjnxvxrqy8vnL+pe4nsxsPLRVeD9C3YUpcjt3V+\nS8KWJVt59ljPWHM8oDL2rHMB7+W6HNub9rkf7rIUMoyCUTDCAADVUXXd;\n\n",
    "size": 13,
    "steps": 345,
    "successRatio": 1,
    "author": "FireGoblin"
  },
  {
    "levelNumber": 34,
    "path": "34-Vowel-Incinerator-13.323/19.157-AlanDeSmet.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 34-Vowel-Incinerator - SIZE 19/13 - SPEED 157/323 --\n\n    COMMENT  0\na:\nb:\nc:\nd:\ne:\nf:\n    INBOX   \n    COPYTO   9\n    SUB      0\n    JUMPZ    f\n    COPYFROM 9\n    SUB      1\n    JUMPZ    e\n    COPYFROM 9\n    SUB      2\n    JUMPZ    d\n    COPYFROM 9\n    SUB      3\n    JUMPZ    c\n    COPYFROM 9\n    SUB      4\n    JUMPZ    b\n    COPYFROM 9\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE COMMENT 0\neJzTYGBgYJaar8Es9d2SVVLUv0esKR8oxFBsflLCzthbys1AUsVHb41ht95eWxZDd9f3FifdnlubWarY\npugk206WV7P5Y/Pc2igFpGfG9j6ZW9teG9zaVpgM4gdd7JLMOtElueb4Wek3xzeY8F42s/S6UmntftXZ\nyf2qt0f/JdnQx6feJ4LUqj/skux40yTc9vaoaNvbLsnAl891V9//ns4wCkbBKKApAABQVDzN;\n\n",
    "size": 19,
    "steps": 172,
    "successRatio": 1,
    "author": "AlanDeSmet"
  },
  {
    "levelNumber": 34,
    "path": "34-Vowel-Incinerator-13.323/21.131-ocoss.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 34-Vowel-Incinerator - SIZE 21/13 - SPEED 131/323 --\n\n    COPYFROM 1\n    SUB      0\n    COPYTO   6\n    COPYFROM 4\n    SUB      3\n    COPYTO   7\na:\nb:\nc:\nd:\ne:\nf:\n    INBOX   \n    COPYTO   8\n    SUB      0\n    JUMPZ    f\n    SUB      6\n    JUMPZ    e\n    SUB      6\n    JUMPZ    d\n    SUB      7\n    JUMPZ    c\n    SUB      7\n    JUMPZ    b\n    COPYFROM 8\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE LABEL 0\neJzjY2BguJFVt7E6v6P+UdH39LlVCQ4sdUxm0o0mzmvaVFLv9LhOYetftQ6ojGFVqXtxRc2/8qnN7ysY\nRsEoGAXDAgAAAu0XUQ;\n\nDEFINE LABEL 6\neJzjZmBgaE4r9Y9MsSypS4pavDvZdunTVNuleg2S04FSDBPqF/osqruVmVr7/z/DKBgFo2DYAQC3GhHJ\n;\n\nDEFINE LABEL 7\neJwTYWBguNiyImZvydT51fnn9ujkPz59Kr/m0vnipkdXy8Oe+lWlPrnYInrzSOfMC3d6ZE+k953bw9Zf\nt3F737XV77oPzlHr5Jqxpk1y+tTmPzM0a5hWMoyCUTAKhhQAAIkqK6k;\n\nDEFINE LABEL 8\neJzjYWBg0E+KCLyclpuQV/JnxvIm/pNqnWy3gMIMa9q+p0+o76j/Uhi1mDXh46kzge7PGEbBKBgFwwoA\nAD9MFMU;\n\n",
    "size": 21,
    "steps": 142,
    "successRatio": 1,
    "author": "ocoss"
  },
  {
    "levelNumber": 35,
    "path": "35-Duplicate-Removal-17.167/13.219-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 13/17 - SPEED 219/167 --\n\n    JUMP     b\na:\n    COPYFROM [14]\n    OUTBOX  \nb:\nc:\n    BUMPUP   14\n    COPYTO   13\n    INBOX   \n    COPYTO   [14]\nd:\n    BUMPDN   13\n    JUMPZ    a\n    COPYFROM [14]\n    SUB      [13]\n    JUMPZ    c\n    JUMP     d\n\n\nDEFINE LABEL 13\neJxjZWBgEOtsyhfuirgNZDJEtesZM2AB8+14PBfZXvPXs0wIbzZUi76gsyQSJN4T+93ydeC9UFM/vcQ9\n3va5tt7nyn/6yDY/C/4x9Voky3zWhK7FX1NPLlLPtp8dnb9hwuSi2Y38JSyFgsVLIsULbwUtyL3ko5XF\n41mY7u3xNfWsJ8hM+bkszjkzTrq1980O5u59FOHVqxXn2l+YvGfSzoyYeTzlgYtkmwMXbZgwc7797MQ5\nbQt0Z5xcZDX55CK2/qPzBbqtZ2Bz/ygYBaMAOwAA3NBOcw;\n\nDEFINE LABEL 14\neJzjZ2BgmNTV5nKxKyIwtFNy3Z223D0KrUYHtBt/HC6uKzvUWv58+9mS+ZtEigRXiBQ5z7tUVDUdqIUh\nqMtdnIEMYLn6ZMmrDVo9CVt2Tpu7tXTKrW2pHZLb+yskt5emzd3a5EiMGUmnZwfPORuxFsTWOz5diRx3\njIJRMAogAACFRzEs;\n\n",
    "size": 13,
    "steps": 319,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 35,
    "path": "35-Duplicate-Removal-17.167/15.188-AlanDeSmet.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 15/17 - SPEED 188/167 --\n\n    COMMENT  1\na:\nb:\n    INBOX   \n    COPYTO   12\n    COPYFROM 14\n    COPYTO   13\nc:\n    BUMPDN   13\n    JUMPN    d\n    COPYFROM [13]\n    SUB      12\n    JUMPZ    b\n    JUMP     c\nd:\n    COMMENT  0\n    COPYFROM 12\n    COPYTO   [14]\n    OUTBOX  \n    BUMPUP   14\n    JUMP     a\n\n\nDEFINE COMMENT 0\neJxTYWBgSFE9mGekcKvht0zhRFuZ/mXmcqnbtJQZTi1Q674oriV4bYLOpWtc+peuORrxXt5kfvCUprXR\ngSc2EWuf2GR251meLGkw2pnRof85ZbL25xR59bocoJEMUhGzVRXCjMxeBm1IMvaP2bDFj+UsSHxHyt7s\nmuS92Z1xRwu1g+41N3l+ntTkuXNarbfzvB0pdScYRsEoGAV0BQD6Ijwf;\n\nDEFINE COMMENT 1\neJxzZmBgsJdW1NotY2ZpJeteDOQyrLA+K/3LhEf6lJ6gHI+eqOJZ3Ux9FsNSi7n23h6+rpJB3m5LIr3d\nchOuONXlPLJtK9pkzlEC0rfr0GR560NNjrsOnfUsOvo6DiS2+r69oNFde8Gdt5xF9t3wlqq/EaKw++Yj\nLfPbawwfPXJ3TXx8ySf94aOI/Ht6iZW33ifW31gTz3otNar9qmSQ0/WznuvulVo8ffhcV+lxiELKIxZR\nkJkmX46Kfv/kLFL9kUX0//uTEkzvBeUOvZuvYfPxvbHmjy73jB+zg9d+U4wo/vI8uu7D82igXNihd7eC\n6j6cdFv6U894/u8Unbl/ZqtK/z0rHfvnD9/DX5850n4acTCMglEwAgEAuZd4yg;\n\nDEFINE LABEL 12\neJxzZWBg6HcJqARSDL2u58rVbE6WbLDor/hlcqvB0eh1j4vh50kshk1zXQw5FlWb3NtoZrZix3uL93tj\n7XP3dLk9397uvmQrSO/LoMXa2kGCPusD1sRv8dPalRvIMv9ZcH+FbHhTfkjU3mze2D9ZTIlN+T9SAiq/\npkbUb04rnWKSZj/bKoV3aU3y9DW/kmU3gsxhqbhUdakoon5unlqnfN7rnrl51jOuFvIuPV98acXxsmur\nzWqnr3nTwLFIrdlsqlpzQqt247nyjCaGORlNshufNyltAZnBWBlSw1jZX2FXxVNeUN9fARJzmDi97t9E\n2WbbSe/7W/pFV++byDCnarJkw5apRwvXzNiZkTinMFlokX3uhUXOBQyjYBSMIAAADyh3Yg;\n\nDEFINE LABEL 13\neJxTZmBgaDYMqWEymr3ezSDgKpDLYGPiXVZm5lzw3sI+N8KRIU/YmaOk32V6Xb+LbHOws1bPLAejSaus\n6mZ9N62bBVK/0T/Au9z3ddxv7y2TLXwZ5hgEsMxfGcQyPynUegZIns9VMuhe2K0gEPtHSlfp7uTcvt3J\ndbN+JR/MK0utyjRK/54uXmidxUAlwLp857TGFbl9h5fLNrsvC6m5Pe9SVdbMWw2mU1M7yqdkdu+cvGFC\n1eS6WT8m9y8rmXpr3YdpRgdez2g7lz7r3GXZeYLXfJYIXmNace4ytdwzCkbBYAYAreZazg;\n\nDEFINE LABEL 14\neJwzYWBgcDP4nHJBZ0UXj579ybO6ev2n9G41OBqxFJqY1+Wo2Nbl8LlylDB7Clb99g6p0Qhe0bUkZOe0\nxyEci1YG/TgM1M7glOhe3BdTOmVi9Oz1F6IL9/fFmB/2ibU+5hX351hZat0Jo3TrY+rZuXvk82I2SBZ0\nLQ4rLJzIX3KuPLjIfvbkosdb+Et2HgGZY1h/rXZX9fQ1tVUMp/ZW8V7Objy3NKF1fktsW0R9aGdA5bnu\ne80efe4LD07ovrhn0vOnVZMvXdOdcWlF+qyj81NmcyyatuDWHYZRMApGAUkAAAaiX/w;\n\n",
    "size": 15,
    "steps": 325,
    "successRatio": 1,
    "author": "AlanDeSmet"
  },
  {
    "levelNumber": 35,
    "path": "35-Duplicate-Removal-17.167/16.157-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 16/17 - SPEED 157/167 --\n\n    INBOX   \n    COPYTO   [14]\na:\n    COPYFROM [14]\n    OUTBOX  \n    BUMPUP   14\nb:\n    COPYFROM 14\n    COPYTO   13\n    BUMPDN   13\n    INBOX   \n    COPYTO   [14]\nc:\n    SUB      [13]\n    JUMPZ    b\n    BUMPDN   13\n    JUMPN    a\n    COPYFROM [14]\n    JUMP     c\n\n\nDEFINE LABEL 13\neJxjZWBgEOtsyhfuirgNZDJEtesZM2AB8+14PBfZXvPXs0wIbzZUi76gsyQSJN4T+93ydeC9UFM/vcQ9\n3va5tt7nyn/6yDY/C/4x9Voky3zWhK7FX1NPLlLPtp8dnb9hwuSi2Y38JSyFgsVLIsULbwUtyL3ko5XF\n41mY7u3xNfWsJ8hM+bkszjkzTrq1980O5u59FOHVqxXn2l+YvGfSzoyYeTzlgYtkmwMXbZgwc7797MQ5\nbQt0Z5xcZDX55CK2/qPzBbqtZ2Bz/ygYBaMAOwAA3NBOcw;\n\nDEFINE LABEL 14\neJzjYWBguNYh6DO9Y0vqlc5LKyQ6NuyLbftxeGnz3uOb6v4cc64oO/Q0e8lWoDIGiY46AQY0sLzJLB1E\nF9S3ufT0NDmC2PFzz3rKzpsdLDtvZ8bCOXr9IDH+xYI+nktToyxXnyx5tUGrJ2HLzmlzt5ZOubUttUNy\ne3+F5PbStLlbIfoJgaTTs4PnnI1YC2LrHZ+uRIyeUTAKRgF2AACsWz4M;\n\n",
    "size": 16,
    "steps": 282,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 35,
    "path": "35-Duplicate-Removal-17.167/42.63-ocoss.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 42/17 - SPEED 63/167 --\n\n    INBOX   \n    COPYTO   0\n    OUTBOX  \n    COMMENT  0\na:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    a\n    COPYTO   1\n    COPYFROM 10\n    OUTBOX  \n    COMMENT  1\nb:\nc:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    c\n    SUB      1\n    JUMPZ    b\n    COPYTO   2\n    COPYFROM 10\n    OUTBOX  \n    COMMENT  2\nd:\ne:\nf:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    f\n    SUB      1\n    JUMPZ    e\n    SUB      2\n    JUMPZ    d\n    COPYTO   3\n    COPYFROM 10\n    OUTBOX  \n    COMMENT  3\ng:\nh:\ni:\nj:\n    INBOX   \n    COPYTO   10\n    SUB      0\n    JUMPZ    j\n    SUB      1\n    JUMPZ    i\n    SUB      2\n    JUMPZ    h\n    SUB      3\n    JUMPZ    g\n    COPYFROM 10\n    OUTBOX  \n\n\nDEFINE COMMENT 0\neJxjYWBg2Fui5tJanlr4pmrRfoZRMApGwYgCAL/hBjk;\n\nDEFINE COMMENT 1\neJzjZ2BgCMy9EllcIRu6tVY29FrH0aiA7pr49L6mfLZ++5b0voYJPT0XZqt16i170jx7fWv55AMsdRFH\nTs/zPMowCkbBKBjyAAAfsBuN;\n\nDEFINE COMMENT 2\neJwTZmBgeJ+7wdu256ynwcTJvisnRwSaTuUPa5l6NKplak38j8miaT09WqUWHQ8q0/tOdi/pfztzSf+m\nue+6mVZObb6z+0zD/r1+VYv2fyn8tZNhFIyCUTDkAACqnCdh;\n\nDEFINE COMMENT 3\neJzjYWBgeJVpHXwja1ntjaxNcx8VVSyUbmxb8Ltt01zG7k1zgdIM3u0rYrzbt5972c52i2EUjIJRMKwA\nAChjFjs;\n\nDEFINE LABEL 10\neJzjZWBgiMuYnxuY+7XjUdGSecUV+Zv0GnSOA4UZguvW5fhVKbatKr0w+32u2vbCdP6TdUm5lxlGwSgY\nBcMGAAAk1xZL;\n\n",
    "size": 42,
    "steps": 57,
    "successRatio": 0.03,
    "author": "ocoss"
  },
  {
    "levelNumber": 35,
    "path": "35-Duplicate-Removal-17.167/48.70-WolfWings.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 48/17 - SPEED 70/167 --\n\n    INBOX   \n    COPYTO   0\n    OUTBOX  \na:\n    INBOX   \n    COPYTO   1\n    SUB      0\n    JUMPZ    a\n    COPYFROM 1\n    OUTBOX  \nb:\nc:\n    INBOX   \n    COPYTO   2\n    SUB      0\n    JUMPZ    b\n    COPYFROM 2\n    SUB      1\n    JUMPZ    c\n    COPYFROM 2\n    OUTBOX  \nd:\ne:\nf:\n    INBOX   \n    COPYTO   3\n    SUB      0\n    JUMPZ    d\n    COPYFROM 3\n    SUB      1\n    JUMPZ    e\n    COPYFROM 3\n    SUB      2\n    JUMPZ    f\n    COPYFROM 3\n    OUTBOX  \ng:\nh:\ni:\nj:\n    INBOX   \n    COPYTO   4\n    SUB      0\n    JUMPZ    g\n    COPYFROM 4\n    SUB      1\n    JUMPZ    h\n    COPYFROM 4\n    SUB      2\n    JUMPZ    i\n    COPYFROM 4\n    SUB      3\n    JUMPZ    j\n    COPYFROM 4\n    OUTBOX  \nk:\n    INBOX   \n    INBOX   \n    JUMP     k\n\n",
    "size": 48,
    "steps": 74,
    "successRatio": 0.02,
    "author": "WolfWings"
  },
  {
    "levelNumber": 36,
    "path": "36-Alphabetizer-39.109/30.65-ocoss.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 36-Alphabetizer - SIZE 30/39 - SPEED 65/109 --\n\na:\n    INBOX   \n    JUMPZ    b\n    COPYTO   [23]\n    BUMPUP   23\n    JUMP     a\nb:\n    COPYTO   22\nc:\n    INBOX   \n    JUMPZ    k\n    COPYTO   20\n    SUB      [22]\n    JUMPZ    d\n    JUMPN    g\n    JUMP     e\nd:\n    COPYFROM 20\n    OUTBOX  \n    BUMPUP   22\n    SUB      23\n    JUMPZ    l\n    JUMP     c\ne:\nf:\n    COPYFROM [22]\n    OUTBOX  \n    BUMPUP   22\n    SUB      23\n    JUMPZ    i\n    JUMP     f\ng:\n    COPYFROM 20\nh:\n    OUTBOX  \n    INBOX   \n    JUMPZ    j\n    JUMP     h\ni:\nj:\nk:\nl:\n\n\nDEFINE LABEL 22\neJxjY2BgUKnQmCZY2bZgfeW5PUAuQ0Ll/FyGUTAKRsGIAABaCAeo;\n\nDEFINE LABEL 23\neJzjZWBgUM/+GK6ezVM+O/PO7tmZnkcts2RPvM99fDq9r/siUJqhcdFCH8+lhROvLnu66vByiBg24FfF\nU65Zk1ooVrsu53iNaNqbqpr4hMqZsQ3FK2IyC2ri7fJE01JyHlSK5DRM2JxjNnVB7p8ZDcX3ZrWWm02t\nbfBrBplh0bEux6JjTa9Fx/S60s6m/JO9H8PZ+nVCHk6QDV05eUUMSE3NPLZ0qfnZjRwLWDrkF6/pXb1k\nTa/K8uedNquyGz+tbcr/tHZvNsvalxmaq0XT5q0UTQPpcVn4MkN+sWPyzKUBSbjcPwpGwUgEAA6HYgc;\n\n",
    "size": 30,
    "steps": 54,
    "successRatio": 1,
    "author": "ocoss"
  },
  {
    "levelNumber": 36,
    "path": "36-Alphabetizer-39.109/31.74-albertferras.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 36-Alphabetizer - SIZE 31/39 - SPEED 74/109 --\n\n    COMMENT  4\na:\nb:\nc:\n    COMMENT  2\n    INBOX   \n    COPYTO   [23]\n    JUMPZ    e\n    BUMPUP   23\n    COPYTO   22\n    JUMP     c\n    COMMENT  0\nd:\n    COPYFROM [23]\n    OUTBOX  \n    BUMPDN   22\n    JUMPZ    h\n    BUMPUP   23\ne:\n    COPYTO   23\n    INBOX   \n    JUMPZ    i\n    COPYTO   24\n    SUB      [23]\n    JUMPZ    d\n    JUMPN    k\n    COMMENT  1\nf:\n    COPYFROM [23]\n    JUMPZ    g\n    OUTBOX  \n    BUMPUP   23\n    JUMP     f\n    COMMENT  5\ng:\nh:\ni:\nj:\n    INBOX   \n    JUMPZ    a\n    JUMP     j\n    COMMENT  3\nk:\n    COPYFROM 24\nl:\n    OUTBOX  \n    INBOX   \n    JUMPZ    b\n    JUMP     l\n\n\nDEFINE COMMENT 0\neJxjZWBg6FMM6n/TyT4h8bjFTJl34bMZRsEoGAUjBgAAIuoHlw;\n\nDEFINE COMMENT 1\neJyzZWBgYNL38LupK1AfoPe1473+hMnfTV2n+Fh3t4vayVZV2scl2tmf7NZ2KJwY4fJryjpPke4j3jta\nxPymlG31N0pJD0hyARrBcDR659o5UaEPQezyGP1GEB3QzeX1ou1RRGbD7vSZ5aUlUSU2NTPL/Zr1Jzxd\nBZL3XDo9cvoS1Uy+pfqNCcvn9s1fxT7hy3rFtstbppQVb9udLrSjvTpl18nu3t1z+wwOFE7cd2hu36tj\nR+v9TvwrZzz5KAJkxr5Ln5YKXGVZK3Jjwz7Gm/Jnjt0wvJx0/czdmVeKH387r/Fk0rl9j1JP5V8vP8l7\nFKQ+7opsFcMoGAWjAA4A5UFunw;\n\nDEFINE COMMENT 2\neJxLYWBgyFRmMOJUTc49qzJ1/iclaQ1plRCFFWqJ0le1nCTf66+RkjEJUfhuekFjpVmn6UqzRrcGU/4w\nPeMv8e/1CzLMNM/m3dTNqJQwjK777bFo1n/vqfOBRjIsD95c8SP0UpVQ9JSyqvim/J+pKxNM0h5FuKd+\nCDZI/usnFB3qaRK232urf0FGj19pSY/f0XrJwBe9y4PXT02I+r9AN2H5srqk5cseJ39aGpkit/hnqtcC\nkLnva+akHqs+kfS87ESSe6lRinxJf9aSgq8dugWS06ULBVfsKpq1WqDCf41IdceS1FqeOTX17BPCG98U\nuDRJTs9tPjinufU/2JyWqXeVX0ybbaMy/Wf24RkH5+yZNLevpv9Fb1ov+4TDHW9nCnZoz/PpuLx4Q6fB\nqrTeNZvOTQzeET9dfffGmfVbA2YLruiZDXFP61aB+nXbeOaU7xRcEbT76Srn/cdW7DvUPKPgcG5r4vEH\n84JO2y7NPPtp6dlztktzLkydz3Npbt++S6UlIL2MN9c637mVb7/7foSO8hMW0cNP63oYRsEooDMAAH8L\nuVg;\n\nDEFINE COMMENT 3\neJxzZGBgmGf72v2NzbboebbMLXb2apPuOjTPqHVaNIvL1WKmp0dQv5jf2bwqf8boxQHd7TuD9kx4FKw2\niTs0qN8rwq/ZLzqs6HbskTCxuEY3oFEM+1IvL25KZb0GYq9O29ECop+XHbfsqubyymxYGtLeIZxUNI27\n+FTd+qlzq/4vmFn+fSNIDfv61+731vpE3Vt7K7Nu/cea7A0C9T82tVd7bQ0r8tshnBS0O8klZdc9H81d\nNjW3d33tuL/XuHfXfpFu76MZlamnvsRXn9H02X7mhxPYDZc6lry+lrdu8023vXduyZ8Jvi1+d+GtCy+P\n3ah4f/XKow+Jxyc9VTvO9QikdsWF9mqGUTAKRjAAAMKfepk;\n\nDEFINE COMMENT 4\neJwzZmBg+G5qqdXpLWRZ5jPb5og3l1eRZ3rAHtcPwdesjoRNcNwWfcCDLV3F62e2itfCwlVuVQ2Sjg4d\nT8wcOgS0BeqB2hlM0oQsL6Ssdd6VFFZUl/R/AUispl9HX76FLV2izqGjpPLTUqXy1P0g8R+LGIyuLb9i\norP2iknnDiFL+z2zbVS3//U7skJ7HkjeaX5ybuRGiTwQ+8ZxVrv1xzR93A+5ZHMfmlK2+vDR+lfHmFvq\nz/s1fzu/uSLq4tm89qusdu1XCzJ+XZp2gmEUjIJRQDIAAHJ4U4M;\n\nDEFINE COMMENT 5\neJwrZmBg+Mudbz+D63lKLNfcvitc4bP/cnst8OP7v0BNVnI6UJqhmKcp/75wYNpzSaMUEF+Yz9mpQHKX\n3Q3ZGisQf79GVYOPtpBlmsHSED1j3YhwE/4wM8t8+yLL45ZFljY1IDWeHi96n7p1xa1yYzBa57nV6KO/\noXV6wA+nKv9QzyPe1sHGbktDQOoyEj6b7UpaWLgryaEDxDePfGZdnGlnBmJnFmQZLyn44TSxcL/XriIP\nP/mSv37Npfd8NtesMOdsOqS7vX6tc33R2bz7BbJVIPUBs+VNbs36Vw5iL1sgW9W69IxrwvIV5tkbZKu4\nNz1pNN/21091u4pDwvaH+iA1Bge62w0OrMuZenCBh9KRLGOLY+V6fid4dYNOTzOYdO6mg+GFyb4rLjyK\nqD5jH3/0RFzi2XO3MqMuylY9vlDV4HJ+RwvLme72xONfO3KA5oDMM3qwwEPvbqin1i0Pv/ar26JNLwem\nNV/iLv516Unj1Stz++ZeXz/1/c3mGax3mmdI35sw+ckDh464J7cyrz65Gnv1yZGwF4/TA5ofTfYFmRX+\nLtRz+kf+sGtf2NL1/2Yuivj3aSlIXPuV65T/X5+nuP2HxMUoGAWkAgBSDcVE;\n\nDEFINE LABEL 22\neJzzZ2BguGX7w0nd9p7PRhupA0Auw3/vlGk9fhYzp4RITi+OvD0pJbau536CfqNUYkblx/jSkvKYsKLL\n4WFFO4Nsat76rJ9a5rNlYbLvjfX3AqQOfAniPVocyXBKLI7h1Mf4aSfqkiwPgcxckOvXHJS3Yd+SgvVT\np5bsaFEqn9lUUsncIlLd3c5YM7cvtfby4oW1E/eA1M6aPkkleso7rZC+mw5r2hYWfmsy7g1vnDo/vHHD\nvm9NV87wtvbdjGvf92heV9oLkPrSmSe7rWZ+35g8S+qA3ZyHx0PmyZ/5Ml/+jOxChlNFy0S3dK74tHTj\nyl9TxFb/3su8JnU/+/q9O7k3PV31atvJbpB+7kNfO34eOjfd5PCGfSD+1IPZMSB6ydmtRn+vdsVJ3D5a\nz3l/y8InD6QOyD8UurjygcqNU7cnPWUYBaNgGAAAJB6ZMw;\n\nDEFINE LABEL 23\neJxjZWBguB0rkbcg9tBRIJPBIPm4JcMoGAWjYMQAAEfaBds;\n\nDEFINE LABEL 24\neJzTYGBgSPY1tP7tsfgwkMlQarMywdc7MC0hamEhiO+c9LFGKjFvXWz60Xq/bJfsvryuON0Cxuj6IqMU\nnlLZqrlVL7dtrik/ptcgOb2h6Uljc2ty7ou2n9lvOn/vBen/P0O/UWPWu0NWM6d//D+jeqXGrKP1kvOs\ng53m//WbvHCyr+fSTf7WK/nDTqyOS9RZ+zP745r7pdeWK7ZtnKk9z2za1PkMo2AUjAKaAgBNeEg/;\n\n",
    "size": 31,
    "steps": 66,
    "successRatio": 1,
    "author": "albertferras"
  },
  {
    "levelNumber": 36,
    "path": "36-Alphabetizer-39.109/35.75.obsolete-AlanDeSmet.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 36-Alphabetizer - SIZE 35/39 - SPEED 75/109 --\n\n-- This solution is superseded by 31.74-albertferras.asm being functionally same\n-- with further optimization.\n\n    COMMENT  4\na:\nb:\n    COPYFROM 23\n    COPYTO   22\nc:\n    INBOX   \n    COPYTO   [22]\n    JUMPZ    d\n    BUMPUP   22\n    JUMP     c\nd:\n    COMMENT  0\n    COPYFROM 23\n    COPYTO   22\ne:\n    COPYFROM [22]\n    JUMPZ    j\n    INBOX   \n    COPYTO   21\n    JUMPZ    a\n    SUB      [22]\n    JUMPZ    f\n    JUMPN    l\n    JUMP     g\nf:\n    COPYFROM 21\n    OUTBOX  \n    BUMPUP   22\n    JUMP     e\ng:\n    COMMENT  1\nh:\n    COPYFROM [22]\n    JUMPZ    i\n    OUTBOX  \n    BUMPUP   22\n    JUMP     h\ni:\nj:\nk:\n    INBOX   \n    JUMP     k\n    COMMENT  3\nl:\n    COMMENT  2\n    COPYFROM 21\n    OUTBOX  \nm:\n    INBOX   \n    JUMPZ    b\n    OUTBOX  \n    JUMP     m\n\n\nDEFINE COMMENT 0\neJwLZ2BgkBASrRUVjmnqF3Vf2CkesqpR6trq3TKCK0rkm+a+VQyoXK3EMOeFsuCKx6ohq2ZrTF4ZqOO+\n0M1gcjVQK8N5F9HaCEfR2gQ7yYZVVmt631junJZhzbHoka3oaknH2eu73GQ3/vYWXPHTx33hdl+jSeW+\nMU17vC9Vtbt7l/W7eJeBzLgXdq58Trhg1e1wyYaY8MkrZ0YsaReN4in3j2nKZ0g6mGeVcrQQpM6ypq2o\ntoqlsKOsrYi/pL8iuOhWQ3CRVs+E4j8z3MpvrWOsnL/JrPbeRr0G0dXaje4LtRsTWnMbJBs21V2qOlrO\nAjZDuYXBYVGLfe6TZtHaJ80ci0BifYsDvNmXeXv8XXnSbekmDrepOy75sO1bEvnz0ME8syPnyr8cYZlf\ncVhy3Z6DSltO7dHbG73t8wG5rZ8PJGzZsE99U+LmtE0Byxdt5l0atqNr8Zndgiu2H36+fdNRrV0Mo2AU\nDAEAAF0amCQ;\n\nDEFINE COMMENT 1\neJxjZWBgOF520OF42fywo+XWWRlNEbcZRsEoGAUjBgAAlX8IdA;\n\nDEFINE COMMENT 2\neJyTYmBgWJ0ZEaiSc8lHsLjPa2ttn5dCa0zItY7M2HPd39Pb+2Y3svUXTuzqnbySr2fJ1iudG/bJtVUd\nXdXIcIq/pOn03Lyqo0+zN+xTz1bbrpJzb+PcvJgNhypiNpTWJm5OaH2/92JX3QmnCYLXGEbBKBgFgxIA\nALPqM4E;\n\nDEFINE COMMENT 3\neJxjYBgFo2AUjGQAAAQEAAE;\n\nDEFINE COMMENT 4\neJwzZmBg2C2Ta2Qqv0JPSlNN11Nfz5jJyNqmzrjL/b9RiN889czYs7qlaQ1GRwurTS5V2Zgotv030upp\nM3jf3yM2eSVQO8O0SEWt8y6y6v0uKTq9roWmrh5HnQ968nhu9JcNTQ/ekrokRLRWIzihdX3A6x5nz70z\nQ53aFoD1Lfhjc3h5pfWRfZXWLPsZHLI3RNQbrsvsLl67ZTJInuNqpXX8mb22S04ddJhzdk289LkNSZcv\nGKUIXPqe7n+Jo+Tyhel10ufUOpec2jCh9EjVdIZRMApGAckAACnAUx0;\n\nDEFINE LABEL 21\neJxzZGBgyLY6V/7J/GQJk9HJEh69/opbGrMbl6k879RXLJ1SqFA3q1Dh3NJ1iqKr01VkN4Zpae0qMzM6\nIOZUuB+olcEgQFSxyN/Z6bOf3t7PfqnbVENEax+HCFbdDvcu64nlKGlMPFlSmXKpakN6Zndexo+pH9JX\n7ADpU265Vru8aXJ1QX1IjV1VQuvxMusZHWW8S93KI9b+rFbbrt24ZvfDlvd7hbve7/XtWbPbo+/xlpb+\n6Wv2TLpWu3Ny4cSdk3mX/p70eMu+iZ8PgMyb0ybb/G/ivWYQ+8Z82WbxBYIrbs9T2z57ntKW8AU/pl5e\n+LjtwqLpdZ1LOUqal7sXV64G+nnt5GrDddPrGEbBKBjBAAAzKXor;\n\nDEFINE LABEL 22\neJxTZ2Bg2GE6vW6rWcTarWa5r4BcBjMzjpL3Fgx5Nx2qMjndqzKdPRny/nmdLPnnldrB6LVhArPnlsls\nHj+mSjscnPPcumkuSI9UxHvjOeH29nPCjVJmRniXTYl63tkT+77/WLzRpMbEzO6/SbcaQOqM/QO8TdL6\nvEDswGKjFP4SrR7PssLko+WKEQ2VEYG1Vdf8VzVe85foiAlhGAWjYBTQHAAAToc78w;\n\nDEFINE LABEL 23\neJyTYWBg6C59Hj2jQDHifu7z6FeZZukf0g/mbU7jKf+aOr3ua6pWj0ma0ST9DJb5cXmZO/1K/hxzK7c/\nubX2z7EnzXp777TJbgzt1OsX6wypedhilr686X2ic8WKGKCxDDfbGRwUWkP8zGrvNfOXiK5+kXXpGsMo\nGAWjYFABAKoAM8A;\n\n",
    "size": 35,
    "steps": 66,
    "successRatio": 1,
    "type": "obsolete",
    "author": "AlanDeSmet"
  },
  {
    "levelNumber": 36,
    "path": "36-Alphabetizer-39.109/98.34-ocoss.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 36-Alphabetizer - SIZE 98/39 - SPEED 34/109 --\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    INBOX   \n    JUMPZ    a\n    COPYTO   2\n    INBOX   \n    COPYTO   3\n    INBOX   \n    JUMPZ    b\n    COPYTO   4\n    INBOX   \n    JUMP     f\n    COMMENT  0\na:\n    INBOX   \n    COPYTO   20\n    SUB      0\n    JUMPN    k\n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    JUMP     y\n    COMMENT  2\nb:\n    INBOX   \n    COPYTO   20\n    SUB      0\n    JUMPZ    d\n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \nc:\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    JUMP     x\nd:\n    COPYFROM 20\n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    JUMPZ    v\n    COPYTO   20\n    SUB      2\n    JUMPZ    e\n    JUMPN    l\n    JUMP     c\ne:\n    COPYFROM 20\n    OUTBOX  \n    INBOX   \n    COPYTO   20\n    SUB      3\n    JUMPN    m\n    COPYFROM 20\n    OUTBOX  \n    JUMP     w\n    COMMENT  1\nf:\n    INBOX   \n    COPYTO   20\n    SUB      0\n    JUMPN    n\n    COPYFROM 20\n    OUTBOX  \n    INBOX   \n    OUTBOX  \n    INBOX   \n    JUMPZ    u\n    COPYTO   20\n    SUB      2\n    JUMPZ    i\n    JUMPN    o\n    COPYFROM 2\n    OUTBOX  \ng:\n    COPYFROM 3\n    OUTBOX  \nh:\n    COPYFROM 4\n    OUTBOX  \n    JUMP     t\ni:\n    COPYFROM 20\n    OUTBOX  \n    INBOX   \n    COPYTO   20\n    SUB      3\n    JUMPZ    j\n    JUMPN    p\n    JUMP     g\nj:\n    COPYFROM 20\n    OUTBOX  \n    INBOX   \n    JUMPZ    s\n    COPYTO   20\n    COPYFROM 4\n    SUB      20\n    JUMPN    h\n    COMMENT  4\nk:\nl:\nm:\nn:\no:\np:\n    COPYFROM 20\nq:\n    OUTBOX  \n    INBOX   \n    JUMPZ    r\n    JUMP     q\n    COMMENT  3\nr:\ns:\nt:\nu:\nv:\nw:\nx:\ny:\n\n\nDEFINE COMMENT 0\neJwTZmBgMEnrigvMZQifUfYxfFHdipjlTQFJF1v2Ziu0Spc9aTZo5WwqnLi1NnMRT6n4jrDC/Xvv5m3Y\ndyp/8oFVpS0H0/v275WdtGj/5akRRxhGwSgYBUMOAAD2ayTa;\n\nDEFINE COMMENT 1\neJwTYmBgCK5LcAiuU0mtbXAv3tVoWfKuuyn/4QSt0mdTltUKTL/RJTC9YcKzKZLTj3Qumfekecm8rbVv\nZwK1MSyqe+1+reOXm/uUs54Mo2AUjIIhCQCkyCJP;\n\nDEFINE COMMENT 2\neJzjZmBgUM/mcEvJWejTl3epakdBR31qrUGrWmdVA1CKYX9rvn1B69NVv9u2n2MYBaNgFAw7AAD3zxHc\n;\n\nDEFINE COMMENT 3\neJyzZWBgUPbs7//obzZ1TbjZVK24/n79JJaO3clVDVwpWqUPEvdmv41xTG6PjEv8FhyXWO67LifBS6t0\nuvv0OjnXNb0NLvdmnXdhWrnKTW37FY/JB7p8PI8u9Pc86hoSccQ8csM+oPEMq0pF01yKXKfo5Dtv1cmX\nXy5ZcG+WS9HcvudlW2rWV2qV3qouLrhfPz/3d9v83GsdliVHOg9Xb+xSbNvYZTZ1VnvdRpAZG1bwlLss\n5Cn/MEex7cZMrhl/p39e+Xf6r52vZyzaHzTH+pjLQs+jv5Ys2p+4QnxH3fqDc1ZsLJw4dZNw+6xttkaz\ntm3wjtsal9i8+cLs5s1BWxhGwSgYBXAAAPx4dXM;\n\nDEFINE COMMENT 4\neJwzZ2BgKPflcJvu/mtnl8+vnUAug1bcnxlJ0ZmLzCPrNr6IEN9xLXLR/sNRLQcl4iOO1CWlH3ZP3bBv\ndqbz1rLsVevUs6MWr8v4M4MrRXL62SSuGSD9KhVcM1yKZq8PK/y1c2lhxJHJRfwnzxd/PNVa/vj0/8qP\npybUtxzMbny9a2oz08qpzd5Lljctmber8cJssdq3MwUr783aWzJ1Psgcg4khkyX6zu1Z0vb/P4iv0Pr/\nv0Jrx6eX7Y7XTvauWrekX355zqS2BZenZi66MVNwhejsoC3HZonv8J3xayf3ZIhfRsEoGAX4AQBoBG18\n;\n\nDEFINE LABEL 20\neJxjZ2BgmFzElh7bdmc3kMkwq100TbPGdQp74bk9DKNgFIyCYQ8A1eUJEA;\n\n",
    "size": 98,
    "steps": 31,
    "successRatio": 0.24,
    "author": "ocoss"
  },
  {
    "levelNumber": 37,
    "path": "37-Scavenger-Chain-8.63/32.20.exploit-WolfWings.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 37-Scavenger-Chain - SIZE 32/8 - SPEED 20/63 --\n\n-- This solution is an exploit. All it does is outbox a predetermined message,\n-- either ESCAPEAPE or APEESCAPE depending on whether 0 or 23 comes up first.\n\n    INBOX   \n    JUMPZ    a\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 10\n    OUTBOX  \n    COPYFROM 20\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 3\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 10\n    OUTBOX  \n    COPYFROM 20\nb:\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 10\n    OUTBOX  \n    COPYFROM 20\n    OUTBOX  \n\n",
    "size": 32,
    "steps": 21,
    "successRatio": 1,
    "type": "exploit",
    "author": "WolfWings"
  },
  {
    "levelNumber": 37,
    "path": "37-Scavenger-Chain-8.63/8.63-IAmWave.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 37-Scavenger-Chain - SIZE 8/8 - SPEED 63/63 --\n\na:\n    INBOX   \nb:\n    COPYTO   22\n    COPYFROM [22]\n    OUTBOX  \n    BUMPUP   22\n    COPYFROM [22]\n    JUMPN    a\n    JUMP     b\n\n\nDEFINE LABEL 22\neJxjZ2BgSK002VZQVTh9Um1F8qTaN5FAIQbdGiZ1hlEwCkbBsAcA+Z8I0g;\n\n",
    "size": 8,
    "steps": 63,
    "successRatio": 1,
    "author": "IAmWave"
  },
  {
    "levelNumber": 38,
    "path": "38-Digit-Exploder-30.165/105.133-Gimlao.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 105/30 - SPEED 133/165 --\n\n    COPYFROM 11\n    ADD      11\n    ADD      11\n    COPYTO   3\n    COPYFROM 10\n    ADD      10\n    ADD      10\n    COPYTO   6\n    COPYFROM 9\n    COPYTO   2\n    BUMPUP   2\n    BUMPUP   2\n    BUMPUP   2\n    ADD      2\n    COPYTO   5\n    ADD      2\n    COPYTO   8\na:\nb:\nc:\n    INBOX   \n    COPYTO   0\n    SUB      10\n    JUMPN    v\n    ADD      10\n    SUB      11\n    JUMPN    n\n    ADD      11\n    SUB      3\n    JUMPN    e\n    SUB      3\n    JUMPN    f\n    SUB      3\n    JUMPN    d\n    COPYTO   0\n    COPYFROM 8\n    OUTBOX  \n    JUMP     m\nd:\n    ADD      3\n    COPYTO   0\n    COPYFROM 5\n    JUMP     g\ne:\n    COPYFROM 9\n    JUMP     h\nf:\n    ADD      3\n    COPYTO   0\n    COPYFROM 2\ng:\nh:\n    COPYTO   1\n    COPYFROM 0\n    SUB      11\n    JUMPN    j\n    SUB      11\n    JUMPN    i\n    COPYTO   0\n    BUMPUP   1\n    BUMPUP   1\n    JUMP     k\ni:\n    ADD      11\n    COPYTO   0\n    BUMPUP   1\n    JUMP     l\nj:\n    ADD      11\n    COPYTO   0\n    COPYFROM 1\nk:\nl:\n    OUTBOX  \nm:\nn:\n    COPYFROM 0\n    SUB      6\n    JUMPN    p\n    SUB      6\n    JUMPN    q\n    SUB      6\n    JUMPN    o\n    COPYTO   0\n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\no:\n    ADD      6\n    COPYTO   0\n    COPYFROM 5\n    JUMP     r\np:\n    COPYFROM 9\n    JUMP     s\nq:\n    ADD      6\n    COPYTO   0\n    COPYFROM 2\nr:\ns:\n    COPYTO   4\n    COPYFROM 0\n    SUB      10\n    JUMPN    u\n    SUB      10\n    JUMPN    t\n    COPYTO   0\n    BUMPUP   4\n    BUMPUP   4\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     b\nt:\n    ADD      10\n    COPYTO   0\n    BUMPUP   4\nu:\n    COPYFROM 4\n    OUTBOX  \nv:\n    COPYFROM 0\n    OUTBOX  \n    JUMP     c\n\n",
    "size": 105,
    "steps": 187,
    "successRatio": 1,
    "author": "Gimlao"
  },
  {
    "levelNumber": 38,
    "path": "38-Digit-Exploder-30.165/24.817-Mygod.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 38-Digit-Exploder - SIZE 24/30 - SPEED 817/165 --\r\n\r\na:\r\n    INBOX   \r\n    COPYTO   0\r\n    COPYFROM 9\r\n    COPYTO   8\r\n    COPYTO   11\r\nb:\r\n    BUMPUP   11\r\n    COPYFROM 9\r\n    COPYTO   [11]\r\nc:\r\n    COPYFROM [8]\r\n    SUB      10\r\n    JUMPN    d\r\n    COPYTO   [8]\r\n    BUMPUP   [11]\r\n    JUMP     c\r\nd:\r\n    COPYFROM [11]\r\n    JUMPZ    e\r\n    BUMPUP   8\r\n    JUMP     b\r\ne:\r\n    COPYFROM 8\r\nf:\r\n    JUMPN    a\r\n    COPYFROM [8]\r\n    OUTBOX  \r\n    BUMPDN   8\r\n    JUMP     f\r\n\r\n\r\nDEFINE LABEL 8\r\neJxjY2BgqCqWbrhSPHGPYvHzy0Aug1iRhy0DEpgTzlHyIPR7ukLY9ACpiLOeU6JOuvHGdrn/TZIM+pWc\r\nmwBSM7XwoMOp0ibH/5Vd7l9qZUO/1BqlfK/ZmbG36k+WZ5l1VlihYsSlohA/v5KznmA7OlfoCXSv0Gvv\r\nq7Rm63d3be8L8QOJz5x/LzRm3r3Q+LmPIuTnbkiaOf9PVviCkyWy8yZXL54dUa81c3pdzoyQGoZRMApG\r\nAVUAAHxLR98;\r\n\r\nDEFINE LABEL 9\r\neJwTYmBgeNDiVKjSvS3dqndbesyEq5kLpq2rYJlh1cQyQ2Si2zSZxY+mdK760Se6ZV6b8/bCJtbNUQ1v\r\n5zM2GE/mbcxsfdAyvzy6QzmfYRSMglEwJAEAjE8gbQ;\r\n\r\nDEFINE LABEL 11\r\neJzjZmBgeFV6YL9z2bm5URVPsh7UTE990xqRGNCekXS660nW1gmRLZKTlCedmZS8k4HK4EdfYvHWCUYF\r\n1DZ3FIyCUUA8AAAmWBox;\r\n",
    "size": 24,
    "steps": 1425,
    "successRatio": 1,
    "author": "Mygod"
  },
  {
    "levelNumber": 38,
    "path": "38-Digit-Exploder-30.165/25.218-skwasjer.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 25/30 - SPEED 218/165 --\n\n    JUMP     c\na:\n    COPYFROM 6\n    OUTBOX  \n    BUMPDN   10\n    SUB      [10]\n    JUMPZ    e\n    BUMPUP   10\nb:\n    COPYFROM 3\n    OUTBOX  \nc:\n    INBOX   \n    COPYTO   3\n    SUB      10\n    COMMENT  0\n    JUMPN    b\n    COPYFROM 3\n    SUB      11\n    COMMENT  1\n    JUMPN    d\n    COMMENT  2\n    BUMPUP   10\nd:\n    COPYFROM 9\ne:\n    COPYTO   6\nf:\n    COPYFROM 3\n    SUB      [10]\n    JUMPN    a\n    COPYTO   3\n    BUMPUP   6\n    JUMP     f\n\n\nDEFINE COMMENT 0\neJxTYmBg+Jrq7PQj5aTb6dglkVlBB/O2+3aVFvlfqlqW3TQXKM1QXNfkuL7e3TW3QTb0TUNdztqGwokg\n8f8rrvmLLtyQFDNvb3biHO+ylNm3GhLnGE26Mf/gHJ8lbQsOrDg4R2Xz47a4rRH1s7adK5fczlIYvW1D\nkuKW+WHqmySDPq2d7Gu/8pKP44oQP4ZRMApGwYAAANhQP5E;\n\nDEFINE COMMENT 1\neJwzZGBgaElwdhKICfGz9vmTxenOUy7oItt8L6xpbktCwHKgNMP6+vfGeg32s0HsG/O9PVbObMpfM+Na\n7cqZWyarzmaYIzX/5KLJC90X8i45OOf/iuedlqv7KypXm6XvXpWb8H/Fo4i+xWc9QxZyuM2e1+YCMqNp\nf5f7/S17s5duCqlZuim1Y9Hmz5NmbeNYNGGX6Oo/B2evf3g6ZNXEi20LuK9Yz+C4mtvHcXV24+nLHCUT\nL5ql3z77PDrj5K2goqMhfn8OXvKZsOuaP8MoGAWjgGwAAAxQXyM;\n\nDEFINE COMMENT 2\neJxzY2BgCHUS9JnueM3fzrir9JReQiuXfmqHm8GKrvl2pVOmO1rPACphCIo+6NAXs3cmiP2zOiLweFlA\npWeZYht7udEkx0qGOdtrOBZpN3Ytlmtjmd/fbTa1acLjth+TecpLplZlbpuSGXuk/5LPxS531/mtR51X\nNXK4Gdaf9Syum+wLMu/rmlKLwEV7s0MW8pQLLZrdeHbx8862ZRsm7F5lNlV/vdnURZv1+mdsT2jl2XO0\n8PjeDUls++6Feuyd7HtlB4ND3FZrm9Ubqqy3rtlrCzLL/WqAd+qpnRnvjp0sMT56rXbT0YTW3OOZ3Y9P\nFU4UvWA21fVa6ZSvt3P7nj6MqE983Fak9HhDkvrDmJAPd896Vt5qc2m87u568kq/F8MoGAUjBAAA+7yC\nUg;\n\nDEFINE LABEL 3\neJzjYmBgKEw/6ZaXcclnRdbe7Fv5R+cHFstuPFtybbVdVWb3xzqjlPmtTY4Mo2AUjIJhCQCmBRK5;\n\nDEFINE LABEL 6\neJxjY2BgEC9MjZpaaJZ+vUB2I5DLEFb4SIsBCxCImbzyWPzJRSD2suzXcY9yjs5/mp3Q+jR7Z8ajnFtB\n8nmzg2/lp0bVVr3vN66zn63dmNuX3MJTntCql6jQGhMC0vd70pLILVPnh62cKRvKtfRe6KPNSyJB4tWr\nStPsV85vsVx9dP731Uu2YrN/FIyCUUB9AADq0jjY;\n\nDEFINE LABEL 9\neJwTY2BgSMzNNapM+WNzIo7DrS8mxC8oWi36QrR1Vmfctdrdybl9JWmfJ63IKp0yN0+vP6wwtYO/RLLB\nueJg3p+q+WH/Kzncmiv22p4q/Wx2tfC1QVr2Yu1PaYu1GUbBKBgFQwIAAMa0J5o;\n\nDEFINE LABEL 10\neJyTYmBgeJTj7jqjoG4WkMmwcuZJt2N9t4ICupdERnS8T4xt+5Ol0BpQKdf2uG1W+5pe356Dc9j6ORb9\nm+i95NuUrsW6M9oWpMyumxWycEk7/2LR2rOL3Yv7Fn9OCVk4P2zm/IhA+bmXfN5ND/BmGAWjYBQMSgAA\ni+Qxkw;\n\nDEFINE LABEL 11\neJwzZGBgqPLRM/7pc8knP6B0CpDL8L/S2kawOMD7esHs4Li8zynyeXU5s/Ov1YoXPm7jKS2d8r/Sfvba\nhr0zY9sKJ/L1KLZx9N1qcO0XrGKecLSQecLOjJZ+rTiOvtnBAd1nPaPamxzNar9b/q8stegoM7MEmf9r\nVZW1z5KjzuELQvzmzdWKi5+7JXXagmu1vEty+9yXmU39v2LvzM1rD85R31Q3S2Tn+/7e3akdHnun1znv\nN0tn2a8WzbMnxO/WNhbntE1/bPTX77BiGAWjYBSQDQD0pVdh;\n\n",
    "size": 25,
    "steps": 327,
    "successRatio": 1,
    "author": "skwasjer"
  },
  {
    "levelNumber": 38,
    "path": "38-Digit-Exploder-30.165/25.267-ocoss.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 25/30 - SPEED 267/165 --\n\na:\n    INBOX   \n    COPYTO   0\n    COPYTO   6\n    BUMPUP   10\nb:\nc:\n    COPYFROM 0\n    SUB      [10]\n    JUMPN    d\n    COPYTO   0\n    BUMPUP   9\n    JUMP     c\nd:\n    COPYFROM 6\n    SUB      [10]\n    JUMPN    e\n    COPYFROM 9\n    OUTBOX  \ne:\n    BUMPDN   10\n    SUB      10\n    COPYTO   9\n    COPYFROM [10]\n    JUMPZ    f\n    JUMP     b\nf:\n    COPYFROM 0\n    OUTBOX  \n    BUMPUP   10\n    JUMP     a\n\n\nDEFINE LABEL 0\neJzjZGBgWFW6pvd4zaa5F1uurQZyGQpasxsjmlg6rKs3zX1elriZYRSMglEwbAEAOIQPhw;\n\nDEFINE LABEL 6\neJwTYmBgOBG3LudRke1SzZpfO4Fchudlp7PySubnShb8K1eNmnwAJPayfdW6+d2fV6b3fV5pMDFx88QJ\n+/cydm8/96575oXXMx6fZqAQ8LVtmmvcorfsW1Pvhm9NHDv3t27Y196xYV9o/9T5EyeYTf0xeefalqnW\nx0yn1lxaOfnM3e19vK9sex6+edn+8A2ldo+CUTCSAQBsSUeM;\n\nDEFINE LABEL 9\neJxjY2BgEKstLqioMWitqBHfAeQyVNTc8WDAAfQaPobfr9cJ2Vpb6n+1fLLv+WLPoB0FR6NwqR8Fo2AU\nDG4AAI8KExs;\n\n",
    "size": 25,
    "steps": 353,
    "successRatio": 1,
    "author": "ocoss"
  },
  {
    "levelNumber": 38,
    "path": "38-Digit-Exploder-30.165/28.215-ekx.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 28/30 - SPEED 215/165 --\n\n    COMMENT  0\na:\n    COPYFROM 9\n    COPYTO   0\n    COPYTO   1\n    INBOX   \n    COPYTO   2\n    COMMENT  1\nb:\n    COPYFROM 2\n    SUB      11\n    JUMPN    c\n    COPYTO   2\n    BUMPUP   0\n    JUMP     b\nc:\nd:\n    COPYFROM 2\n    SUB      10\n    JUMPN    e\n    COPYTO   2\n    BUMPUP   1\n    JUMP     d\n    COMMENT  2\ne:\n    COPYFROM 0\n    JUMPZ    f\n    OUTBOX  \n    JUMP     g\nf:\n    COPYFROM 1\n    JUMPZ    h\ng:\n    COPYFROM 1\n    OUTBOX  \nh:\n    COPYFROM 2\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE COMMENT 0\neJyTYmBgWCLK6LhEdMUOIJOhRTG6sUVx7oYbij1LLivn9imphdflafqWH9Dyq0jUy+ndrN86f7P+rHUg\ntc6W3mXOlm0LQOxZFoI+IDrX841hrmdM036vuRtAfE3ngMq+mIBKhlEwCkbBoAQAIBUhTw;\n\nDEFINE COMMENT 1\neJzTZWBgSNT7Za2q+sv6gRyL8zQpQZ+FYgrh/qIaseFCXqXrBSPqowSb54ULTV4ZJDJ/k6vkhn1WslsO\nailvO1Sosfc4UDvDdcfUjufWqR1vLDO7nS1LJjtb9i51tJq38ZHtyp0d9qt3HXefuELCs3ORhGdOb65n\n6/wsrwnLU31mrE3yXbQFpL8t/pd1W3zr/JYECL+3Jr3rTUV61/vyrJ7vJf3Lvpcs2+5ZtnaPY+XmA0Vt\nEDtHwSgYBdQBAJNLTP4;\n\nDEFINE COMMENT 2\neJwTZ2BgmCnJ4TZTcsJyIJPhneQfm906f2xA7GlS1llKatZZIHagSXhdoEnNTBD7j7FsKIjutXUv7rUt\nn9prm9d/0yGu+aRbYFWuZ2DVfq/wuiTf5nkMo2AUjIJBDwAoIBxa;\n\nDEFINE LABEL 0\neJwzZmBgCBfi8Vwj1DQXyGTQZPlstlDss5mT1B+biTI8np3yugktiqG1LYq5fbcVamb2yE1Ybi89d8NC\nsSVb93Mv2QrSE6cf3xKnD2Hv0FUIB9ENTpENd+wjG+7bxbfct5uwvMN+1romx6Xbzrss3abgNnFFqVvh\nxJNuJy+cdzlz6Y/x6YsgPQxBSW0MQRv2gZjrA6SCQfTdOAaHu3Erd4LYttExTTXJMU0g9owKv4rrDRqx\n55vFApRbwuuk2yH2j4JRMApIAwDQx0n0;\n\nDEFINE LABEL 1\neJxzZmBgCBJhdQkSaZwDZDKUsr83Xi/4zshV8oVej9wLvTrlf3ZlaooR8upm6fLqaZ1ayj1L9BWnrZ4m\nNX/TGqGFm/n4Zq0r4OxaDNL738gpP9i4dT6IHWzM7gqiJTydCypcnfKrXFwKG5wSWhucsnquOBVMuOhc\nPOmgZ/nUPd65fak+kQ2pPjuPZHntO3He5dBpR6uDp0B6nSKts5wiy6eC2DMj/tqC6B0515V25NTNArEv\nJFtmMhVaZv4pMksHu71V0Ke0ldnpeNt3y4yuDybhEz6Y/Jv408p/Mpf7j8mSQT8mm6X7T3bKj+qPqM/o\nKpx4pqVtwcnWzkW5HV2LTedC/DAKRsFIAwDvTmTs;\n\nDEFINE LABEL 2\neJxzZWBgmCPx3niOROMcIJMhg+emsqn8LZUS9Q8mB7RYnHfryIby69pk52gFVJapxbd0yhdMmClZPvWH\naMW0nbwV07K4SyaD9LlZGKW4WZRPBbE9zTncQPROH/tcCU/bnCqXuOYql5LJBR6di3I9e5ZkePcsifUv\nmBAVEFq7PsA0bT2QXh7cPG9JyOYDQcHbD68P2HlEzn3nkQanbYesbdbuAZl1N04j9m5ccjuI3Rn3xhBE\nBxbfVg0sjmkCsUWyFCM8yxQjQOzYvoean6feVZs4667a49mPtHrmfDAxnyPkaztLKvjDNNnQvtkasaZz\n9ZNuzHcp1F0QWHV7XnTj49nJ7U4z0jr5etI6GUbBKBhBAADPZmbF;\n\nDEFINE LABEL 9\neJzTYmBgEOb5bvlC+rvlRJk/NusFY5qS+HqXsglOWP5MpnV+o1LTXKASBhHtmKatehH1m/Xdi4V0LDMP\na1pmFmo45ctoxDUf0CqZvEO3cc5aw67FgSZdi0HqnS3tc50tY5reWGb1vLF0LnhlZZKq6WySCpKL97PI\n2OljkZHhbZN9xCO+5YhH1fQM7/rZG/1rZq4MKpnsH5LZvSTEu+x3sFP+yiCb7KgAy0yGUTAKRgFNAACf\n4j64;\n\nDEFINE LABEL 10\neJxTZmBgeC0l6v9aavZ6IJNBmOer+WXlr+Zlap9MD2h9MgWJsRvk9K42yurxNotv+WQeUjPXPKAyzMit\nKE7fvXi3TkyTkE7Pkt06E1ewG8xYO9d81ro3ltPXgPRpOltmajpPWaXmUj+7yD268YhHUDWfr0thvJ9z\nwfoA54LQILei38EBlUtCIht+hLTOZxgFo2AU0B0AAJBHNHc;\n\nDEFINE LABEL 11\neJyLZGBgSOV9op3Ka5rGx+dWlMC/YR9QiOGB3DujB3KLtoDYO3ntc73E7XNB7DQdl8I0nQnLd+hOWRVp\nOGXVd9O2BW4WMU1uFk75IHlNZ8tMTee2BVUuef0KbsntYl7eZak+XqVsAUHVDEHRjUHBOb3Lg+duAKnN\nyQysUkoNrKpJDq9rTMzpbUloW3AjYeHmq4nLtlemrN1TmL5mt1D2jLXR+YUTIwsiGyILDJO58v7Zbc3V\niGXP9y1fW1AyeUVR/7KlxRNXgMwzrI9vaa3vWHi9YcWO6w3zNz2siWnSbszsLmornpTRVTwJpGblxIpp\n86ZWTHsxs3Dis1mZ3RNnpXYETUpuXzMhrz98QumU8AnT1yyftGz7vKkb9tnP3HygZf7mA1cXQMKEa21W\nj/iKrJ6Spc3zSpZOW523fOFm/tVLtm5eu2gL04b62f83RDeu3sDvvXpDeJ3f5tb5izZPX/Nly9JtDKNg\nFAxiAAADVZuv;\n\n",
    "size": 28,
    "steps": 300,
    "successRatio": 1,
    "author": "ekx"
  },
  {
    "levelNumber": 39,
    "path": "39-Re-Coordinator-14.76/14.73-FireGoblin.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 39-Re-Coordinator - SIZE 14/14 - SPEED 73/76 --\n\n    JUMP     b\n    COMMENT  2\na:\n    ADD      15\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COMMENT  1\nb:\n    COPYFROM 14\n    COPYTO   1\n    INBOX   \n    COMMENT  0\nc:\n    SUB      15\n    JUMPN    a\n    COPYTO   0\n    BUMPUP   1\n    COPYFROM 0\n    JUMP     c\n\n\nDEFINE COMMENT 0\neJxzYGBg2CnL4vxDNiHcVkav31YmYHmNjNauSlnrY6byTaeNFFjOvlaqO8FiKNlgZlaV+dxaMWKufUTg\ndcdr/lOdYkKuOL2OE3M6mJdg92PqHfvSKR7uEfX5AVpxqSGzg29EhPiJRsmGTok6WhgSNbtxZkTTXKB1\nDLfyX8c9zU4IN0qXDd2c9nmSUXr/Mp3MFTuWZX8+IJ9Xdki88POB5grJdfNbY5pSm2M2KLdk7lRo1doF\n0lu3UrDKfuX8TTaruhaD+NkbdvCA6K49XaUee2c3euzdO/PjUeeCZyc3JM05mxolfFExgvfyo4iTVzJj\nXa+VpjVe5yixv7Gkfd+Nprn2Nwr3M4yCUTDCAQBDvG6a;\n\nDEFINE COMMENT 1\neJxzY2BgWGuZGtVm8D3dU98+l92Ao8TR6FKVpvX7/ic2dbOW2jTNtTERXAFUxpAeHFF/LTKiniFJsGpF\nFkNeSk5V5qOczykqObkJeRnPo3+kqEUzJb6Oux3eVZofUDhxo3/dLIOArsUrg66tvhd2a93pWMl1IHPm\ntM0OjpkXEwJiL5u1wWTNDA63gxN4yo/1qXV69fYv8+ibvgYkV73KOqt61Y+plqsZ5mxYx7t09Qbepcmb\nORZd2mk0qeFAW1HtwQ0Tag/eApvZeJ2j5OD1x23M13dO87qitv3ixZ1HJM63nZM9239F4YzPpXtnGE5N\nP6+1y/6G2dTPd5a0r3wg2aD0eHrd3SfXamOe3mue92RJ+4LHK7oyH6zpXXevcCLDKBgFIwQAAEbfhMk;\n\nDEFINE COMMENT 2\neJwzZGBg6HWdHtDl9jz6pNufrF7Xa7XnXboWf/YTrEoK3ZJ6LiYh/Ffy9ICwwmv+3aWzg0+VPo8GamGQ\naztXfnduf4XQoq5S9mX2uUwrjFIcV6RGuSyf7Ht6CYfbxEVHnVVnSwbx9XiXxbat6Fre1DT3ZeP0NUub\nl2y907Zmd1dv4f7PUzfsA5m16xCHW+mRyb4FxyICl5+cHdx4PSHc/LZsKEhO+OJs1csXvlvOOfs+8eWJ\n9/16x0VXrz/2fm/uceczy0+euzz/jOA1hlEwCkYB2QAA+UpfuQ;\n\nDEFINE LABEL 0\neJyzZ2BgaDZ0d20zOOsZqCPbfEuj7JCItujqQ4bT68zMvqdnWz2KmG93zV/Qhcfzm+9Jt9eBZz2XhIT4\nPQidHfwgVC0aqJ0hLTumSbnlVkNER0iNcFdX6aQu+1yxTr1EubbZwasau9y319TZ/a+0tw8sTgh/lXmv\n+Wsqw5zdyZLrbJLf792RYn/SKL3tnHq2+/mrhW3nDlXYnwSZGTlfK058wZ+smfNXdC2ePX/TuulHz/Yt\nPlnSvFwt2nyNoM+GdWc9Mzee9Vy0ebLv3K0J4bO2bUmN3natNmHLlsmaGwOWz91aN+vb4S2pb44/j1Y+\nvSRS9qxWnPS5uhzpczFN8WcOznlzfMUOhlEwCkYBAwBnS3fJ;\n\nDEFINE LABEL 1\neJzTZWBgkIjcmfE68E/WHu9z5V1uj9smOW+ZPN3RfWG0w+z1sxyMDog5OZ8RdDl3uctN9Caz57WbVT6T\nr+cGup9XCNtycGK05Drz1Ij6dRmFyasz+710Mo3MCtMlVXakvO/fnXzuMtB4hvmtglWLWnZOe1/fds6w\nXvLO+nrRmyDxax3OIiDaaJp78esZS9pnz/txmH9xxG3PpbL3WZffulO3UvDa842vd/08xFGy6kRuguzZ\n+WH9l0T9GUbBKBgFVAMATANS9w;\n\nDEFINE LABEL 14\neJyzYmBgkNHINbqgs8W82NzaZoU1g8NUJ0EfQZdbQQEujyKCnbXiZjkYpayw3pttY+JdJq+e0PpWMbdv\ns7z1jHWKdbPm2rsvBBrBcC6GIe9XslacVcqSyN3JsqHu8Zd8hKLPes4LE/R5GTQ7uMi/NO2nT0jNHu8t\nk2u9RVdX+azY8dlPb+/LoPd7Y8JX7ACZIVLE4ACig4vaXCYXrYgRKdqZsSBXse1RjtEkx0qz9OI6xYjk\nFkGfKZ3eHl293h71E0P8QOo9l3K43Z37PnHlzP6K35O6FttOkly3ZWrIqvRZB+fcmJ/Z3bhiZwbDKBgF\nowArAAAlCl0r;\n\nDEFINE LABEL 15\neJyzZ2Bg0LOUVGEyilE7pbdYO1DnvfEMzSbHBWoxIctUtqTqKr3u2ajQdHqb3LnLQKUMosK5fedES6cc\nlrSeUSJfNytRzX72Kb0/MypMS6eA5FdnepeZpDXl/02yzz0Wz5DnE9tWJBQ9uVohrG7W45Bb6xaG3ts4\nM0J2o3kqy/xl2Xr9C3IV2+bmXasF6TWsv9VQUK+3N7dh55GMJoZTyi0Mp2a17zyyc3LIqtczfkxNmX2r\nYfHsc+Wqsz9PWjx7yValOZk7wfrWWWeB6MJ1f7I2rJvdaLiuavqGdXWzHm3O7GbbZ5RSe/B5tPHRhPBV\nJ+6FPjydEH7z3PNoryt7sxlGwSgYBQwApxJwQA;\n\n",
    "size": 14,
    "steps": 76,
    "successRatio": 1,
    "author": "FireGoblin"
  },
  {
    "levelNumber": 39,
    "path": "39-Re-Coordinator-14.76/35.44-Otto42.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 39-Re-Coordinator - SIZE 35/14 - SPEED 44/76 --\n\n    INBOX   \na:\nb:\nc:\nd:\n    SUB      15\n    JUMPN    g\n    SUB      15\n    JUMPN    f\n    SUB      15\n    JUMPN    e\n    COMMENT  0\n    OUTBOX  \n    BUMPDN   15\n    OUTBOX  \n    BUMPUP   15\n    INBOX   \n    JUMP     b\ne:\n    COMMENT  1\n    ADD      15\n    OUTBOX  \n    BUMPUP   14\n    BUMPUP   14\n    OUTBOX  \n    BUMPDN   14\n    BUMPDN   14\n    INBOX   \n    JUMP     a\nf:\n    COMMENT  2\n    ADD      15\n    OUTBOX  \n    BUMPUP   14\n    OUTBOX  \n    BUMPDN   14\n    INBOX   \n    JUMP     c\ng:\n    COMMENT  3\n    ADD      15\n    OUTBOX  \n    COPYFROM 14\n    OUTBOX  \n    INBOX   \n    JUMP     d\n\n\nDEFINE COMMENT 0\neJwTZGBg2FZ83vFeuaetVF2iTVHzPOd3LXe8rFoZgxe1zA+bVv8yrazCuFyszLh8WaVxeVDNpSqnpq4J\ncY0/pt4rT1tXlbtkK8MoGAWjYMgCABLiHv8;\n\nDEFINE COMMENT 1\neJzjZ2BguJX/3OFZiaetUKOBXVHzPGer1jtedR1H4sQ6j7UYdbzu4WpZP+Na1YOVz0oerPxVtn51VI/f\n+kXT/dYzjIJRMAqGPAAA6tAd0g;\n\nDEFINE COMMENT 2\neJzjZWBguFSkFn2oYkforabtTvuabd2tWguy21pl5oW1OO10agq4ClTCkFVsfq2riv3Grr6TFxhGwSgY\nBcMGAAACbBX/;\n\nDEFINE COMMENT 3\neJwTZWBgmFb/xXNZ5YvgdWVfY/xKLqYvKmSq3FeQ2sFVKDMvq7h+rVgZ66agmj1b2lr3bDHquLL5XpfZ\nhl19lxfM6/8xla0/taOsOzzHr/1rjFNTe/i1KsZghlEwCkbBkAEA/98oyg;\n\nDEFINE LABEL 14\neJwTY2BgOF722Syw+Lvl0+w+L51MyaAP6UsijdI3JL3NEKzKzHrcppKT29dabj3DsqZu1svGvTPnt1ZN\nn95ROJGvZ36Lb49g1cWuNfH3WrvcF7W4uxbUszhbV/+xYRgFo2AUDAkAAJ/ZKII;\n\nDEFINE LABEL 15\neJyTYmBgyMuYrVqYnqBpkrbBpCUhxE8oekvqg1Ce8tSQ2Y3rA3L7PvtZz/jsd3DO+oCj85eEHJ1vkvZj\nqnNF4USgVoavqY+0tqU+1y1M5/HckO5evDpTsW1F1s5pWlkhq1Zk9V9ZnSl7/1Vm5nOGUTAKRsGgBAAX\nji7h;\n\n",
    "size": 35,
    "steps": 45,
    "successRatio": 1,
    "author": "Otto42"
  },
  {
    "levelNumber": 40,
    "path": "40-Prime-Factory-28.399/127.54.specific-WolfWings.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 40-Prime-Factory - SIZE 127/28 - SPEED 54/399 --\n\n-- This solution is level-specific (quality-limited input) and assumes inbox\n-- item values of 25 or less due to largest prime factor, excluding the item\n-- itself, being 11. (26 = 2 * 13)\n\n    BUMPUP   24\n    COPYTO   23\n    BUMPUP   23\n    COPYTO   22\n    BUMPUP   22\n    ADD      23\n    COPYTO   21\n    ADD      21\n    COPYTO   20\n    BUMPUP   20\na:\nb:\nc:\nd:\ne:\nf:\ng:\nh:\ni:\nj:\nk:\nl:\nm:\nn:\no:\n    INBOX   \n    SUB      20\n    JUMPN    ab\n    SUB      21\n    JUMPN    u\n    SUB      22\n    JUMPN    q\n    SUB      24\n    JUMPN    p\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 21\n    OUTBOX  \n    JUMP     a\np:\n    COPYFROM 20\n    ADD      20\n    SUB      22\n    OUTBOX  \n    JUMP     o\nq:\n    ADD      24\n    JUMPN    s\n    COPYFROM 23\n    OUTBOX  \nr:\n    COPYFROM 22\n    OUTBOX  \n    COPYFROM 22\n    OUTBOX  \n    JUMP     g\ns:\n    ADD      24\n    JUMPN    t\n    COPYFROM 20\n    ADD      22\n    ADD      22\n    OUTBOX  \n    JUMP     n\nt:\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    JUMP     m\nu:\n    ADD      22\n    JUMPN    x\n    SUB      24\n    JUMPN    w\n    SUB      24\n    JUMPN    v\n    COPYFROM 22\n    OUTBOX  \n    COPYFROM 21\n    OUTBOX  \n    JUMP     l\nv:\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    ADD      21\n    OUTBOX  \n    JUMP     k\nw:\n    COPYFROM 20\n    ADD      23\n    OUTBOX  \n    JUMP     j\nx:\n    ADD      24\n    JUMPN    aa\n    COPYFROM 23\n    OUTBOX  \ny:\n    COPYFROM 23\n    OUTBOX  \nz:\n    COPYFROM 22\n    OUTBOX  \n    JUMP     c\naa:\n    COPYFROM 20\n    OUTBOX  \n    JUMP     i\nab:\n    ADD      21\n    JUMPN    af\n    SUB      22\n    JUMPN    ac\n    SUB      24\n    JUMPN    r\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 21\n    OUTBOX  \n    JUMP     h\nac:\n    ADD      24\n    JUMPN    ae\n    COPYFROM 23\n    OUTBOX  \nad:\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    JUMP     d\nae:\n    ADD      24\n    JUMPN    y\n    COPYFROM 21\n    ADD      23\n    OUTBOX  \n    JUMP     f\naf:\n    ADD      22\n    JUMPN    ag\n    SUB      24\n    JUMPN    z\n    SUB      24\n    JUMPN    ad\n    COPYFROM 21\n    OUTBOX  \n    JUMP     e\nag:\n    ADD      22\n    OUTBOX  \n    JUMP     b\n\n\nDEFINE LABEL 20\neJzjYGBgMEp/bWCUfjBvd/K5y0Auw5uG1wYZTVtSM5p2HmEgElzrqDtxrrvskEff8+1H+gOWu/Zbz3jY\n0l+R0cRRUlzHUshSwVJIrFmjYBSMAvoBAG1NHvg;\n\nDEFINE LABEL 21\neJwTYmBg0JqZqa87I9eIpSLXiL8kU39C8XvjCcXXav9XepdlNx4tdJjoXLBz8smSbVOu1W6b0jR3zyTZ\njUf61+wO6tp5JKF17/GphfYnGUbBKBgFQxIAAGlqIpc;\n\nDEFINE LABEL 22\neJwTZ2Bg2JxWaGqU/tpAK+u5LmNlpv7P6lyj500MDhEds4MjOtSiY9vM0t80nCv/UxXT9KbhXnNyy+ue\nax0Mc0I7p6+J6FDacqdtxY7nTUYHqqv3Hl+WbX/yQOLOIyfithxkGAWjYBQMegAADh4tmg;\n\nDEFINE LABEL 23\neJwTZGBg2JB+L3R15iWfZdneHr0le22rq/fa5jacdHvZeMknuaU0LbVZtLag3nne/8rXuxgr/xz7X8lw\n6mUjy9nQTpaza2Z0X2QYBaNgFAxZAAAROCHS;\n\nDEFINE LABEL 24\neJxjY2BgqK7eYPKxLiIwu7Gr9Emz95Lklum3GJDA5Nbbpgc6pznp9xj6/ug7mvGjj3eRZJfNCde2HRcm\n1ZreZKwwvZlfxHbNL3/leZ2cf4e5Mnes5cosnL4nc0bHiSyrJpAZX/Kur9/SYFRwoHNtKMMoGAWjYNAA\nAK/vMXQ;\n\n",
    "size": 127,
    "steps": 55,
    "successRatio": 0.32,
    "type": "specific",
    "author": "WolfWings"
  },
  {
    "levelNumber": 40,
    "path": "40-Prime-Factory-28.399/23.474-IAmWave.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 40-Prime-Factory - SIZE 23/28 - SPEED 474/399 --\n\n    COPYFROM 24\na:\n    COPYTO   5\n    BUMPUP   5\n    INBOX   \n    COPYTO   0\n    COMMENT  0\nb:\n    BUMPUP   5\nc:\n    COPYFROM 24\n    COPYTO   1\n    BUMPDN   0\n    COMMENT  3\n    JUMPZ    a\n    BUMPUP   0\nd:\n    SUB      5\n    COMMENT  1\n    JUMPN    b\n    COPYTO   2\n    BUMPUP   1\n    COPYFROM 2\n    JUMPZ    e\n    JUMP     d\ne:\n    COMMENT  2\n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 1\n    COPYTO   0\n    JUMP     c\n\n\nDEFINE COMMENT 0\neJyrZmBgaOMNmqrLG1ikyzujYxLf+tmT+Ip23ecV3dLGe25uG++1Hgu+zNYowYKSQmGnwnZRp8Lv4gUl\naVJ3q1VktnfVyhxfd1paZWuh9IyOazJ/agMV+ssklQtKOlX7ywI1/tSyaL6dv02zcuU2zYV7gVYx7HBk\nzv1t/yTLyPZJ1mEr5lxbs4ZSNZNrPfUmvItszSpXbrfcsbbbdsfaRfZZK3Y47p+T5eQ8Jcupv0zQyarp\nsNPyTmPX/XMWu1euXOcxYzXIvDsh88tnhj3t9Q7PWvEpTHQLSCwnaJoTiFZINtm2O7Fxxu7EwKLdiVZN\neUnXevKSKtq0U/rLHNOcCjdmKOdfzjYqMM9NLJ6dd7eaoWB5J3ehylaQXqve/XM6elgm1Hb/Mpfs2qII\nErsx+2iGzdxlaUHzl6VtX3A049DCJ1k3F/eXGS152nt2UdK07QsWzKqfvWDWz2kiE92mHeueMrW/7Oc0\np8Izs45mgPRnb9SKm7FVKvb27owk731Psv7ucyoM21/R1rvnaa/m7q99dltFJq5dzzLBbu32LqM1Xs03\nVwcW2a39ks22YVs6SH//Gebc5Avey45ffLbh+EWbE5WX2K6BxM3OVCS3nN4b1n9mbWjL5b1hEde5Y/Jv\nZiRdviWcJ3ZzXcXLK9qNXBesmhhGwSjAAgDrhtxG;\n\nDEFINE COMMENT 1\neJxrYWBgSOVKmsbN9bZmOceyNG4ur+aT3CwTxLmPdYtzOxWe5L6aWc2zLK2Nd3pqqlB7ylWRJ1nfxe9W\n80ot79wvVTgdqJ3htPL01EANrTgpbanYqXpSsSyGEYklxsy5aiY89WomkS3bDWd0dOke6+bXOtb9Vm1G\nxwGlgpIDSkcz6lTaU0D6Dzvtq2RzvBMBYhu7asUtsueOUbeRigXxZZxFJso4n60CsZtjpqeKRB3N4IgU\nzlsf0V+2PuJP7cXor30+8caTkxJZJogmbe/KS2oo5UxkzuVMXJZWmTy/fGPG016Q3nltE2ZatR7rbm85\nWyXRND11S0NCwJaGrS56LbdNeTvnGqp0zzV82xthB1L7pvVohn/9sjQQm3/mtvTOKcvSiicJ552ZZNXU\nOeVY9+rpzlOkZjlPMZzztc9mbmarzdz+MsM5RgWGc+aX28y9W12yaEaH0RKRibZLjSeDzHi6paJt7fqO\ndqM1Vk3qq3nqs1YmFmetXJZ2c7VnwqJ13DFsG7hjZmy9mvlxq3AeSP3zI29rtA63p2gd/h0F4m847pkQ\ntj8iEcSuvDQvhOtGfqDO7TeRznevZjrfTSy+fMuqKflGR/uEKxVtohfvVoefdyrceD4isfKSZTxID8+L\nhtKo5+0pc5/2BfO8UM4veDm//ORL7Ubxl0+ylF9FJFq+eRO58t3a0Iefz4YzjIIRBwDTMtna;\n\nDEFINE COMMENT 2\neJwLYWBg8LRfuNfW7tmGTCvL+EwrJZ9z1ltdbO0i7LKcJK1uuUTYhXokBACVMax1eNrraf+1D8TOjeKp\nT4q8W70k/GyVcNDZqj/+f2qf+Wa2nvcWmSjr/Xb+eW/rpV7+x9cJBz3b8Dz0+vq/4Z2rdkfyLjoWNaPj\nWFTSNMe4bxtB5twvWbEmpfDZhpe5zzZUZR9fl5xZuXJ22v45/anGk/tTM1sd03jqN2Y0lFZlBxbNzgss\nWp6fWJxf9KcWpDe64/r6gPaCEhD7YY90Q02zdINLnVUTiM8/8271jdmJxawLjArqFxeULFz2tkZw5YyO\nwyuNJ7OuuDfPY5n10vrFM1b/nHd8ndrs4+tYZlSuXDCNd5HbNJYJq6ffrZaata4CZI7d1uPrjLcUTjfe\nsq+ycXNgEUjszzaWCX+2XesR2unVrLn7T23Y/vnliQfWVew6cLeaYRSMgiEGAJZmmJs;\n\nDEFINE COMMENT 3\neJxzZmBg6LbdV7ndcn65oem6ikNGd6uDDLya3+ktmLVAX2ZxrGHnqnqTZxs8zEW3nLMW3WJrt2Ptb3vr\npTscj3UfdrriVua81BloBMNHP6umP/7ajcJB+yqbQvrLRKL6y+7EnK36HJfZ6hNfOP1FrMzi3KgVa9ZH\nHF+XGHh8nZf/ijW3ff4uaPJRnvTMd0bH+gCeerngtzUgs05k3ZuXl3Wtpyq7oORytnSDYvbxdYrZfxdc\nzg6a6pRn1RRZcLf6a9m+Sp5KnnrxqsxW8aoda0H60joLpzNPKJwuOelaj+Qkr+atE+5W13YnFvN2FpSs\nbJ9frtfi1azcbDxZuXn/nO9tK9akdV5fv3XCsw2Sk66vr5s8YzXDKBgFIxAAAIdFfOU;\n\nDEFINE LABEL 0\neJyTYGBgmOE3cc8Mv+1di/3f1oQGGPruCpS0Eg5S1ARKMQgHzQuRCzb0rYi+beoTv9boS9oe49YcC5vZ\neVtd/PIfuzMUrA1lKLia6ZR3bu6EXOulE3KfbWjNmbinNUf2mE7Ou0MMo2AUjIJBDQDCnydN;\n\nDEFINE LABEL 1\neJzTZ2BgWOwetfyDW9I0T/f+sqeue8OAQgye7l+yZb09E+z9fkeFBtyJkAu+EzEzjDsmLKIi+ViUdqN8\ntM4SkDrfdLmXE3I37NtbqDyJp9Iy/kGNh61/vYP2/sYlCjXNP0WUm08LFjZxioHUWk998MRgitj1zikb\n9vFNfNq7dUJg0fw+7pgffXciiiflB/6c5ugnNcvRz31efqDa4jeR05ZWJP9aFli0cFlma/1ikYmZC52n\n/JwXNHXbjKCpj6awTGAYBaNgFFAMAGxnUHc;\n\nDEFINE LABEL 2\neJwLYGBgCJDwXuYirjzptdjd6u/i19evlJgw87S0VdND2bc1Kirzy6eo7atcpWHVtE3za982zXvzDmpV\nrgRqY9BwmTDzvPO+ykYX48l2bjKL7dw6Vz11dZ7C7mnVVOb9p3ax/9kqueCKtqYQmcV3QrZ39YVGtuRG\nravwie8v250o3XApOWsFyJzZefPLq4qdCr+WORXyVDaUnqx6W3OlOrO1utp5ysmqCTNflcosZih4O392\n3v45OjnKky5nWzXNzltXEVkwvxykv6NHOT+6w6jgavPd6qvNma0PWownu7YtmHW6y3qpfo/3sh993sv4\nJvIuOjDx3NziSW9rtk6ISIyZoKgJ0vt0zYMn6qvvH2xYrZxvtOZLdvyGoxmNm49m/Nn2JTt7p1FB7x6r\npt49He2au7/2se9wntK4uXA624bC6TdXG09+ukZ5EsMQBg1b7HPdNkXUJ2/e22S3Va/fe4/kdJB402l3\nceXTt1RST8mqK5/ea3vk1ApXtlM8nkdOWQfPP6MWHXt2Z8bD0035889E1Eufu9csfDFmpuu1+bN33rKe\nIXH72hSQGfsPuMfsP/Ao4uehg+EvTxwMVz7NEmVwSS26/HZMyMD6ehSgAwD0j9Bf;\n\nDEFINE LABEL 5\neJwTZGBgWJ6fffpLXtEup7yIxAm5fcFOeQ7aKYVM6vdLmNSvVJ8x+VZX7hDV8NmDt1Eq1r9+emp7zZds\nxorAovslicX5RU6FDKNgFIyCIQsAlI0cfw;\n\nDEFINE LABEL 24\neJyTZWBgWJYe2fIlzajgS1pF8rJ0qVjF7AB/i9LXZuJVeXpz6/L0JrfeNj3QOc1Jv8fQ90ff0YwffbyL\nJLtsTri27bgwqdb0JmOF6c38IrZrfvkrz+vk/DvMlbljLVdm4fQ9mTM6TmRZNQGtYPiSd339lgajggOd\na0MZRsEoGAWDBgAAeKs0fA;\n\n",
    "size": 23,
    "steps": 667,
    "successRatio": 1,
    "author": "IAmWave"
  },
  {
    "levelNumber": 41,
    "path": "41-Sorting-Floor-34.714/20.689-polarathene.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 20/34 - SPEED 689/714 --\n\na:\nb:\n    BUMPUP   24\n    INBOX   \n    JUMPZ    d\n    COPYTO   [24]\n    JUMP     a\n    COMMENT  1\nc:\n    COPYFROM [19]\n    OUTBOX  \n    COPYFROM [24]\n    COPYTO   [19]\n    COMMENT  2\nd:\n    BUMPDN   24\n    JUMPZ    b\n    COPYTO   23\n    COMMENT  0\ne:\n    COPYFROM 23\n    COPYTO   19\nf:\n    BUMPDN   23\n    JUMPZ    c\n    COPYFROM [23]\n    SUB      [19]\n    JUMPN    e\n    JUMP     f\n\n\nDEFINE COMMENT 0\neJyzZ2BgyBGbbcMtrlV6TjRxMwOYf9zSXeKaRY3SKuu3ugkOIDFTyab8crmm/BmaliUgvqKFZ9AfS+H2\nP5b5m0D8Lh/xHdY+iZvF/Ob2pfoFJDH718RnBYUVacWlHz4RZ32MNaHs0MREjWkPEnVCQOolCyb7shdO\nzGMvZDgF4lfn/3JjL3ztHl0aEfimSiU1tTasaFFddmNwXeHErbVvZ/pVHV/DXvjxFFNu7mX17ICrID07\nzy3Wdr2ww+rixb3ZRhfjrky5oHJjyoV198PP770XdLrmEkhNwrG92T8PddRr7zGbCuIvvlNcsO5J4UT1\n51wzGEbBKBgFDACEg2JI;\n\nDEFINE COMMENT 1\neJxLYGBgeCjy2p1NWHJ6qDDTSgPRa6tvyPZuuKAmvkNI59dOoDRDjph0mai8ZQmIHSqs5jJRJMhRSGeV\nNYif67otOsMxtdDS+kbXWkvXKSbmB+eAxJ+YPYrgtzydFeq0ZJ6Bi+1SkFiQf6n/MV/BFSD2Fr9fbmcC\nnZ1mRpg4b4z+5aYV1+J3Iu5KZGVcTbxtrErqt2CtUpC6sux/5ZfTHlTKJk+vc0o0aF2ccKNrccLbmfpJ\nFQufpn5e6ZO5al1mQf4mz7Kda1vLBVeoVLydaVbe37+08HD13bxLVSAzJtQfjXKo/55e25DdWNvwdiZI\nTK+h1H9qc3pAe8fH8J4eldQ7PfNzr3Volca28ZS7NS+r3d/6tYOx23UKW3/UYpB67smeQTXzrIPNl032\nBfFTZlsHi87eFh00x76FaY7eMpAYx/kgR9cLDOFTLry8vfD0zAtXjkQcAYlPP6xVemoPS0fArpPdIH76\n7fm5OfeX1So9/trBMApGwQADAIfwl7k;\n\nDEFINE COMMENT 2\neJxbyMDAYMFzQ9yCJ8rAmONW5n7OvdnXePZm1yhplQKlGAosMvXPGkcZsBgKmt7Sc3a6pbfQR9xAJyTb\nZGasiK1K6hcnlVQDl7hEOdejUdxudzzkXK9Z9Npn6vNbbtK6ZL5YG2RGery34byYKIOZEausecPvePwO\n/xhuHpmboBVXXLA7ubggLmN+rnr2rczA3Jp4uzz+sPe5k31TckycO7Nm2zglluudiJuqAzLnTAOLqF5D\niIJDvXsxiP+taSlXaL+B0J5JN8SfTQlRmD5lkxZbP5PZ/O4dVgWtO6xAanLElsyrFz0456RgxcKX3Imb\n13Dt3xvLNfPCby7Ha9d4ztydKML76obsv1cgtWeNvZd063kvUdEWXPFLY/b61Rom235plB06rB135Zbe\nmbtnjZse8VsueHDdmu2WiO3MCyK2OsfVbMoOqdls2FdgsXPtLhO9ZbeA+kFmebg/fNPqEXC11WPDviJP\n8R3rvX7tvOmjc1zML+5Kf8DEhxzBls9dQyyf84avuz8zouxQUvTTVYej3s4E6X2a6r3kclrQFq4UrRcg\n/t+MioU7CnauXVV6Z/fV8oCrM8rO3HUpsny+IPfhm8tp0z+C1CxvOr7mW1PdxuC6sKfBdZfegsTedddt\njJrcu+HDnGurQfyWqRw7ZSd1fAKx25b1bpi59PFpo0XuzyYvtP8OEuvdfW7Pq22L9sdtTT88ddOK81wb\nFzxYsTHs6dNNvK/Wbt36nnFX1eel+7K/yB3c+n7VobCnPw+x3eI+dOVM2L4N++x2v94FMoPjfMxX1wvZ\nXxQuab1ov8pwqv3q9nNJ19fdr7z171X67Ydvcu4/fKP0WPrl3ycTH954lntZ5EXFQoZRMKAAAHqdJ0w;\n\nDEFINE LABEL 19\neJyzY2Bg4HabbXPdusc228TEOVGnxe+Fpmzoao0VMZ6aNfGfDF9m/LGULlOzWVZ71Ea4/br13L5dJm0L\n/HSPr2lUS9wM1M7g4T57fYJX24JUP+kyjuAWv8bQmbH7wrIbf4fHNKlGNeX7x6QHVMaZOIckmDg7JYq7\nRqbohDxNFU27nKbYdjlNfjnIjEdF4juiS+WXzyjjmjG3SidErNbZKbgu335Cfb59duNZzyfNRil8bSGT\n2zt+7QSp96tqmLC/9XkniB00J99+82xnp5TZ/8p9Z3xeaTXz2uq8xddWO66bvR4kv3TfbJsv+6oa2PYx\nrTx+8vPKeTd2rmUYBaNgFIABAGt/Zu8;\n\nDEFINE LABEL 23\neJwTZACCmLgrJ+Ksj31OyN+0ImVZ7bqM9ICybDWXzTmPIsIKhdvfVNVcEqtluxVc9/J2bUPA1ZftQVt6\nep53Ppzg7NQyNUSBYRSMglEwZAEAYrwgmw;\n\nDEFINE LABEL 24\neJxTY2Bg4FCxNfqqMtvGRTWsSFfJe8ldxbqN4SqJmwPsEjcDpRkcAs56lvuGTH7t/Xmltc/OtU6JO9eC\nxDmC92a/iLiVuTGaLR3EX+g/28Y/Rs9YNtnWCMS/mye/XLJgd09mwa1MyQKG8MDcNt3MAiazhmJnp65q\n9+JdjYUT97e2LZjV7r1EuEtv2bvujvo7PRGBof331BmoDD6tzb0Mom/fXOhz7ep+r6xzLX5ip65EPjvs\nXuy8f27fl32S0533ey/ZczBxs/WJo2fvnRG9OeXCmbsWV/feq7ylcuPpw4+nZj8tO3T31c611a8Pznn/\nUrGt8HFXnPtD2VCJ22ou1HbvKBgF9AIAz9tx3A;\n\n",
    "size": 20,
    "steps": 552,
    "successRatio": 0.35,
    "author": "polarathene"
  },
  {
    "levelNumber": 41,
    "path": "41-Sorting-Floor-34.714/33.570-polarathene.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 33/34 - SPEED 570/714 --\n\n    INBOX   \n    COPYTO   [24]\na:\n    COMMENT  3\n    COPYFROM 24\n    COPYTO   19\n    COMMENT  4\nb:\n    BUMPUP   24\nc:\nd:\n    INBOX   \n    JUMPZ    f\n    COPYTO   [24]\n    SUB      [19]\n    JUMPN    a\n    JUMP     b\n    COMMENT  1\ne:\n    COPYTO   19\n    COPYFROM 0\n    OUTBOX  \n    JUMP     d\nf:\n    BUMPDN   24\ng:\n    COPYFROM [19]\n    OUTBOX  \n    COMMENT  0\n    COPYFROM [24]\n    COPYTO   [19]\n    BUMPDN   24\n    JUMPZ    e\n    JUMPN    c\n    COMMENT  2\n    COPYTO   19\n    COPYTO   23\n    COMMENT  5\nh:\ni:\n    BUMPDN   23\n    JUMPN    g\n    COPYFROM [19]\n    SUB      [23]\n    JUMPN    h\n    COPYFROM 23\n    COPYTO   19\n    JUMP     i\n\n\nDEFINE COMMENT 0\neJyzY2BgUOOt28jILzl9Pn96gK3Aa/eTgvu9QoU9g1aKr8tZpjJ7faOa/PI2Lf4woFIGRYuApGZztvQn\nZltqLpn396+1nDq/1EZ++Xy7zyu1HQRXsDlVLNzj2t8/3T2mqcjzVmaRZ0ASSN8z97jEn25VDT/dDs7x\ncP+88pn7zrUg8fywo1FTQt7OfBzivFU1ynmrRPyvnSBxn8wVMX8zPq+cnWmyzTLr186y7Du73+fe2S1f\n0nIQJF+9Z5V17+7ixwVbci/Xrf94CiS2a8O6HMd1/8rF12ypmbcyu5F3iUErSHzO8dNZb45PzFt4enrd\nznMsHfmX+vsZRsEoGAVgAAD4mmus;\n\nDEFINE COMMENT 1\neJzLY2BgOCmY4DCfnz+Mkf90ViyXybZjcibbgMIMR3jfV2gLXqqKEr9U9UzifQVITFvwuOVlyR1W4Sr5\n9iD+fgudkEhT0TRN/S01bVosHY1qf2ZMVp06HyR3QU0llVfje7q5VlhRmkHI5O+m8stB4rmupf57XN2L\nz7tULATxz7u8djfzUHMp9xV31Q3c4L0v7GjU7/DcBK8I0bT8sFuZ5b7FBQleWqUgtZIFNfF9eV1xKTm5\nCXEZtzJN0lILuVI66rlSbnQ9TdWY1pm1ZJ5dXsXCsMKKhQ3FS+ZFl/6ZYVb+vNOsnKfcs6wp/1GRSur7\n3K44kFn363VCzjQcjcpuvJUp3eg6BSQ2of61e0TTHY/fbaX+d3oCkqp6X2YEdM/Pbe9oyudr0ypVaH1f\nodC6pUa7d02vwcQ/M0B6fkze76W/fr8XiK07r9Rfar5KqtR8ppUgfs/NfHutWxu8tW7Nz5W4fbg6/faa\nXonbS+bdvlm38fZNhlOVt2ZeuH0z9/K8G90Xa86e2wPSc+bs+4qg01UN64897wTxO59Jl/W9ym5c+lax\nLe+DcHv0x68dDKNgFFAJAAAofLVH;\n\nDEFINE COMMENT 2\neJxbyMDAYMFzQ9yCJ8rAmONW5n7OvdnXePZm1yhplQKlGAosMvXPGkcZsBgKmt7Sc3a6pbfQR9xAJyTb\nZGasiK1K6hcnlVQDl7hEOdejUdxudzzkXK9Z9Npn6vNbbtK6ZL5YG2RGery34byYKIOZEausecPvePwO\n/xhuHpmboBVXXLA7ubggLmN+rnr2rczA3Jp4uzz+sPe5k31TckycO7Nm2zglluudiJuqAzLnTAOLqF5D\niIJDvXsxiP+taSlXaL+B0J5JN8SfTQlRmD5lkxZbP5PZ/O4dVgWtO6xAanLElsyrFz0456RgxcKX3Imb\n13Dt3xvLNfPCby7Ha9d4ztydKML76obsv1cgtWeNvZd063kvUdEWXPFLY/b61Rom235plB06rB135Zbe\nmbtnjZse8VsueHDdmu2WiO3MCyK2OsfVbMoOqdls2FdgsXPtLhO9ZbeA+kFmebg/fNPqEXC11WPDviJP\n8R3rvX7tvOmjc1zML+5Kf8DEhxzBls9dQyyf84avuz8zouxQUvTTVYej3s4E6X2a6r3kclrQFq4UrRcg\n/t+MioU7CnauXVV6Z/fV8oCrM8rO3HUpsny+IPfhm8tp0z+C1CxvOr7mW1PdxuC6sKfBdZfegsTedddt\njJrcu+HDnGurQfyWqRw7ZSd1fAKx25b1bpi59PFpo0XuzyYvtP8OEuvdfW7Pq22L9sdtTT88ddOK81wb\nFzxYsTHs6dNNvK/Wbt36nnFX1eel+7K/yB3c+n7VobCnPw+x3eI+dOVM2L4N++x2v94FMoPjfMxX1wvZ\nXxQuab1ov8pwqv3q9nNJ19fdr7z171X67Ydvcu4/fKP0WPrl3ycTH954lntZ5EXFQoZRMKAAAHqdJ0w;\n\nDEFINE COMMENT 3\neJxzYmBg+Cv92j1UWCfktsDRKFuBmvgegZcZVYLrciaKaJW6S1yqapGcXndZ0q/5s3DDhDVc92bt59w0\nF6iNwVyr1F9ePS4xSAHCP6z92r1S/3t6nfGSeSD+ag3FthP6LB0g9nXrFr/r1lciQ50KJ4L4N302eLd6\nPKjc4/q8s8GFa4azM0SPV4R1sGsI1wz/GMnpExPfzgSJ7Qv7V74mXLrsWqR0GWtCaiFITCGsxU81aqEP\nQ0yL34PEUn+QGOMuJjO73RPz3u96fPrP1g37QGIha29lhqydmKe5+n1F4gr7lpglc/tA4gePsqXfPLGl\nZue5wokXL2pMYxgFo2CEAgDe+GRV;\n\nDEFINE COMMENT 4\neJyrZGBgMFK74yEqv8H7smRE4Dah3ITbAt/TGfn/lQvzGbQK8/X3B/BLTv8sXLHwh7jtUlH5qMU1Spvm\nhqtwzQhX6e/XVXre+Vfar3mHsn1Lok5HPdA4Bl4Nlo6rWkvm/ddhWgniK1qU+j8xC5l83frtTDnXe7Oi\n3f7MAIlfMm/K77VflwNhq7l8cXJ2ArFfewc5zotJcLgdW2cH4huF3vEwCt0WvTMoeRKIH9u2wduteaGP\ndGOp/9ZahvC5VV1xgpUqqcUVe7OLK/6V/6/sqK9tSJ60vOngnOVNbQt2NXov+VgnuMKs/Pia88W9G1yK\ngraAzJHo8wxynyIbGr6APwzEV5q2LfrgtHuzQOzEFbKhb1emFr5d+XYmiP9/Rak/y9oWv7PrIwLdNvGH\nXdq8Lbp587qcuvUd9Y7rqhoc19m3uG3q7/feFrUYpP78gW3RuQdr4rkPuRevOvQZHA4fTzOt7D+zaW7/\nGcuS35eXzHtx5drqw9dMtm28Lr6j5+bs9ZW3vJecuOU65e2N+bkg9VJvauLLnkuXvXqq2PbqacOEG8+W\nzGN6uXNt5puda6M/Cq449KVi4dxvf2a8+dYwQfDrja69H052//q4plf67+4ekP7gX39mTPgtv5xhFIwC\nPAAAYm/X6A;\n\nDEFINE COMMENT 5\neJzzYGBgMNdKcLghW2dXL8rhZitQ6j+Le0WMAidb+lR2y5JvbFUNruw3un5zmU3dJjR1vo+M7VJ7Re8l\np5UqFoar3Jv1WLVw4mTVG13LVBTbyuX+la+T1ioVkP5XXi53qapP8VLVVa3UwhDD4oL7RhPzgFYxxGjE\nNPnpHpwDYm93LPXPcMxunG9nuzTVT28ZSOy8C0/5HG+tUhD7i9MGbznXDd4avhGB4cGeQSAx29geW/mS\nfHsQe13GL7e4jKNRfzNq4v9mfO2Iy/gzAyResKVNt2DLccs/Wz+Gr93aMMFk853d3zee27Nrw+td81bK\nLwepKV6+Imb1Erb0xwvn59bMCysCiRkcOBqVe3Bb9M9DRin/jhUX6J7lKWcYBaNgmAMA8+Ryww;\n\nDEFINE LABEL 19\neJyLZmBgMNcyca5RcnZ6LXPH45mEbOgesYCkKPHv6ZclJ+Y1qsU0/dKwb5mhydLBq5E8qVFNcvo7ftul\nQG0MnwwrFuoZa0w7a1zV8N30dNYfy7Oe16053E45OCZ/cXpf8dD5UhW327qcLh/r4CD/yb4OAekB34Jf\nZvCGN0xQjTq+BmRGTvKSeSZp7sV/M65E9uUlOBgWz4w1Kz/ZXVyxaW5xhd4ykJrC9MPVmQXSZSD2/tZV\n1t7t1sF8bVGL17TpLfvc773kx2Smlc+myC8HyWfOr7NzWTg/9+uCzEWTFz5d1bjo+BrHdU9XgeRKdyQ4\nMO6SX150VHAFiM+4a37upP3zcyFyO6zkDq6yBrG33d5htfF6j23JtQQHrytnPWMvb4t+ceVlxuFrqYWL\n72ypOXfPoJXrwdy+3feXzPt8R3CF1q2da10vcOwE6Y17cs3i46/PZiB23ocEh70f9ns1vH+Z4fIO4t9R\nMAoGGwAAjnSfDg;\n\nDEFINE LABEL 23\neJwTZACCmLgrJ+Ksj31OyN+0ImVZ7bqM9ICybDWXzTmPIsIKhdvfVNVcEqtluxVc9/J2bUPA1ZftQVt6\nep53Ppzg7NQyNUSBYRSMglEwZAEAYrwgmw;\n\nDEFINE LABEL 24\neJwzYWBgWGvJpWppreZiaf1nRpxl2aEnZuvuA4UZRGx3SZ5yOClR5OmqaBQaZfA7nMmMIUbNpSdWNtQ2\ntituY7Rj8u/w01muIU35H/3Dir44NeWD9L3KzNQPzPU2fDjB1mjzbHkTkNi3puOWy5sSHJ40b4tuatlS\nc7ElaMv+Vv6TILkJ62yNsjesiMneMD9XZsPU+ffX8Z/8tLbmEkhOf/09de9tf1SX7juo6Xvc1mjLqR5b\n5tPOTsdPlvoXHe2K8ziskpq8U7rMe9v0OqHrR88yUBlYXN17r/KWyo2nDz+emv207NDdVzvXVr8+OOf9\nS8W2wsddce4PZUMlbqu5UNveUTAK6AUAxKdu2w;\n\n",
    "size": 33,
    "steps": 435,
    "successRatio": 0.34,
    "author": "polarathene"
  },
  {
    "levelNumber": 41,
    "path": "41-Sorting-Floor-34.714/69.1534.mergesort-IAmWave.asm",
    "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 69/34 - SPEED 1534/714 --\n\n-- This is merge sort. In HRM it is extremely impractical, but cool nonetheless.\n-- It uses a non-recursive approach, first sorting groups of size 2, then 4, 8 \n-- and so on. Because the merging is done naively and in-place, the algorithm\n-- actually runs in O(n^2 log n), which is worse than the simple sorts. Memory\n-- constraints make it difficult to have an auxiliary array to do merging in.\n-- VARIABLES --\n-- n is the number of elements, size is the current group size, but divided by\n-- two - merging into groups of two means size = 1.\n-- i and j represent the indices in the first and second group, respectively.\n-- to is the last element of the group that is being merged.\n-- The variables t, k and cur are helper variables used in merging.\n\na:\n    COPYFROM 24\n    COPYTO   21\nb:\n    INBOX   \n    JUMPZ    c\n    COPYTO   [21]\n    BUMPUP   21\n    JUMP     b\nc:\n    COPYFROM 24\n    COPYTO   20\n    BUMPUP   20\n    COMMENT  4\nd:\n    COPYFROM 24\n    COPYTO   16\n    COPYFROM 21\n    SUB      20\n    JUMPN    n\n    COMMENT  0\ne:\nf:\ng:\n    COPYFROM 16\n    SUB      21\n    COMMENT  7\n    JUMPZ    m\n    COPYFROM 16\n    COPYTO   22\n    ADD      20\n    COPYTO   23\n    ADD      20\n    COPYTO   16\n    SUB      21\n    JUMPN    h\n    COMMENT  3\n    COPYFROM 21\n    COPYTO   16\nh:\ni:\n    COMMENT  2\n    COPYFROM 22\n    SUB      23\n    JUMPZ    e\n    COPYFROM 16\n    SUB      23\n    COMMENT  5\n    JUMPZ    f\n    JUMPN    g\n    COPYFROM [22]\n    SUB      [23]\n    JUMPN    l\n    COMMENT  1\n    COPYFROM [23]\n    COPYTO   17\n    COPYFROM 23\n    COPYTO   18\nj:\n    BUMPDN   18\n    COPYFROM [18]\n    COPYTO   19\n    BUMPUP   18\n    COPYFROM 19\n    COPYTO   [18]\n    BUMPDN   18\n    SUB      22\n    JUMPZ    k\n    JUMP     j\nk:\n    COPYFROM 17\n    COPYTO   [22]\n    BUMPUP   23\nl:\n    BUMPUP   22\n    JUMP     i\nm:\n    COPYFROM 20\n    ADD      20\n    COPYTO   20\n    JUMP     d\n    COMMENT  6\nn:\n    COPYFROM 24\n    COPYTO   22\no:\n    COPYFROM [22]\n    OUTBOX  \n    BUMPUP   22\n    SUB      21\n    JUMPN    o\n    JUMP     a\n\n\nDEFINE COMMENT 0\neJxLZGBgmCQW2cIkaVRQK7MtPVChIvmA0vTUt2r9Zas0ZnT8UG+c8UiVd9FkucqVKjJZK3ilrJdaiolM\nvCoS2QLUynDISGbxT/3MVnf9J1kQvnRDifH88ps2y9JCHJwKBZ3+1Mo4G0+Wcf67ACQv693RLhy0vLMp\nZEbHzDCv5iXh88u9w40KmkK4YzgCuWM0faansnuuq2D33N4l5NU447bP2/kcgdZLHcKsl4L05xfdm1dQ\n5b0sqkFkYlTD095JtXeroyr6y64Uzy/fW/gkK7/oTeTy8nkh4lVrQ0HqeTvPhkd3eCZEd5ytSuvc3pXW\neW4uRNxA60Bnnl5a51xDpo65ht/b4nUD2g20QHLu8/4usJl7b17nlL8L3k5VnvRz2te+jJnSDY/n/I4C\nyddNvhPxc15fMIjNuuJs1Ye16yoaNzsVHtm4LG3Hht9RT9cE+N9cbeh7eGWA/5rle8MWLtOK+7WsofT9\nUuVJHsvOzf217O8CmVUyi49s3D/n1ubC6QyjYBQMIAAAqOKmow;\n\nDEFINE COMMENT 1\neJyTZ2BguBD87pBwkMhE4aB9lUeDrmbmBDn6OYRdcdOKueJmGvvZwyd+b5hPfHuKY1x/GVA5Q1Jk0rS/\n4UFT1wc0zgDxuTLvH+TK9F62J7NwOoivmG3VBKIjC3xOMlbsWOtSZzwZxK8qTprWVrJ/jnjVsw0uddmn\nGUbBKBgFAw4ALlwt3w;\n\nDEFINE COMMENT 2\neJxrZGBgYJJsKL0qUlDCKHi3ei5/Rdtc/ms9PEJJ02pEFsxqF10wK0AiadoWya99WyRndOyXqmjbL+Vz\nkldqx4V54sl32kUn3VcWmXSfRyjktgt/11mgcQwqKsqTDijtq5RUdioE8YuUeerPaAcWTdVrKAXx4ywb\nSrttC0oW2d+tXmRv1TTN7lh3qbXxZAEr5ykLzZ2n2JqJTLQ16y8DqQ31EM5L8PxTm+ApMnF9AMuExMBr\nPYmB88uFg4wKQPIV0U6Fx6LWVRyLkj0mEnXiokjUwUcg8f7YL9lL459k7U40Kjie9KeWM3FGx8Vo5Ukg\nufaWq5ntNYFF1dUFJQVVZ6sKqjradWtYJjA2OE950/q1b17b8k7XtojE6I50e6YOAy2QHuYJVk0xExpK\niyddzaybvC2dZcbVzOJZwnk3ZheUdM15W1M/O7P157SnvXWTr/UUT9reVTypox2k7/1SkYlnFz3JArG7\nlzSUHl7JnPt0jVHB73UFJfEbrJrYNizvBMkJ7VxX8XFvf5nwQadCjgPL0kz2WMZf2KUVt3OHZ0Lo9idZ\n67bz1AvtzGzV3D2j49mep71h+1kmlB962gvSu/Qcl6XvNUGNjdcVNU/czNMzv6NpPeeuo9+923cizK8s\nS7t0iTn30iWjgmXX9lXuvbGv8utdSDzcvdw44+WVCTMZRsGIBgALK9z9;\n\nDEFINE COMMENT 3\neJzzZmBgOK2ssnWyXNPuNCnn7Q9EeRddFQmaelXkaa+LOE89r9TZKgnp/jIrOaOCrYrCeSoqBSWdqmer\npqjdrQZqZfipL7plqp7ypKl6BSUL9Llj3PUNtEDiZc4NpaXW0g1xlpmtv8y/9q2x2D/nsFXU8m7bHWt/\n2z/bcN75+Do7t/WzPd29mj+4STd8cFveGerBu2in57MNst6sm0FmyAXvWMsR+HfB+oDEYhA/JyiztSmk\nobQvNLH4b3hgkUjU/PLmmMzW5hjrpaaxx9eZxhZOF01KLDZLPVsVkbG8c09m0NQ9mZ2rQHonluq9elU6\n89z9kuSdFqWF09tKlPNB4m0lRzN4Krelt9d8yT7V9CTranNgkV5LZMvV5mPdp5qUJ1VX8y7iqbReurmC\ndxHDKBgFwxAAAFZ1fHA;\n\nDEFINE COMMENT 4\neJyTY2BgSK3sXPW1LGvF/RKZxU55x7pFs7yaLyXvq/wUJpzHEehUeNtnXYWQl3ZjqMfXPnbPpGnZXvvn\n5ATtWNsUcn19RfTxdaJJlStTCrd3iVdJN5xqml9+uquh1Kp3XQXzhI52vonKk/gm6ixhntC5iqkjeEdN\nc/JOpepvGxlGwSgYBYMCAADEjjZ0;\n\nDEFINE COMMENT 5\neJwLY2BgCLYQzltovq7Cw/zevMemNid+6ledmaqne1xVR2VrnU7nKqASBlbLvmAQrRmSNM0hzKppZphT\nIYjvGLevsjmmv4wjsqE0J2hf5R//tzUg8eRMo4KXucJ5X/KcCmfnzeiYkCsyUSfHeYpv+oSZ/amF07VT\nRCY6pinng9Tuq1xXUV2dWLyi3qjgVJPx5FNNSdP2N06YqVvzdr5S9bm5jBXXepaXR7ZEVZytAqk/u+jc\nXOlFMzqkF80LqV+8xxgk1r3kambWyvaU0lXTU+3Wvq15uiayRWYVy4SFy4KmguQ/bl0wa8ZWkYnrtjPn\ngvjrtjv6gWizM4FF8qe+ZMsdOluVc9CqqfxQ0NS+I40zlhxLmlZx6mtf/5mO9qXn9lX+O/cl2/Hs175Z\nZ/mOtpyOPnXxlMutYyeL7+46wPdi/X6+FzP2XnisubvrrMke3eNh+98dYhgFo2CIAACt4psh;\n\nDEFINE COMMENT 6\neJzTYmBgEHSSbpBxfltj57auIturofSZb39ZYiBPfU7Q096coAkzOQI7Vy32v77+vLfK1uluolvKnJ9t\n+GB3bq6nvcjEtQ4d7WsdvJqBxjC8iHUqfBFr1eQTn7XiX/yM1b7p3zZWZT/bMDtvx9rIAuulKYX752wq\n2N61qcCpEKT+arNwXk1zf1l7y4SZp5qCd4DECqr6y7Y0BBY9aAksYuowKqjtLih521tQwjAKRsEooAkA\nACOTSr8;\n\nDEFINE COMMENT 7\neJyrZWBgqObpXBUlGLzju/i7Q2lS7w7VyhzYry87cc9kOd5FD2XvzZOQXjArSpBlwlx+7UZGwYKS12Jf\nstOknmQ9lN1XCdTOEKv5JZtfS2bxGe0N+0B8Fs3bprGaXJbz1csdrNXaHOtULGys1fYYu6mvNQLJa7g4\nb1/r0LT7rHHT7hsmRbvem7FuPmxlPPmmzfLObts/tbZ2+yrZHAOL1josSwOpzzQKLPpl/iRrmt2ytEX2\n7SkgMRNf5ymfwlgmhEXw1IdFKOc/D81IavL5kn3EK7FY1ruj/bZP4XQTX+ul9n4zVucEsW4WidqxFqTv\nW92byNe1v6OUqiuSN1cI57WVbO9qK0maplTduaq9Zsda/3pgWDRELa9pXt5Z2JRYXNjk6FfTXKd/qslc\nEqT/R9+2dIMpGUk/p13NPDizoVRqllXTthmNM35Oy1phMGXG6gMTZ6zeOqFy5eTexhkq3RVtp7v+1J7u\n6i+r7TYq6OhhzgWZYbREZnH94gWz1Bb3l5UsepKltlgqFiR+c7Fy/sJl29JvrraMf7pGK85zXUaS7KaC\nksbNxpMbN+ssAakRPnise8PxzNa7p//Ump05WyV/anrq7hNSsd7Hzob3HdkbVn5ob1jOwTeR6/dHJH7c\nW1DycW9FG8eBBbNyDv5d8PyI97KLp6yXMoyCUYAEAAXx3bs;\n\nDEFINE LABEL 16\neJyTYmBgsHObnjrdrXD6U9eFe4FcBhnrxGJBJ6OCMu/+ssTAhtKcoPnlTSHzy0FyoknHuo8n/altSVlX\nsSeTOXd5/tGMvYVfsvOLjAraSo5165ZYL2UouL5eNCt4B1dm8I6WlBmrRZMmzGQYBaNgFAxKAACTOipK\n;\n\nDEFINE LABEL 17\neJzjZGBgiMiQij2R9Xa+aNa7Q0Aug0XptvSWlMTif/EFJesjnAoZRsEoGAXDFgAA6FQNrw;\n\nDEFINE LABEL 18\neJwTZGBg0E5ZonAp+ZOqWeoVt+NJlSsVkhfuvZvCdg0oxaBYfLc6IkNkomNa4XQwP9t48pe8FWvyi4p2\nTSx9d2hOWfQphlEwCkbBkAUAQKQbsQ;\n\nDEFINE LABEL 19\neJyTY2BgaI4J3uEQdmD/H//knbd9vm3U9Mla0eTT0b4+oL9MM8So4FiUUcGdmIKSpfE89UDlDCeyrma2\n5pyb65S3Yk1kwbeN1dWVK9trZBZb1hZOf1CT2fq6NrH4de22dJDale1ZK9I6hfNA7AOdf2rPTAosejvV\nqIBhgMDxk59Xzruxc+1A2T8KRsFgAwBIsjvr;\n\nDEFINE LABEL 20\neJyzZGBgCLaoXGlr17Q73vH8gVsuB/b/cVfZyu55fB27p/XSP+4LZk13c54iY32se41FR3uwRWTLdst9\nlQ02yvnxjk+yjF2F8566OhUCjWGYGcac6xBWUCIS9WyDSFTT7rAI2WMg8aaQaU4g2qJ0w74TRQf2m+cu\n3Hs35fyB40kH9s9OO77uXs6MDu7Cs1ViRQUlDAVGBXsyhfOOJxkVgPRY1u6fo9y8fjZvZ9K0A50iE9M6\nK9pA4gc6pRu2dPypdW1zKpRoMir4VldQ8rq2v+xBzduak1Xn5r6uXbi3pln2mGTXu0MMo2AUjAKcAABZ\nt2OA;\n\nDEFINE LABEL 21\neJwTZ2Bg4EzcsC88IXjH0vj9czYkrKsITwgs+hx3NXNWHHdMf+ydiIrovWG7I6ViOSLbU/6GL0tjAOtR\nzk9KnJ5amWwZ/yL1d9S9nL1hfvmW8SmFzLkniq71nCg6f4BhFIyCUTDoAQCVlygZ;\n\nDEFINE LABEL 22\neJwTYmBg4C5cV5FfdDXzSvH01OXllvH7Kj0TxKsqksWrKldurgje4Vd+4xJQGcPy8iUKmyumym+uUNSc\nU2ag1VaiqNlWclhpTtkSBYZRMApGwZAEAJbYHQw;\n\nDEFINE LABEL 23\neJwTZWBgmFTL5PW69ttGy9obl05WXXi8vPz/s6rijQ+rsqNPJWce2B+RUbnyRNaEmfdygqZ+yTvWDdTC\n8KDGXPJ1rYbE69pWuQc1SxSUqsOlq6s1JNprOMUYRsEoGAVDBgAAgQYntA;\n\nDEFINE LABEL 24\neJwTZ2BgyMtaMOtL2tuaF6nMuS9SK5K/pCUEKGavNfLLd9D2K/+kqlT9SdWlTlFzf+Nao/aWzx6TWyMS\nH7RINyg3O0+JapBZ3F5zfN3mCtbN+UUm2yILVLb65X/bWJV9bx7DKBgFo2DQAwBvpCnj;\n",
    "size": 69,
    "steps": 1119,
    "successRatio": 0.34,
    "type": "mergesort",
    "author": "IAmWave"
  }
]);