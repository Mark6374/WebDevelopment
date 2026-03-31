from models import Animal, Dog, Cat

def main():
    generic_animal = Animal("Generic", 5, "brown")
<<<<<<< HEAD
    dog = Dog("Bobik", 3, "black")
    cat = Cat("Snezhok", 2, "white")
=======
    dog = Dog("Rex", 3, "black", "Labrador")
    cat = Cat("Whiskers", 2, "white", 7)
>>>>>>> d7150fd4090b8e0d0efa4378c05c1dd75ba3689b

    animals = [generic_animal, dog, cat]

    for animal in animals:
        print(animal)
        print(f"Info: {animal.info()}")
        print(f"Speak: {animal.speak()}")
        print()

    print(dog.fetch())
    print(cat.climb())

if __name__ == "__main__":
    main()