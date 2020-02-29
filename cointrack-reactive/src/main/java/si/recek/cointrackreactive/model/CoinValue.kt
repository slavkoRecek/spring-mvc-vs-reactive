package si.recek.cointrack.model

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime

@Document
data class CoinValue(
        val time: LocalDateTime,
        @JsonFormat(shape = JsonFormat.Shape.NUMBER_INT)
        val value: Double,
        @JsonIgnore
        val coinSymbol: String,
        @Id
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