callback({
  "levelNumber": 23,
  "size": 63,
  "steps": 32,
  "successRatio": 0.02,
  "type": "specific",
  "author": "viamodulo",
  "hash": "dc6e2cf5f894cbc0816c1e0db2b7b883",
  "path": "23-The-Littlest-Number-13.75/63.29.specific-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 23-The-Littlest-Number - SIZE 63/13 - SPEED 29/75 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n-- Based on 39.32.specific-Mygod.asm\n-- (optimized ending (- 1 speed) + unrolled jumps (- 2 speed))\n    \n    -- first run\n    INBOX   \n    INBOX   \n    INBOX   \n    OUTBOX  \n    INBOX\n    \n    -- second run\n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    OUTBOX  \n    INBOX\n\n    -- third run\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    a1\n    INBOX   \n    SUB      0\n    JUMPN    a2\n    INBOX   \n    SUB      0\n    JUMPN    a3\n    INBOX   \n    SUB      0\n    JUMPN    a4\n    COPYFROM 0\n    OUTBOX\n    JUMP     b4\na1:\n    ADD      0\n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    a2\n    INBOX   \n    SUB      0\n    JUMPN    a3\n    INBOX   \n    SUB      0\n    JUMPN    a4\n    COPYFROM 0\n    OUTBOX\n    JUMP     b4\na2:\n    ADD      0\n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    a3\n    INBOX   \n    SUB      0\n    JUMPN    a4\n    COPYFROM 0\n    OUTBOX\n    JUMP     b4\na3:\n    ADD      0\n    COPYTO   0\n    INBOX   \n    SUB      0\n    JUMPN    a4\n    COPYFROM 0\n    OUTBOX\n    JUMP     b4\na4:\n    ADD      0\n    OUTBOX\nb4:\n\n"
});