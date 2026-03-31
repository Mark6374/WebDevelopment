n = int(input())
a = 1
sum = 0
for i in range(n):
    sum += a ** 2
    a += 1
    i += 1

print(sum)
