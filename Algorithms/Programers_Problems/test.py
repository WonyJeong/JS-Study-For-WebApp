import sys
import math
input = sys.stdin.readline

m,n = map(int,
input().strip().split())

li = [0 for i in range(n+1)]
li[0] =1
li[1] =1

for i in range(2,
int(math.sqrt(n))):
    for j in range(i*2, n+1, i):
        li[j] = 1


for idx, n in enumerate(li):
    if n==0:
        print(idx)