from models import Animal, Dog, Cat

def main():
    generic_animal = Animal("Generic", 5, "brown")
    dog = Dog("Rex", 3, "black", "Labrador")
    cat = Cat("Whiskers", 2, "white", 7)

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