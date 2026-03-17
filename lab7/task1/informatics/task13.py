N = int(input())

reachable = [False] * (N + 1)
reachable[1] = True  

for i in range(1, N + 1):
    if reachable[i]:
        if i + 3 <= N:
            reachable[i + 3] = True
        if i + 5 <= N:
            reachable[i + 5] = True

print("YES" if reachable[N] else "NO")