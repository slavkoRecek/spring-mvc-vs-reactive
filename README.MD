# Spring MVC and Reactive (webflux) comparison 

The purpose of this project is to do performance evaluation of same simple spring application
implemented in 2 different ways. The classic MVC approach; also known as thread-per-request.
And the reactive approach using spring webflux also known as non blocking event-lifecycle.

The app has one single endpoint that return coin rates that are stored in the mongo db.

How to start mongo in docker:
```
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
```

### Performance test
Performance tests were executed using jmeter. One ca use following command to perform jmeter run.

```
 jmeter -n -t  ./PerformanceTest/Plans/CoinTrack1.jmx -e -o ./PerformanceTest/Results/Report1 -l ./PerformanceTest/Results/Log1.log
```
The CoinTrack1.jmx test plan performs requests to the app API in X concurrent threads.

#### Test Setup 1
- 12 threads (8 server, 4 db)
- 16MB of RAM
- MongoDb running on same CPU
- 50 threads
- 5 minutes duration

#### Test Results

| Average Response [ms]|Troughput [trans/s]| App  |
| ------------- |-------------| -----|
| 79.71      | 625.92| MVC |
| 86.77      | 575.2      |   Reacive |

#### Test Setup 2
- 12 threads (8 server, 2 db)
- 16MB of RAM
- MongoDb running on same CPU
- 50 threads
- 5 minutes duration

#### Test Results

| Average Response [ms]|Troughput [trans/s]| App  |
| ------------- |-------------| -----|
| 99.63 | 500.98 | MVC |
| 80.24 | 621.97 | Reacive |

## Conclusion

In the above scenario there is no noticable performance advantage of 
reactive approach over MVC approach.

Checkout different branches to see if other setups yield different results.
