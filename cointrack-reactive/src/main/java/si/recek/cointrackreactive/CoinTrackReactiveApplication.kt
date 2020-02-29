package si.recek.cointrackreactive

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CoinTrackReactiveApplication

fun main(args: Array<String>) {
    runApplication<CoinTrackReactiveApplication>(*args)
}
