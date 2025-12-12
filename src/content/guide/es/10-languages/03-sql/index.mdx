# SQL

1. Introducción a SQL y PostgreSQL

2. Modelo Relacional y Conceptos Básicos
   1. Fundamentos del modelo relacional
      1. Tablas, filas (tuplas) y columnas (atributos)
      2. Dominios de datos y tipos
      3. Claves primarias, claves únicas y claves ajenas
      4. Normalización y formas normales (1FN, 2FN, 3FN, BCNF a alto nivel)
      5. Integridad referencial y restricciones
   2. Tipos de datos en PostgreSQL
      1. Tipos escalares básicos (`integer`, `bigint`, `numeric`, `real`, `boolean`)
      2. Tipos de texto (`text`, `varchar`, `char`)
      3. Tipos de fecha y tiempo (`date`, `time`, `timestamp`, `timestamptz`, `interval`)
      4. Tipos avanzados: `json`, `jsonb`, `uuid`, `bytea`
      5. Arrays, enums y dominios definidos por el usuario
      6. Conversión y casting de tipos (`::tipo`, `CAST`)
   3. Componentes lógicos de una base de datos PostgreSQL
      1. Servidor, bases de datos, esquemas, tablas
      2. Vistas, materialized views
      3. Secuencias e identidad (`SERIAL`, `GENERATED AS IDENTITY`)
      4. Índices y constraints como objetos del catálogo
      5. Catálogo de sistema (`pg_catalog`, `information_schema`)

3. Lenguaje SQL Básico (DDL, DML, DQL)
   1. DDL: Definición de datos
      1. Crear y borrar tablas (`CREATE TABLE`, `DROP TABLE`)
      2. Alterar tablas (`ALTER TABLE` para columnas e índices)
      3. Definir claves primarias, foráneas, `UNIQUE`, `CHECK`
      4. Definir esquemas (`CREATE SCHEMA`) y uso de `search_path`
      5. Comentarios en objetos (`COMMENT ON`)
   2. DML: Manipulación de datos
      1. Insertar datos (`INSERT`, `INSERT ... RETURNING`)
      2. Actualizar filas (`UPDATE`)
      3. Eliminar filas (`DELETE`)
      4. `UPSERT`: `INSERT ... ON CONFLICT`
      5. Buenas prácticas para operaciones masivas (batching, COPY)
   3. DQL: Consultas básicas
      1. `SELECT` mínimo (proyección de columnas)
      2. Filtros con `WHERE`
      3. Ordenamiento con `ORDER BY`
      4. Limitación de resultados (`LIMIT`, `OFFSET`, `FETCH`)
      5. Alias de columnas y tablas (`AS`)
      6. Operadores lógicos y de comparación

4. Consultas Relacionales y Agregaciones
   1. Joins
      1. `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`
      2. Auto-join y self-join
      3. `CROSS JOIN` y producto cartesiano
      4. Uso de `USING` vs `ON`
      5. Diferencias entre filtros en `ON` y en `WHERE`
   2. Agregaciones
      1. Funciones de agregación (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)
      2. Agrupación de resultados con `GROUP BY`
      3. Filtrado de grupos con `HAVING`
      4. Agregaciones combinadas y múltiples
   3. Subconsultas
      1. Subconsultas escalares en `SELECT` y `WHERE`
      2. Subconsultas correlacionadas
      3. Uso de `IN`, `EXISTS`, `ANY`, `ALL`
      4. Subconsultas en `FROM` (derived tables)

5. Funciones, Expresiones y Características SQL de PostgreSQL
   1. Funciones integradas
      1. Funciones de texto (`LOWER`, `UPPER`, `SUBSTRING`, `TRIM`, `CONCAT`)
      2. Funciones numéricas (`ROUND`, `CEIL`, `FLOOR`, `RANDOM`)
      3. Funciones de fecha y hora (`NOW`, `CURRENT_DATE`, `AGE`, `DATE_TRUNC`)
      4. Funciones de agregación avanzadas y de ventana
   2. Funciones de ventana (window functions)
      1. Cláusula `OVER` y particiones (`PARTITION BY`, `ORDER BY`)
      2. Funciones de ranking (`ROW_NUMBER`, `RANK`, `DENSE_RANK`)
      3. Ventanas deslizantes (`ROWS BETWEEN`, `RANGE BETWEEN`)
   3. Expresiones y operadores avanzados
      1. Operadores de arrays (`ANY`, `ALL`, indexación por corchetes)
      2. Operadores de JSON/JSONB (`->`, `->>`, `#>`, `#>>`, `@>`)
      3. Expresiones CASE y expresiones condicionales
      4. Expresiones regulares (`~`, `~*`, `!~`)

