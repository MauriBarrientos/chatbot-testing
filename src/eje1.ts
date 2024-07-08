// src/marcoTeorico.ts
export const eje1 = `
Eje temático 1: Introducción a la Estadística
Unidad 1: Conceptos básicos de la Estadística
1. Concepto, etapas del método: La estadística es una ciencia que se encarga de estudiar los métodos y procedimientos para recoger, clasificar, resumir y analizar datos, con el fin de realizar inferencias científicas que permitan tomar decisiones informadas en diversos ámbitos. La palabra "estadística" tiene dos significados básicos:
- En un sentido, se refiere a los números que derivan de datos obtenidos, como los datos de censos, encuestas, etc.
- En un sentido más amplio, se refiere al método de análisis de estos datos.

Las etapas del método estadístico incluyen:
- Recogida de datos: Obtener información relevante mediante censos, encuestas, experimentos, etc.
- Clasificación y organización: Ordenar los datos en tablas, gráficos o diagramas para facilitar su análisis.
- Resumen y análisis: Utilizar técnicas estadísticas para resumir y analizar los datos.
- Inferencia y toma de decisiones: Hacer conclusiones basadas en los datos analizados y tomar decisiones fundamentadas.

2. Población y Muestra:
- Población: Es el conjunto total de elementos sobre los que se desea realizar un estudio. Puede ser finita (por ejemplo, todos los empleados de una empresa) o infinita (por ejemplo, todos los posibles resultados de lanzar un dado).
- Muestra: Es un subconjunto de la población que se selecciona para realizar el estudio. La muestra debe ser representativa de la población para que las conclusiones del estudio sean válidas y aplicables a toda la población. Existen diversas técnicas de muestreo que se utilizan para seleccionar la muestra de manera adecuada.

3. Medición de unidades elementales: variables y clasificación:
- Variables: Son características o propiedades de las unidades de análisis que pueden tomar diferentes valores. Las variables se clasifican en:
  - Cualitativas (Categóricas): No numéricas, se dividen en:
    - Nominales: No tienen un orden específico (e.g., color de ojos).
    - Ordinales: Tienen un orden específico (e.g., nivel de satisfacción).
  - Cuantitativas (Numéricas): Se pueden medir numéricamente, se dividen en:
    - Discretas: Toman valores específicos y contables (e.g., número de hijos).
    - Continuas: Pueden tomar cualquier valor dentro de un rango (e.g., altura, peso).

4. Tipos de escalas: Existen diferentes tipos de escalas para medir las variables:
- Nominal: Clasifica los datos en categorías sin un orden específico (e.g., género, color de ojos).
- Ordinal: Clasifica los datos en categorías con un orden específico, pero sin una distancia precisa entre las categorías (e.g., nivel educativo, nivel de satisfacción).
- Intervalo: Los datos tienen un orden y una distancia igual entre ellos, pero no un cero absoluto que indique ausencia (e.g., temperatura en grados Celsius).
- Razón: Similar a la escala de intervalo, pero con un cero absoluto que indica la ausencia de la propiedad medida, permitiendo la comparación de proporciones (e.g., peso, altura).

Unidad 2: Inferencia Estadística
1. Muestreo y tipos de muestreo:
- Muestreo Probabilístico: Cada elemento de la población tiene una probabilidad conocida y no nula de ser seleccionado. Tipos de muestreo probabilístico:
  - Muestreo Aleatorio Simple: Cada individuo tiene la misma probabilidad de ser seleccionado. Se puede realizar asignando un número a cada individuo y utilizando un generador de números aleatorios para seleccionar la muestra.
  - Muestreo Sistemático: Se selecciona un punto de inicio aleatorio y luego se elige cada n-ésimo elemento de la lista.
  - Muestreo Estratificado: La población se divide en estratos homogéneos y se selecciona una muestra aleatoria de cada estrato para asegurar que cada subgrupo esté representado.
  - Muestreo por Conglomerados: La población se divide en conglomerados (grupos naturales) y se seleccionan aleatoriamente algunos conglomerados para incluir todos los elementos dentro de esos conglomerados en la muestra.

- Muestreo No Probabilístico: La probabilidad de inclusión de cada elemento no puede determinarse. Tipos de muestreo no probabilístico:
  - Muestreo por Conveniencia: Selección basada en la facilidad de acceso a los sujetos.
  - Muestreo por Bola de Nieve: Selección de sujetos a partir de recomendaciones de otros sujetos, útil en poblaciones difíciles de acceder.
  - Muestreo por Cuotas: División de la población en grupos y selección proporcional de cada grupo, similar al muestreo estratificado pero sin aleatoriedad.
  - Muestreo Discrecional: Selección basada en el juicio del investigador, útil para estudios exploratorios.

2. Identificación del muestreo para cada situación: La elección del tipo de muestreo depende de varios factores:
- Objetivo del estudio: Si se requiere una alta representatividad y generalización de los resultados, se prefiere el muestreo probabilístico. Para estudios exploratorios o cuando es difícil acceder a la población completa, el muestreo no probabilístico puede ser adecuado.
- Recursos disponibles: Tiempo, costo y accesibilidad pueden influir en la elección del método de muestreo.
- Naturaleza de la población: La heterogeneidad de la población puede hacer necesario el uso de técnicas como el muestreo estratificado o por conglomerados.

3. Determinar el tamaño de la muestra: El tamaño de la muestra se determina en función de varios criterios:
- Variabilidad de los datos: Cuanta más variabilidad haya en la población, mayor deberá ser la muestra para obtener resultados precisos.
- Nivel de confianza: La probabilidad de que el intervalo de confianza contenga el parámetro poblacional. Niveles comunes son 90%, 95%, y 99%.
- Margen de error: La diferencia máxima aceptable entre el valor estimado en la muestra y el verdadero valor poblacional. Cuanto menor sea el margen de error, mayor será la muestra necesaria.

Las fórmulas estadísticas para determinar el tamaño de la muestra consideran estos factores y utilizan parámetros específicos según el tipo de estudio y las características de la población.
`;
