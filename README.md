# Subways of Budapest – JavaScript Game

A browser-based strategy game where players build metro lines across Budapest by connecting stations according to randomly drawn cards.

This project was developed as part of the **Web Programming course at ELTE (Eötvös Loránd University)** using **vanilla JavaScript, HTML, and CSS** without external frameworks.

---

## Gameplay

The player constructs metro lines on a map of Budapest by drawing segments between stations.

Each round represents a new metro line with a different color.  
Segments must follow specific grid rules and card constraints.

---

## How to Play

1. Enter your name in the main menu.
2. Click **Start Game**.
3. Press **Draw Card** to reveal a station card.
4. Select two stations to draw a metro segment.

### Rules

- Each card allows drawing **one segment maximum**.
- Segments must be **horizontal, vertical, or 45° diagonal**.
- Segments must start from the **current endpoint of the metro line**.
- The destination station must match the **card type** (or Joker / Deák tér).
- Segments **cannot cross other segments**.
- Segments **cannot pass through other stations**.
- A metro line **cannot visit the same station twice**.

After **8 cards**, the round ends and a new metro line begins.

---

## Features

- Player name input
- Random card drawing system
- Metro line construction mechanics
- Multiple rounds with different line colors
- Score calculation system
- Game timer

---

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

---

## Author

Batmunkh Enkhbold  
ELTE – Web Programming Course

<img width="2272" height="973" alt="image" src="https://github.com/user-attachments/assets/d5ae464e-9c5b-4351-b195-6b4cfab600ac" />
<img width="1910" height="995" alt="image" src="https://github.com/user-attachments/assets/fac55bea-460d-48bb-a6f6-d5cb1279ea6f" />



