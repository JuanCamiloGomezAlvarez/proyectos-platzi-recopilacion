def potencia(numero):
    potencia = 1
    while(potencia <= 10):
        resultado = numero**potencia
        print("potencia de {} elevado a la {} es {}".format(
            numero, potencia, resultado))
        potencia += 1


# principal function
def run():
    numero = int(input("ingrese un numero"))
    potencia(numero)


# entry point
if __name__ == "__main__":
    run()
