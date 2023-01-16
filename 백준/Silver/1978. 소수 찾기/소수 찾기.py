n = int(input())
a = list(map(int, input().split()))
count = 0
for i in a:
    if i == 1:
        continue
    if i == 2:
        count += 1
        continue
    for j in range(2, i//2+1):
        if i % j == 0:
            break
    else:
        count += 1
print(count)