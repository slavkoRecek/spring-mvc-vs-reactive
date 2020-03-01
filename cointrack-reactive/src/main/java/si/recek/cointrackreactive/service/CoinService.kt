package si.recek.cointrackreactive.service

import org.springframework.stereotype.Service
import reactor.core.publisher.Mono
import si.recek.cointrackreactive.model.CoinValues
import si.recek.cointrackreactive.repository.CoinValueRepository

@Service
class CoinService(private val coinValueRepository: CoinValueRepository) {
    fun getAllValuesForCoin(coinSymbol: String): Mono<CoinValues> {
        return coinValueRepository.getAllByCoinSymbol(coinSymbol)
                .collectList()
                .map { list -> CoinValues(coinSymbol, list.sortedBy { coinValue -> coinValue.time}) }
    }

}
