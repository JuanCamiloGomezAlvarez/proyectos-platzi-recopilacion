pesos = float(input("¿cuantos pesos colombianos tienes?: "))
valor_dolar = 3950
resultado = pesos/valor_dolar
resultado = round(resultado, 3)
resultado = str(resultado)
print("tienes $"+resultado+" dólares")
