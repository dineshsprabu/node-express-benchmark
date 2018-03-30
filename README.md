
# NodeJS Express environment benchmark

## NODE_ENV : development

## PM2 logs

2|Benchmar | GET /view 200 0.701 ms - 3083
1|Benchmar | GET /view 200 0.307 ms - 3083
1|Benchmar | GET /view 200 0.525 ms - 3083
3|Benchmar | GET /view 200 0.586 ms - 3083
3|Benchmar | GET /view 200 0.782 ms - 3083
2|Benchmar | GET /view 200 0.847 ms - 3083
0|Benchmar | GET /view 200 0.610 ms - 3083
0|Benchmar | GET /view 200 0.628 ms - 3083

### Test 1

```
>> ab -n 1000 -c 100 http://localhost:3000/view

This is ApacheBench, Version 2.3 <$Revision: 1748469 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /view
Document Length:        3083 bytes

Concurrency Level:      100
Time taken for tests:   0.687 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      3286000 bytes
HTML transferred:       3083000 bytes
Requests per second:    1455.92 [#/sec] (mean)
Time per request:       68.685 [ms] (mean)
Time per request:       0.687 [ms] (mean, across all concurrent requests)
Transfer rate:          4672.04 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.6      0       3
Processing:     3   66  14.8     65     178
Waiting:        3   65  14.8     65     178
Total:          7   66  14.4     65     180

Percentage of the requests served within a certain time (ms)
  50%     65
  66%     68
  75%     72
  80%     77
  90%     85
  95%     90
  98%     91
  99%     91
 100%    180 (longest request)
```

### Test 2

```
>> ab -n 1000 -c 100 http://localhost:3000/view
This is ApacheBench, Version 2.3 <$Revision: 1748469 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /view
Document Length:        3083 bytes

Concurrency Level:      100
Time taken for tests:   0.627 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      3286000 bytes
HTML transferred:       3083000 bytes
Requests per second:    1595.79 [#/sec] (mean)
Time per request:       62.665 [ms] (mean)
Time per request:       0.627 [ms] (mean, across all concurrent requests)
Transfer rate:          5120.86 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.8      0       4
Processing:     5   60  12.4     59      89
Waiting:        5   60  12.4     59      89
Total:          9   60  11.9     59      89

Percentage of the requests served within a certain time (ms)
  50%     59
  66%     61
  75%     63
  80%     67
  90%     76
  95%     83
  98%     87
  99%     88
 100%     89 (longest request)
```

## NODE_ENV : production

## PM2 logs

2|Benchmar | GET /view 200 0.252 ms - 3083
0|Benchmar | GET /view 200 0.247 ms - 3083
3|Benchmar | GET /view 200 0.232 ms - 3083
1|Benchmar | GET /view 200 0.235 ms - 3083
0|Benchmar | GET /view 200 0.194 ms - 3083
3|Benchmar | GET /view 200 0.220 ms - 3083

### Test 1

```
>> ab -n 1000 -c 100 http://localhost:3000/view
This is ApacheBench, Version 2.3 <$Revision: 1748469 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /view
Document Length:        3083 bytes

Concurrency Level:      100
Time taken for tests:   0.482 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      3286000 bytes
HTML transferred:       3083000 bytes
Requests per second:    2073.55 [#/sec] (mean)
Time per request:       48.226 [ms] (mean)
Time per request:       0.482 [ms] (mean, across all concurrent requests)
Transfer rate:          6654.00 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.5      0       3
Processing:     3   46   9.7     45      65
Waiting:        3   46   9.7     45      65
Total:          6   46   9.4     46      65

Percentage of the requests served within a certain time (ms)
  50%     46
  66%     49
  75%     51
  80%     54
  90%     59
  95%     62
  98%     63
  99%     63
 100%     65 (longest request)
```

### Test 2

```
>> ab -n 1000 -c 100 http://localhost:3000/view
This is ApacheBench, Version 2.3 <$Revision: 1748469 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /view
Document Length:        3083 bytes

Concurrency Level:      100
Time taken for tests:   0.479 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      3286000 bytes
HTML transferred:       3083000 bytes
Requests per second:    2086.90 [#/sec] (mean)
Time per request:       47.918 [ms] (mean)
Time per request:       0.479 [ms] (mean, across all concurrent requests)
Transfer rate:          6696.84 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.8      0       4
Processing:     2   45   8.9     47      60
Waiting:        1   45   8.9     47      60
Total:          5   46   8.2     47      60

Percentage of the requests served within a certain time (ms)
  50%     47
  66%     48
  75%     49
  80%     50
  90%     52
  95%     54
  98%     58
  99%     59
 100%     60 (longest request)
```