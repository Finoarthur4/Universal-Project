# Documentation
## Projects
### Cone Calculator ( CEUCCC )
(**C**ompletely **E**xaggerated **U**nnecessary **C**omplicated **C**one **C**alculator)

*Thinking: Hopefully this guy won't notice that i can't speak english very well.*

This calculator is at the moment **only for straight circular cones!**
It is enough to enter 2 values to calculate all data of the cone.
Unfortunately, there are some exceptions.

But first the explanations of the symbols:
#### Explanation of the symbols
- **r** is the radius.
- **h** is the height.
- **s** is the length of the mantellinie.
- **d** is the durchmesser.
- **a<sub>g</sub> (a_g)** is the fächeninhalt of the grundfläche.
- **a<sub>m</sub> (a_m)** is the flächeninhalt of the mantel.
- **a<sub>o</sub> (a_o)** is the flächeninhalt of the whole oberfläche.
- **V** is the volumen.
- **U<sub>g</sub> (U_g)** is the Umfang of the grundfläche.
- **φ** is the half opening winkel.

But now to the exceptions:
#### Exceptions
First the cases where tow values are given but aren't enough to calculate:
- a<sub>m</sub> and V
- a<sub>m</sub> and φ
- a<sub>o</sub> and V maybe
- a<sub>o</sub> and φ
- V and φ

Of course some things also can't work. These are:
- If Values are smaller than 0.
- At least 2 Values must be bigger than 0. 
- If only value is given, the values are calculated which are possible with 1 value.
- The values must fit to this formeln and it's ableitungen:
r = sqrt(s²-h²)
h = sqrt(s²-r²)
s = sqrt(h²+r²)
d = 2*r
a<sub>g</sub> = r² * PI
a<sub>m</sub> = r * s * PI
a<sub>o</sub> = a<sub>g</sub> + a<sub>m</sub> = r * PI * (r + s)
V = 1/3 * PI * r² * h = 1/3 * a<sub>g</sub> * h
U<sub>g</sub> = 2 * PI * r
φ = arcsin(r/s) = arctan(r/h)

#### Genesis
This program was created in the course of a project of the Computer Science Physics course to circumvent the problems of accurate calculation, as well as the bugging interface and other problems of Scratch.

# Demo
A demo is worth than a thousand words. 
[Demo](https://finoarthur4.github.io/Universal-Project/)
