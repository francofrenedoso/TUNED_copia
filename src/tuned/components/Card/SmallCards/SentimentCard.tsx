/*
# DOCUMENTACION 

Endpoint esperado
URL = /api/sentiment (modificar según tu configuración)
Método: GET
Frecuencia de consulta: cada 3 segundos (configurable)

Formato de respuesta esperado
La respuesta debe ser un objeto JSON con la siguiente estructura:

{
  "status": "positive",      
  "percentage": 75           
}

Detalles de los campos

status:
Tipo: string
Valores permitidos: "positive", "negative", "neutral"
Indica el sentimiento predominante en la transmisión.

percentage:
Tipo: number
Rango: 0 a 100
Representa el porcentaje de comentarios que corresponden al sentimiento actual.


*/

import SmallCardBase from './SmallCardBase';
import React from 'react';
import { useConnection } from '../../../hooks/useConnection';
import { useFadeValue } from '../../../hooks/useFadeValue';

const SENTIMENT_MAP = {
	positive: { title: 'Positivo', img: 'tuned/icon_sentiments_positive.png' },
	negative: { title: 'Negativo', img: 'tuned/icon_sentiments_negative.png' },
	neutral: { title: 'Neutral', img: 'tuned/icon_sentiments_neutral.png' },
};
const SENTIMENT_DEFAULT = {
	title: 'Cargando datos...',
	img: 'tuned/icon_sentiments_neutral.png',
};

interface SentimentData {
	status: 'positive' | 'negative' | 'neutral';
	percentage: number;
}

interface SentimentCardProps {
	simulate?: boolean;
}

const SentimentCard: React.FC<SentimentCardProps> = () => {
	// cambiar esto por la api real
	const url = '/api/sentiment';

	// Usar solo useConnection
	
	
	const { data: sentiment, loading } = useConnection<SentimentData>(url, 3000);

	const { displayedValue, fade } = useFadeValue<number | undefined>(sentiment?.percentage, 150);

	const sentimentInfo = sentiment ? SENTIMENT_MAP[sentiment.status] : SENTIMENT_DEFAULT;
	const modalData = {
		title: 'Sentiment Analysis',
		body: 'Analiza en tiempo real cuantos comentarios positivos y negativos hay en la transmisión, clasificándolos y mostrando el sentimiento general actual.',
	};

	return (
		<SmallCardBase
			title={modalData.title}
			img={sentimentInfo.img}
			// firstLine={sentimentInfo.title}
			numberLine={
				<span
					className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
					{loading ? (
						<span className='animate-pulse'>. . . %</span>
					) : (
						`${displayedValue ?? '. . .'} %`
					)}
				</span>
			}
			modalData={modalData}
		/>
	);
};

export default SentimentCard;
