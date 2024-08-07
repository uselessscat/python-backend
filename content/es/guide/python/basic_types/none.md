---
title: 6. None y valores sentinela
weight: 6
---

## Actividades

1. Asigna a None un valor cualquiera, ¿que error se produce?
2. Suma None con un número, ¿que error se produce?
3. Imprime los resultados de None == None y None is None. ¿Por que el resultado es True en ambos casos?
4. Usa bool() para convertir None a un valor booleano, ¿que valor obtienes?
5. Escribe una función que imprima "hola mundo".
   - Asigna el resultado de la función a una variable y luego imprime la variable.
   - Imprime el tipo de la variable usando type().
   - Vuelve a aplicar type() al resultado del punto anterior e imprime el resultado.
6. Crea una función que reciba una parámetro arbitrario y retorne true si y solo si el valor es None.
7. Crea una un diccionario con algunas claves con valores None. Usa get para obtener estos valores.
   1. ¿Cómo evitas esta igualdad `{}.get("key") == {"key": None}.get("key")`?
   2. ¿Por que esta igualdad es falsa?

      ```python
      sentinel = object()

      {}.get("key", sentinel) == {"key": None}.get("key", sentinel)
      ```

## Recursos

- https://docs.python.org/3/reference/simple_stmts.html#expression-statements
- https://docs.python.org/3/library/constants.html#None
- https://docs.python.org/3/c-api/none.html
- https://docs.python.org/3/reference/datamodel.html#none