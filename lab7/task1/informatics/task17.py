from collections import defaultdict, deque

N = int(input())

children = defaultdict(list)

for _ in range(N):
    msg, parent = map(int, input().split())
    children[parent].append(msg)

k = int(input())

queue = deque([k])
count = 0

while queue:
    current = queue.popleft()
    count += 1
    queue.extend(children[current])  

print(count)