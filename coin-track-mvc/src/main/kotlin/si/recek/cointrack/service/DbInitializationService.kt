package si.recek.cointrack.service

import si.recek.cointrack.model.Coin
import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Component
import si.recek.cointrack.model.CoinValue
import si.recek.cointrack.repository.CoinRepository
import si.recek.cointrack.repository.CoinValueRepository
import java.time.LocalDateTime
import kotlin.random.Random

@Component
class DbInitializationService(
        private val coinRepository: CoinRepository,
        private val coinValueRepository: CoinValueRepository) :CommandLineRunner {
    private val logger = LoggerFactory.getLogger(javaClass)

    override fun run(vararg args: String?) {
        logger.info("Database initializer execution start")

        initializeCoin("BTC", "Bitcoin")
        initializeCoin("ETH", "Etherium");

        logger.info("Size of coin Values ${coinValueRepository.count()}")
    }

    private fun initializeCoin(symbol: String, description: String ): Unit {
        if(coinRepository.findById(symbol).isEmpty) {
            val btc = Coin(symbol, description);
            coinRepository.save(btc);
            saveCoinValues(btc.symbol);
        }
    }

    private fun saveCoinValues(symbol: String) {
        var date = LocalDateTime.of(2020, 1, 1, 1, 0)
        val endDate = LocalDateTime.of(2020, 2, 1, 0, 0)
        val list: MutableList<LocalDateTime> = ArrayList()
        while (date.isBefore(endDate)) {
            list.add(date)
            date = date.plusHours(1)
        }

        val listOfCoinValue: List<CoinValue> = list.map { time ->
            val value = Random.nextDouble(0.0, 999.99)
            CoinValue(time, value, symbol)
        }
        coinValueRepository.saveAll(listOfCoinValue)

    }
}