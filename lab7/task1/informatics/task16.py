def hanoi(n, source, target, auxiliary):
    if n == 0:
        return
    hanoi(n-1, source, auxiliary, target)
    print(n, source, target)
    hanoi(n-1, auxiliary, target, source)

n = int(input())
hanoi(n, 1, 3, 2)