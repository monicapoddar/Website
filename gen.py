nums = []
for i in xrange(64):
  s = ""
  if i == 0:
    s = "000000"
    nums.append(s)
    continue
  base3 = []
  n = i
  while n:
    n, r = divmod(n, 3)
    base3.append(str(r))
  j = len(base3)
  while j < 6:
    base3.append("0")
    j+=1
  nums.append("".join(reversed(base3)))
print nums
