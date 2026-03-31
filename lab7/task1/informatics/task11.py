n = int(input())

days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

month = 1
for days in days_in_month:
    if n > days:
        n -= days
        month += 1
    else:
        break

print(n, month)