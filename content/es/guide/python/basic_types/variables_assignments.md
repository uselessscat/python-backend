---
title: Variables y Asignaciones
weight: 1
---
1. **Definición de Variables y Asignación**: Define cinco variables con tipos de datos diferentes (int, float, str, list, dict) usando el operador de asignación (`=`). Asegúrate de que los nombres de las variables sean descriptivos y sigan las convenciones de Python.
2. **Asignaciones:**
   1. **Aplicación Creativa del Operador de Asignación**: Utiliza el operador de asignación para realizar una operación de intercambio de valores entre dos variables sin utilizar una variable temporal.
   2. **Asignación Múltiple**: Demuestra cómo asignar el mismo valor a varias variables en una sola línea.
   3. **Asignación Desempaquetada**: Muestra cómo asignar valores de una lista a variables individuales en una sola línea.
   4. **Asignación de Tuplas a un Único Valor**: Demuestra cómo una tupla de valores puede ser asignada a una sola variable y cómo acceder a esos valores desde la variable.
   5. **Asignación de un Elemento de una Colección**: Muestra cómo asignar un valor a un elemento específico dentro de una lista o diccionario.
   6. **Asignación Aumentada**: Explica y demuestra el uso de operadores de asignación aumentada como `+=`, `=`, etc., en diferentes tipos de datos (números, listas, cadenas).
   7. **Asignación con Operadores de Desempaquetado para Colecciones**: Usa el operador `*` para capturar múltiples elementos en listas durante la asignación.
   8. **Asignación Local**: Define una función `funcion_local()` que declare una variable `x` y la asigne a un valor. Imprime el valor de `x` dentro de la función para demostrar que `x` está vinculada en el espacio de nombres local de la función.
   9. **Asignación Global**: Fuera de cualquier función, asigna un valor a una variable `y`. Define una función `funcion_global()` que use la declaración `global y` y luego cambie el valor de `y`. Imprime el valor de `y` antes y después de llamar a `funcion_global()` para demostrar que `y` está vinculada en el espacio de nombres global.
   10. **Asignación No Local**: Define una función `funcion_externa()` que declare una variable `z`, y dentro de ella, define una función anidada `funcion_interna()` que use la declaración `nonlocal z` y cambie el valor de `z`. Llama a `funcion_interna()` dentro de `funcion_externa()` y luego imprime `z` en `funcion_externa()` para demostrar que `z` está vinculada en el espacio de nombres no local.
   11. **Reasignación y Desasignación**: Define una variable `a` y asígnala a una lista. Luego, reasigna `a` a un nuevo valor (por ejemplo, un número). Discute (o demuestra con un ejemplo, si es posible) cómo la reasignación puede llevar a que el recuento de referencias del objeto original (la lista) llegue a cero, causando su desasignación y la llamada a su destructor si tiene uno.
   12. **Asignación en Listas**: Crea una lista con algunos elementos. Asigna un nuevo valor a uno de los elementos de la lista usando un índice positivo. Intenta asignar un nuevo valor usando un índice negativo. Intenta asignar un nuevo valor a un índice que está fuera del rango de la lista y maneja el `IndexError`.
   13. **Asignación en Diccionarios**: Crea un diccionario con algunas claves y valores. Asigna un nuevo valor a una de las claves existentes. Agrega un nuevo par clave-valor a tu diccionario usando la asignación a subíndices.
   14. **Asignación en Objetos Definidos por el Usuario**: Define una clase con el método `__setitem__()` implementado. Crea una instancia de esta clase y realiza la asignación a un subíndice de esta instancia. Dentro de `__setitem__()`, imprime los argumentos recibidos para demostrar cómo se llama el método.
   15. **Asignación Básica de Rebanadas (slices)**: Crea una lista con varios elementos. Realiza una asignación a una rebanada de esta lista y reemplaza algunos de los elementos con una nueva lista de elementos.
   16. **Manejo de Límites Negativos**: Asigna a una rebanada de la lista utilizando índices negativos y observa cómo Python trata estos índices negativos sumándoles la longitud de la secuencia.
   17. **Cambio de Longitud de la Secuencia**: Asigna una lista de longitud diferente a una rebanada de la lista original y observa cómo cambia la longitud total de la lista original.
   18. **Límites de Rebanada Fuera de Rango**: Intenta asignar a una rebanada cuyos límites están fuera del rango de la lista y observa cómo Python ajusta estos límites para que se ajusten dentro de la longitud válida de la secuencia.
3. **Uso de Nombres Válidos**: Corrige los nombres de las siguientes variables para que sean válidos en Python. Explica por qué los nombres originales eran inválidos.
   - `2nd_number = 10`
   - `global = "keyword"`
   - `my-name = "John"`
   - `import = 123`
     1. Define una variable con un nombre que contenga caracteres Unicode (por ejemplo, letras no inglesas) y asigna un valor a esta. Explica en qué situaciones esto podría ser útil o problemático.
     2. **Variables Emoji**: Define una variable que utilice un emoji como parte de su nombre y asígnale un valor. Por ejemplo, `carita_feliz_😊 = "¡Tengo un buen día!"`. Prueba usar `"<identifier>".isidentifier()`
4. **Uso de `_` en Diferentes Contextos**:
   - Ignora el valor de una variable que no necesitas, utilizando `_`.
   - Utiliza `_` para separar los dígitos en un número largo para mejorar su legibilidad.
   - Muestra cómo `_` puede ser utilizado para almacenar el resultado del último cálculo en una sesión interactiva de Python (este caso se puede describir, ya que no se puede demostrar en un script estático).
   - Usa `_` en un bucle `for` para ignorar el valor de índice.
   - Demuestra cómo ignorar múltiples valores al desempaquetar una lista o tupla.
   - Utiliza `_` al principio de nombres de variables para indicar su uso interno o protegido (por convención).
   - Menciona cómo `_` se utiliza comúnmente como alias para la función `gettext` en aplicaciones internacionalizadas.

## Recursos

- https://realpython.com/python-variables/
- https://docs.python.org/es/3.10/reference/lexical_analysis.html#reserved-classes-of-identifiers
- https://docs.python.org/3/reference/simple_stmts.html#assignment-statements
- https://realpython.com/python-double-underscore/