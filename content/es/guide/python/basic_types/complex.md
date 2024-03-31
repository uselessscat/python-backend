---
title: Números complejos
weight: 1
---
1. Implementa una clase ComplexNumber que represente un número complejo.
   1. La clase debe tener métodos para sumar, restar, multiplicar y dividir números complejos.
   2. Incluye un método para obtener el módulo y el argumento de un número complejo.
   3. Crea pruebas unitarias para los métodos de la clase comparando con resultados predeterminados y con la librería `cmath` de Python.
2. Implementa una función para representar un número complejo en forma polar que reciba números complejos de Python (a + bj), usa una implementación manual.
3. Implementa una función para calcular la raíz cuadrada de un número complejo.
   1. Utiliza un sistema de ecuaciones.
   2. Utiliza la forma polar o la fórmula de De Moivre.
4. Imprime el fractal de mandelbrot.
   1. El fractal de mandelbrot es un conjunto de números complejos que no divergen al aplicarles la función f(z) = z^2 + c recursivamente. Para el caso de mandelbrot c es un número complejo constante y z_0 es 0 en la primera iteración.
   2. Crea una función `mandelbrot` que reciba un número complejo y un número de iteraciones máximo y regrese el número de iteraciones que se necesitaron para que el número divergiera o el numero máximo de iteraciones si no diverge. Se considera que un número diverge si su módulo (punto 1.2) es mayor a 2. En este caso puede usar el built-in `abs` para calcular el módulo de un complejo.
   3. Usa la función `mandelbrot` para para calcular una imagen del fractal de mandelbrot.
      1. Debes crear una matriz de enteros para representar las iteraciones que la función `mandelbrot` retornará. La matriz debe tener un tamaño de width x height que representará la resolución de la imagen (se recomienda como mínimo 500 pixeles y 100 iteraciones).
      2. La matrix que representa la imagen debe ser iterada para cubrir el plano complejo desde -2 - 2j hasta 2 + 2j, no debes calcular fuera de ese rango. Esto quiere decir que si usas una matriz de 1000x1000, el pixel 0,0 sería -2 - 2j y el pixel 1000,1000 sería 2 + 2j y por cada pixel se sumaría 4 (el rango del plano complejo fin-inicio)/1000 (que sería width) a las coordenadas, pero ese valor debe calcularse según la configuración de width por height. Si elige width = 1000 el step por pixel sería 0.004.
      3. Para cada pixel crea un numero complejo `complex(-2 + x * step_x, 2 - y * step_y)` y calcula el número de iteraciones que se necesitaron para que el número divergiera con la función `mandelbrot` y almacenalo en la matriz. El numero c corresponde a la coordenada en el plano complejo dada por la ubicación en la matriz mientras que z_0 = 0.
   4. Usando la matrix de iteraciones, crea una imagen en escala de grises donde el color de cada pixel sea proporcional al número de iteraciones que se necesitaron para que el número divergiera. Para esto normaliza el número de iteraciones entre 0 y 255 con la fórmula `int(255 * iteraciones / max_iteraciones)`.
   5. Usa pillow o matplotlib para guardar o imprimir la imagen en escala de grises.
   6. Actualiza tu código para que imprima una imagen de una zona arbitraria dada por un centro (a + bj) y un ancho/alto (a+/-w + (b+/-h)j).
      1. Imprime en el centro -0.833 + 0.215j con un ancho de 0.05 con un width/height de 10000 y 1000 iteraciones.

## Recursos

- https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex
- https://docs.python.org/3/library/functions.html#complex
- https://docs.python.org/3/library/numbers.html#numbers.Complex
- https://docs.python.org/3/reference/datamodel.html#numbers-complex-complex
- https://docs.python.org/3/reference/datamodel.html#object.\_\_complex\_\_
- https://docs.python.org/3/library/cmath.html#module-cmath
- https://docs.python.org/3/c-api/complex.html
- https://docs.python.org/3/library/functions.html#abs