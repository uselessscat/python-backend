---
title: Aritmética de punto flotante
weight: 1
---
1. Lee el archivo temperatures.csv que representa las temperaturas en un planeta X.
2. Ingresa por input valores flotantes de temperatura y epsilon e interpreta usando float.
   1. Busca la temperatura mas cercana al valor ingresado usando epsilon e imprime la hora en la que se leyó ese valor, si hay multiple valores iguales imprime todos.
      - La comparación epsilon es de la siguiente manera abs(temperatura1 - temperatura2) < epsilon
   2. Imprime la diferencia entre el valor ingresado y mas cercano.
3. Imprime los 10 primeros valores formateados como texto con format, con el formato 0.00. Usa map para aplicar format. Usa slices para seleccionar los 10 primeros valores.
   1. Imprime los mismo valores pero con f-strings.
   2. Alinea las columnas a la derecha.
   3. Imprime los valores con notación científica.
4. Calcula promedio de diferentes formas.
   1. En un ciclo for suma todas las temperaturas y divídelas entre el número de elementos.
   2. En un ciclo for suma todas las temperaturas, al valor final redondea con round(2) y divídelas entre el número de elementos.
   3. En un ciclo for suma todas las temperaturas aplicando round(2) a cada una y divídelas entre el número de elementos.
   4. En un ciclo for convierte cada temperatura a Decimal y suma todas las temperaturas y divídelas entre el número de elementos.
      1. Prueba ajustar la precisión de Decimal usando getcontext().prec = 50.
      2. Comprueba si hay diferencias entre pasar el numero como texto y como float en el calculo de Decimal.
      3. Usa el método Decimal.normalize para las operaciones y verifica si hay cambios.
   5. Usa sum y len para calcular el promedio.
   6. Usa fsum para calcular el promedio.
   7. Usa numpy mean para calcular el promedio.
   8. Usa el módulo fractions para calcular el promedio desde la columna integer ratio.
      1. Comprueba que Fraction.from_float devuelve el mismo resultado que as_integer_ratio()
   9. Usa el módulo statistics para calcular el promedio.
   10. Determina cual es el valor real del promedio y calcula el porcentaje de error de los demás métodos con ((valor_real - valor_estimado) / valor_real) * 100.
5. Lee los datos de la columna hex e imprime por la consola.
   1. Imprime los valores hex en la consola.
   2. Imprime los valores hex como flotantes en la consola.
   3. Imprime los valores hex en notación científica en la consola.
6. Usa Decimal.compare en los valores flotantes de temperatura para obtener valores -1, 0, 1. Cuenta cuantos valores de cada tipo hay.
7. Use la transformada discreta rápida de fourier (numpy fft) para calcular la duración del dia en temperatures.csv
   1. Use np.fft.fft, np.fft.fftfreq y np.argmax para encontrar el periodo de la señal.
   2. Grafica los datos usando matplotlib y comprueba la duración del dia.
8. Suma 1.1 + 2.2 y compara el resultado con 3.3 ¿Por que no son iguales?
   1. Usa Decimal para realizar la suma y comparación.
   2. Usa sum y fsum para realizar la suma y comparación.
   3. Usa fractions para realizar la suma y comparación.
9. Convierte la fracción 10/81 a numero decimal y luego a numero flotante.
   1. Cuantos dígitos puede tener este número flotante en Python?
   2. Cuantos dígitos puede tener este numero como Decimal en Python?
   3. Ajusta la precisión de Decimal usando getcontext().prec para obtener diferentes precisiones.
10. Usa el método de montecarlo para aproximar pi.
    1. Genera dos números aleatorios entre 0 y 1 en un plano, para cada punto. Estos números representan las coordenadas (x, y) del punto.
    2. Calcula la distancia del punto al origen (0, 0) utilizando la fórmula de la distancia euclidiana: distancia = sqrt(x^2 + y^2). Si la distancia es menor o igual a 1, el punto está dentro del círculo.
    3. Repite los pasos anteriores muchas veces para obtener una muestra grande.
    4. La proporción de puntos que caen dentro del círculo respecto al total de puntos generados se aproxima a la proporción del área del círculo sobre el área del cuadrado que lo contiene. Dado que el área del círculo es πr^2 y el área del cuadrado es (2r)^2=4r^2, la proporción es π/4.
    5. Multiplica la proporción obtenida en el paso 4 por 4 para estimar π.
    6. Escribe dos programas, uno con float y otro con Decimal y calcula el error relativo a math.pi usando la formula del punto 4.10
11. Escribe un programa que sume números hasta llegar a infinity. Usa float y Decimal. Cuantas iteraciones puedes hacer antes de que el programa termine con float y con Decimal?
12. Crea una clase que use \_\_float__.
    1. Crea una clase llamada Joya que tenga un atributo llamado quilate.
    2. Sobreescribe el método \_\_float__ para que retorne el valor de pureza en porcentaje, que se calcula como quilate / 24 * 100.
    3. Crea un método llamado ordenar_pureza que reciba una lista de joyas y las ordene de menor a mayor pureza usando float(joya).
13. Según el formato IEEE 754 escriba una función que reciba una cadena de 32 caracteres en binario (1 y 0) y retorne el valor flotante que representa.
    1. Solo está permitido usar len, slices, operaciones lógicas y aritméticas y estructuras de control.
    2. Escriba la misma función usando la biblioteca struct.
    3. Escriba manualmente las cadenas binarias para los números 5.5, 10, 0.002, 51552.1188 usando lo aprendido sobre IEEE 754.

## Recursos

- https://docs.python.org/3/tutorial/floatingpoint.html
- https://docs.python.org/3/tutorial/stdlib2.html#decimal-floating-point-arithmetic
- https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals
- https://docs.python.org/3/library/stdtypes.html#additional-methods-on-float
- https://docs.python.org/3/library/functions.html#float
- https://docs.python.org/3/reference/datamodel.html#object.\_\_float__
- https://docs.python.org/3/library/decimal.html
- https://docs.python.org/3/library/fractions.html