package si.recek.cointrack.model

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonProperty
import java.time.LocalDateTime

data class CoinValue(
        val time: LocalDateTime?,
        @JsonFormat(shape = JsonFormat.Shape.NUMBER_INT)
        val value: Double?,
        @JsonIgnore
        val coinSymbol: String?,
        @JsonIgnore
        val id: String? = null
)

data class CoinValues(
        val coinSymbol: String,
        val values: List<CoinValue>) {

        @JsonProperty
        fun valuesLength(): Int {
        return values.size
    }
}