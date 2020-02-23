package si.recek.cointrack.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import si.recek.cointrack.model.CoinValue
import si.recek.cointrack.model.CoinValues
import si.recek.cointrack.service.CoinService

@RestController
class CoinController(private val coinService: CoinService) {

    @GetMapping("/coins/{coinSymbol}/values")
    fun getValuesForCoin(@PathVariable coinSymbol: String): CoinValues {
        return coinService.getAllValuesForCoin(coinSymbol)
    }

}