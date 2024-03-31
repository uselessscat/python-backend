from faker import Faker
import csv

fk = Faker(['es_AR', 'es_CL', 'es_CO', 'es_ES', 'es_MX', 'en_AU', 'en_US', 'en_GB'])

with open('personas.csv', 'w', newline='', encoding='utf-8') as archivo:
    campos = ['Nombre', 'Edad', 'Trabajo', 'Ciudad']
    writer = csv.DictWriter(archivo, fieldnames=campos)

    writer.writeheader()

    for i in range(1000):
        locale = fk.random_element(fk.locales)

        nombre = fk[locale].name()
        edad = fk.random_int(18, 80)
        trabajo = fk[locale].job()
        ciudad = fk[locale].city()

        writer.writerow({
            'Nombre': nombre,
            'Edad': edad,
            'Trabajo': trabajo,
            'Ciudad': ciudad,
        })
