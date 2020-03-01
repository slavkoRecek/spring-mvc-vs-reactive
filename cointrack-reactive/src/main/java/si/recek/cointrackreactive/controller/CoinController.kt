package si.recek.cointrackreactive.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import si.recek.cointrackreactive.model.CoinValues
import si.recek.cointrackreactive.service.CoinService

@RestController
class CoinController(private val coinService: CoinService) {

    @GetMapping("/coins/{coinSymbol}/values")
    fun getValuesForCoin(@PathVariable coinSymbol: String): Mono<CoinValues> {
        return coinService.getAllValuesForCoin(coinSymbol)
    }

}