6. Diseño de Esquema, Constraints y Normalización
   1. Diseño de tablas y relaciones
      1. Elegir claves primarias (naturales vs surrogate, `SERIAL` vs `UUID`)
      2. Relaciones 1–N, N–M (tablas de unión)
      3. Desnormalización controlada y vistas
   2. Constraints e integridad
      1. `NOT NULL`, `UNIQUE`, `CHECK`
      2. Constraints diferibles (`DEFERRABLE`, `INITIALLY DEFERRED`)
      3. Restricciones de claves foráneas y acciones (`ON DELETE`, `ON UPDATE`)
      4. Validación de datos a nivel de base vs a nivel de aplicación
   3. Normalización práctica
      1. Aplicar 1FN, 2FN, 3FN a ejemplos concretos
      2. Cuándo romper la normalización (performance, reporting)
      3. Patrones comunes de diseño (audit trails, soft delete)

7. Índices, Performance y Planes de Ejecución
   1. Índices en PostgreSQL
      1. Índices B-tree (por defecto)
      2. Índices hash, GIN, GiST, BRIN
      3. Índices parciales y multi-columna
      4. Índices únicos vs no únicos
   2. Análisis de consultas
      1. `EXPLAIN` y `EXPLAIN ANALYZE`
      2. Seq scan vs index scan vs bitmap scan
      3. Entender join methods (nested loop, hash join, merge join)
      4. Estadísticas y el planner (`ANALYZE`, `autovacuum`)
   3. Optimización básica
      1. Escribir consultas eficientes (evitar N+1, subconsultas innecesarias)
      2. Uso de índices adecuados para filtros y joins
      3. Evitar funciones no index-friendly en `WHERE`
      4. Ajuste básico de parámetros (`work_mem`, `maintenance_work_mem` a alto nivel)

8. Transacciones, Concurrencia y MVCC
   1. Transacciones
      1. Conceptos ACID
      2. `BEGIN`, `COMMIT`, `ROLLBACK`
      3. Savepoints (`SAVEPOINT`, `ROLLBACK TO SAVEPOINT`)
   2. MVCC en PostgreSQL
      1. Versionado de filas y visibilidad
      2. `VACUUM` y `autovacuum`
      3. Impacto de MVCC en el almacenamiento y en la performance
   3. Niveles de aislamiento y locks
      1. Niveles de aislamiento (`READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`)
      2. Locks implícitos y explícitos (`SELECT ... FOR UPDATE`, `LOCK TABLE`)
      3. Deadlocks: detección y mitigación

9. Seguridad, Roles y Control de Acceso
   1. Roles y privilegios
      1. Usuarios vs roles, grupos de roles
      2. Permisos `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`
      3. Permisos en esquemas y secuencias
   2. Autenticación y configuración
      1. `pg_hba.conf` (tipos de auth: trust, password, scram, md5, etc.)
      2. Conexiones locales vs remotas
      3. SSL/TLS a alto nivel
   3. Seguridad de datos
      1. Column-level y row-level security (RLS)
      2. Buenas prácticas de mínimos privilegios
      3. Auditoría básica (logs, statement logging)

10. Herramientas, Administración y Ecosistema
    1. Administración básica
       1. Backups lógicos (`pg_dump`, `pg_restore`)
       2. Backups físicos y PITR (visión general)
       3. Monitoreo básico (`pg_stat_activity`, vistas de sistema)
       4. Mantenimiento rutinario (`VACUUM`, `REINDEX`, `ANALYZE`)
    2. Entorno de desarrollo
       1. Uso de migraciones (Flyway, Liquibase, Sqitch)
       2. Estrategias de versionado de esquema
       3. Integración con ORMs (SQLAlchemy, Django ORM, etc.)
    3. Extensiones y especializaciones
       1. PostGIS (GIS y tipos geoespaciales)
       2. Full-text search nativo de PostgreSQL
       3. JSONB como pseudo-document store
       4. Funciones definidas por el usuario (PL/pgSQL, otros lenguajes)
