package si.recek.cointrack

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CoinTrackApplication

fun main(args: Array<String>) {
    runApplication<CoinTrackApplication>(*args)
}
