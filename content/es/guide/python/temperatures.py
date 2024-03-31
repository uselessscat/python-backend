import csv
import numpy as np
import matplotlib.pyplot as plt

n_dias = 15
horas_por_dia = 26
temp_promedio_marte = -20
amplitud_temp = 20
ruido = 2

horas = np.arange(0, n_dias * horas_por_dia)
variaciones_temp = amplitud_temp * np.sin(2 * np.pi * (horas % horas_por_dia) / horas_por_dia)
temperaturas = temp_promedio_marte + variaciones_temp
temperaturas_con_ruido = temperaturas + np.random.normal(0, ruido, temperaturas.shape)

with open('temperatures.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Hour', 'Temperature', 'Integer ratio', 'Hex'])

    for hora, temperatura in zip(horas, temperaturas_con_ruido):
        writer.writerow([hora, temperatura, "{}/{}".format(*temperatura.as_integer_ratio()), temperatura.hex()])


plt.figure(figsize=(15, 5))
plt.plot(horas, temperaturas_con_ruido, label='Temperatura con ruido')
plt.xticks(range(0, n_dias * horas_por_dia, horas_por_dia), [f'Día {i+1}' for i in range(n_dias)])
plt.xlabel('Tiempo (Días)')
plt.ylabel('Temperatura (°C)')
plt.title('Simulación de Temperatura en un Planeta')
plt.grid(True)
plt.legend()

plt.show()