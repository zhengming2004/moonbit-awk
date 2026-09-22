NR > 1 { count++; total += $3 } END { printf "orders=%d total=%.2f\n", count, total }
